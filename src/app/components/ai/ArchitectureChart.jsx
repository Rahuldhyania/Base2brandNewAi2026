'use client'
import { useMemo } from "react";
import { BarStack } from "@visx/shape";
import { Group } from "@visx/group";
import { Grid } from "@visx/grid";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import {
  useTooltip,
  useTooltipInPortal,
  defaultStyles,
} from "@visx/tooltip";
import { LegendOrdinal } from "@visx/legend";
import { localPoint } from "@visx/event";
import { ParentSize } from "@visx/responsive";

/**
 * ArchitectureChart
 * A stacked-bar visualization of how enterprise AI capability compounds
 * across architectural layers over time. Data is illustrative — six rolling
 * quarters showing capability depth (relative units) per layer.
 */

const KEY_META = [
  { key: "foundation", label: "Foundation Models", color: "#4C1D95" },
  { key: "agent", label: "Agent Layer", color: "#6D28D9" },
  { key: "knowledge", label: "Knowledge Layer", color: "#8B5CF6" },
  { key: "workflow", label: "Workflow Layer", color: "#A855F7" },
  { key: "decision", label: "Decision Layer", color: "#C084FC" },
];

const DATA = [
  { period: "Q1'24", foundation: 6, agent: 1, knowledge: 1, workflow: 0, decision: 0 },
  { period: "Q2'24", foundation: 7, agent: 3, knowledge: 2, workflow: 1, decision: 0 },
  { period: "Q3'24", foundation: 8, agent: 4, knowledge: 4, workflow: 2, decision: 1 },
  { period: "Q4'24", foundation: 9, agent: 6, knowledge: 5, workflow: 4, decision: 2 },
  { period: "Q1'25", foundation: 9, agent: 7, knowledge: 7, workflow: 5, decision: 3 },
  { period: "Q2'25", foundation: 10, agent: 9, knowledge: 8, workflow: 7, decision: 5 },
  { period: "Q3'25", foundation: 10, agent: 10, knowledge: 10, workflow: 9, decision: 7 },
  { period: "Q4'25", foundation: 11, agent: 11, knowledge: 12, workflow: 11, decision: 10 },
];

const KEYS = KEY_META.map((m) => m.key);
const totals = DATA.map((d) => KEYS.reduce((a, k) => a + d[k], 0));
const yMaxVal = Math.max(...totals);

const tooltipStyles = {
  ...defaultStyles,
  background: "rgba(15,6,26,0.95)",
  border: "1px solid rgba(139,92,246,0.4)",
  borderRadius: 8,
  color: "#fff",
  fontFamily: "var(--b2b-font-mono)",
  fontSize: 11,
  padding: "10px 12px",
  boxShadow: "0 8px 30px -10px rgba(139,92,246,0.4)",
};

const colorScale = scaleOrdinal({
  domain: KEYS,
  range: KEY_META.map((m) => m.color),
});

const getPeriod = (d) => d.period;

const InnerChart = ({ width, height }) => {
  const margin = { top: 8, right: 12, bottom: 32, left: 28 };
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const {
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
  } = useTooltip();

  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    scroll: true,
    detectBounds: true,
  });

  const dateScale = useMemo(
    () =>
      scaleBand({
        domain: DATA.map(getPeriod),
        padding: 0.28,
        range: [0, xMax],
      }),
    [xMax]
  );

  const yScale = useMemo(
    () =>
      scaleLinear({
        domain: [0, yMaxVal],
        nice: true,
        range: [yMax, 0],
      }),
    [yMax]
  );

  if (width < 10) return null;

  return (
    <div className="relative w-full h-full">
      <svg
        ref={containerRef}
        width="100% "
        height={height}
        role="img"
        aria-label="Enterprise AI capability deployment by layer over time"
      >
        <defs>
          {KEY_META.map((m) => (
            <linearGradient
              key={m.key}
              id={`grad-${m.key}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor={m.color} stopOpacity="1" />
              <stop offset="100%" stopColor={m.color} stopOpacity="0.55" />
            </linearGradient>
          ))}
        </defs>

        <Group left={margin.left} top={margin.top}>
          <Grid
            xScale={dateScale}
            yScale={yScale}
            width={xMax}
            height={yMax}
            stroke="rgba(255,255,255,0.06)"
            xOffset={dateScale.bandwidth() / 2}
            numTicksRows={5}
          />

          <BarStack
            data={DATA}
            keys={KEYS}
            x={getPeriod}
            xScale={dateScale}
            yScale={yScale}
            color={colorScale}
          >
            {(barStacks) =>
              barStacks.map((barStack) =>
                barStack.bars.map((bar) => (
                  <rect
                    key={`bar-${barStack.index}-${bar.index}`}
                    x={bar.x}
                    y={bar.y}
                    width={bar.width}
                    height={bar.height}
                    fill={`url(#grad-${barStack.key})`}
                    rx={2}
                    onMouseLeave={() => hideTooltip()}
                    onMouseMove={(e) => {
                      const p = localPoint(e) || { x: 0, y: 0 };
                      const meta = KEY_META.find((m) => m.key === barStack.key);
                      showTooltip({
                        tooltipData: {
                          period: bar.bar.data.period,
                          key: barStack.key,
                          label: meta?.label,
                          value: bar.bar.data[barStack.key],
                          color: meta?.color,
                        },
                        tooltipLeft: p.x,
                        tooltipTop: p.y,
                      });
                    }}
                  />
                ))
              )
            }
          </BarStack>

          <AxisBottom
            top={yMax}
            scale={dateScale}
            stroke="rgba(255,255,255,0.18)"
            tickStroke="rgba(255,255,255,0.18)"
            tickLabelProps={() => ({
              fill: "rgba(255,255,255,0.55)",
              fontSize: 10,
              fontFamily: "var(--b2b-font-mono)",
              textAnchor: "middle",
              dy: "0.6em",
            })}
          />
          <AxisLeft
            scale={yScale}
            stroke="rgba(255,255,255,0.12)"
            tickStroke="rgba(255,255,255,0.12)"
            numTicks={4}
            hideAxisLine
            tickLabelProps={() => ({
              fill: "rgba(255,255,255,0.4)",
              fontSize: 10,
              fontFamily: "var(--b2b-font-mono)",
              textAnchor: "end",
              dx: "-0.3em",
              dy: "0.3em",
            })}
          />
        </Group>
      </svg>

      {tooltipOpen && tooltipData && (
        <TooltipInPortal
          top={tooltipTop}
          left={tooltipLeft}
          style={tooltipStyles}
        >
          <div
            className="font-mono"
            style={{ color: tooltipData.color, marginBottom: 4 }}
          >
            <strong>{tooltipData.label}</strong>
          </div>
          <div style={{ color: "#fff" }}>
            {tooltipData.value} <span style={{ opacity: 0.5 }}>units</span>
          </div>
          <div style={{ opacity: 0.5, marginTop: 4 }}>
            {tooltipData.period}
          </div>
        </TooltipInPortal>
      )}
    </div>
  );
};

const ArchitectureChart = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="font-mono text-xs tracking-[0.25em] uppercase text-white/40">
         AI CAPABILITY DEPLOYMENT — LAST 8 QUARTERS
        </div>
        <div className="font-mono text-xs tracking-[0.25em] uppercase text-white/30 hidden sm:block">
          Illustrative · indexed units
        </div>
      </div>
      <div className="w-full h-[220px] sm:h-[280px] md:h-[320px]">
        <ParentSize>
          {({ width, height }) => (
            <InnerChart width={width} height={height} />
          )}
        </ParentSize>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
        <LegendOrdinal scale={colorScale}>
          {(labels) =>
            labels.map((l) => {
              const meta = KEY_META.find((m) => m.key === l.text);
              return (
                <span
                  key={l.text}
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] uppercase text-white/55"
                >
                  <span
                    className="w-3 h-3 rounded-sm"
                    style={{
                      background: `linear-gradient(180deg, ${meta?.color}, ${meta?.color}88)`,
                    }}
                  />
                  {meta?.label}
                </span>
              );
            })
          }
        </LegendOrdinal>
      </div>
    </div>
  );
};

export default ArchitectureChart;
