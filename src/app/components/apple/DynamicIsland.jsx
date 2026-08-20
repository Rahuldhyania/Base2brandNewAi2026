'use client'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { m, AnimatePresence, useWillChange } from "framer-motion";

/**
 * Dynamic Island — converted from supplied TypeScript component to JSX,
 * adapted to the Apple Ecosystem dark/blue design system.
 *
 * Public API preserved: `<DynamicIslandProvider>`, `<DynamicIsland id="...">`,
 * `<DynamicContainer>`, `<DynamicDiv>`, `<DynamicTitle>`, `<DynamicDescription>`,
 * `useDynamicIslandSize()`, `useScheduledAnimations()`, `SIZE_PRESETS`.
 */

const stiffness = 400;
const damping = 30;
const MIN_WIDTH = 691;
const MAX_HEIGHT_MOBILE_ULTRA = 400;
const MAX_HEIGHT_MOBILE_MASSIVE = 700;
const min = (a, b) => (a < b ? a : b);

export const SIZE_PRESETS = {
  RESET: "reset",
  EMPTY: "empty",
  DEFAULT: "default",
  COMPACT: "compact",
  COMPACT_LONG: "compactLong",
  LARGE: "large",
  LONG: "long",
  MINIMAL_LEADING: "minimalLeading",
  MINIMAL_TRAILING: "minimalTrailing",
  COMPACT_MEDIUM: "compactMedium",
  MEDIUM: "medium",
  TALL: "tall",
  ULTRA: "ultra",
  MASSIVE: "massive",
};

const DynamicIslandSizePresets = {
  reset:           { width: 150,  aspectRatio: 1,         borderRadius: 20 },
  empty:           { width: 0,    aspectRatio: 0,         borderRadius: 0 },
  default:         { width: 150,  aspectRatio: 44 / 150,  borderRadius: 46 },
  minimalLeading:  { width: 52.33, aspectRatio: 44 / 52.33, borderRadius: 22 },
  minimalTrailing: { width: 52.33, aspectRatio: 44 / 52.33, borderRadius: 22 },
  compact:         { width: 235,  aspectRatio: 44 / 235,  borderRadius: 46 },
  compactLong:     { width: 300,  aspectRatio: 44 / 235,  borderRadius: 46 },
  compactMedium:   { width: 351,  aspectRatio: 64 / 371,  borderRadius: 44 },
  long:            { width: 371,  aspectRatio: 84 / 371,  borderRadius: 42 },
  medium:          { width: 371,  aspectRatio: 210 / 371, borderRadius: 22 },
  large:           { width: 371,  aspectRatio: 84 / 371,  borderRadius: 42 },
  tall:            { width: 371,  aspectRatio: 210 / 371, borderRadius: 42 },
  ultra:           { width: 630,  aspectRatio: 630 / 800, borderRadius: 42 },
  massive:         { width: 891,  height: 1900, aspectRatio: 1, borderRadius: 42 },
};

const BlobContext = createContext(undefined);

function blobReducer(state, action) {
  switch (action.type) {
    case "SET_SIZE":
      return { ...state, size: action.newSize, previousSize: state.size, isAnimating: false };
    case "SCHEDULE_ANIMATION":
      return { ...state, animationQueue: action.animationSteps, isAnimating: action.animationSteps.length > 0 };
    case "INITIALIZE":
      return { ...state, size: action.firstState, previousSize: SIZE_PRESETS.EMPTY, isAnimating: false };
    case "ANIMATION_END":
      return { ...state, isAnimating: false };
    default:
      return state;
  }
}

export function DynamicIslandProvider({
  children,
  initialSize = SIZE_PRESETS.DEFAULT,
  initialAnimation = [],
}) {
  const initialState = {
    size: initialSize,
    previousSize: SIZE_PRESETS.EMPTY,
    animationQueue: initialAnimation,
    isAnimating: initialAnimation.length > 0,
  };

  const [state, dispatch] = useReducer(blobReducer, initialState);

  useEffect(() => {
    let cancelled = false;
    const processQueue = async () => {
      for (const step of state.animationQueue) {
        // eslint-disable-next-line no-await-in-loop
        await new Promise((resolve) => setTimeout(resolve, step.delay));
        if (cancelled) return;
        dispatch({ type: "SET_SIZE", newSize: step.size });
      }
      if (!cancelled) dispatch({ type: "ANIMATION_END" });
    };
    if (state.animationQueue.length > 0) processQueue();
    return () => { cancelled = true; };
  }, [state.animationQueue]);

  const setSize = useCallback(
    (newSize) => {
      if (state.previousSize !== newSize && newSize !== state.size) {
        dispatch({ type: "SET_SIZE", newSize });
      }
    },
    [state.previousSize, state.size]
  );

  const scheduleAnimation = useCallback((steps) => {
    dispatch({ type: "SCHEDULE_ANIMATION", animationSteps: steps });
  }, []);

  return (
    <BlobContext.Provider value={{ state, dispatch, setSize, scheduleAnimation, presets: DynamicIslandSizePresets }}>
      {children}
    </BlobContext.Provider>
  );
}

export function useDynamicIslandSize() {
  const ctx = useContext(BlobContext);
  if (!ctx) throw new Error("useDynamicIslandSize must be used within a DynamicIslandProvider");
  return ctx;
}

export function useScheduledAnimations(animations) {
  const { scheduleAnimation } = useDynamicIslandSize();
  const animationsRef = useRef(animations);
  useEffect(() => { scheduleAnimation(animationsRef.current); }, [scheduleAnimation]);
}

function calculateDimensions(size, screenSize, currentSize) {
  const isMassiveOnMobile = size === "massive" && screenSize === "mobile";
  const isUltraOnMobile = size === "ultra" && screenSize === "mobile";
  if (isMassiveOnMobile) return { width: "320px", height: MAX_HEIGHT_MOBILE_MASSIVE };
  if (isUltraOnMobile) return { width: "320px", height: MAX_HEIGHT_MOBILE_ULTRA };
  const width = min(currentSize.width, MIN_WIDTH);
  return { width: `${width}px`, height: currentSize.aspectRatio * width };
}

function DynamicIslandContent({ children, id, willChange, screenSize, ...props }) {
  const { state, presets } = useDynamicIslandSize();
  const currentSize = presets[state.size];
  const dimensions = calculateDimensions(state.size, screenSize, currentSize);

  return (
    <m.div
      id={id}
      className="mx-auto h-0 w-0 items-center justify-center text-center text-white"
      style={{
        willChange,
        background: "#000",
        border: "1px solid rgba(90,200,250,0.18)",
        boxShadow: "0 28px 80px -20px rgba(10,132,255,0.45), 0 0 0 1px rgba(255,255,255,0.04) inset",
      }}
      animate={{
        width: dimensions.width,
        height: dimensions.height,
        borderRadius: currentSize.borderRadius,
        transition: { type: "spring", stiffness, damping },
      }}
      {...props}
    >
      <AnimatePresence>{children}</AnimatePresence>
    </m.div>
  );
}

export function DynamicIsland({ children, id, ...props }) {
  const willChange = useWillChange();
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth <= 640) setScreenSize("mobile");
      else if (window.innerWidth <= 1024) setScreenSize("tablet");
      else setScreenSize("desktop");
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="z-10 flex h-full w-full items-end justify-center bg-transparent">
      <DynamicIslandContent id={id} willChange={willChange} screenSize={screenSize} {...props}>
        {children}
      </DynamicIslandContent>
    </div>
  );
}

export function DynamicContainer({ className, children }) {
  const willChange = useWillChange();
  const { state } = useDynamicIslandSize();
  const { size, previousSize } = state;
  const isSizeChanged = size !== previousSize;

  return (
    <m.div
      initial={{ opacity: size === previousSize ? 1 : 0, scale: size === previousSize ? 1 : 0.9, y: size === previousSize ? 0 : 5 }}
      animate={{ opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness, damping, duration: isSizeChanged ? 0.5 : 0.8 } }}
      exit={{ opacity: 0, filter: "blur(10px)", scale: 0.95, y: 20 }}
      style={{ willChange }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export function DynamicDiv({ className, children }) {
  const { state } = useDynamicIslandSize();
  const { size, previousSize } = state;
  const willChange = useWillChange();
  return (
    <m.div
      initial={{ opacity: size === previousSize ? 1 : 0, scale: size === previousSize ? 1 : 0.9 }}
      animate={{ opacity: size === previousSize ? 0 : 1, scale: size === previousSize ? 0.9 : 1, transition: { type: "spring", stiffness, damping } }}
      exit={{ opacity: 0, filter: "blur(10px)", scale: 0 }}
      style={{ willChange }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export function DynamicTitle({ className, children }) {
  const { state } = useDynamicIslandSize();
  const { size, previousSize } = state;
  const willChange = useWillChange();
  return (
    <m.h3
      className={className}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: size === previousSize ? 0 : 1, scale: size === previousSize ? 0.9 : 1, transition: { type: "spring", stiffness, damping } }}
      style={{ willChange }}
    >
      {children}
    </m.h3>
  );
}

export function DynamicDescription({ className, children }) {
  const { state } = useDynamicIslandSize();
  const { size, previousSize } = state;
  const willChange = useWillChange();
  return (
    <m.p
      className={className}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: size === previousSize ? 0 : 1, scale: size === previousSize ? 0.9 : 1, transition: { type: "spring", stiffness, damping } }}
      style={{ willChange }}
    >
      {children}
    </m.p>
  );
}
