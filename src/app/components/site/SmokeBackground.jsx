'use client';
import React, { useEffect, useRef } from "react";

/**
 * SmokeBackground — purple WebGL2 shader smoke.
 * Adapted from the supplied component:
 *  - JSX (TS removed)
 *  - Scales to its PARENT container (not the window) so it can be embedded
 *    inside sections like Research Lab / Architecture
 *  - Pauses when offscreen (IntersectionObserver) for performance
 *  - Respects prefers-reduced-motion (frozen single frame instead of loop)
 *  - Tuned to a deep dark purple — atmospheric, not decorative.
 */

const fragmentShaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2 resolution;
uniform vec3 u_color;

#define FC gl_FragCoord.xy
#define R resolution
#define T (time+660.)

float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);return mix(mix(rnd(i),rnd(i+vec2(1,0)),u.x),mix(rnd(i+vec2(0,1)),rnd(i+1.),u.x),u.y);}
float fbm(vec2 p){float t=.0,a=1.;for(int i=0;i<5;i++){t+=a*noise(p);p*=mat2(1,-1.2,.2,1.2)*2.;a*=.5;}return t;}

void main(){
  vec2 uv=(FC-.5*R)/R.y;
  vec3 col=vec3(1);
  uv.x+=.25;
  uv*=vec2(2,1);

  float n=fbm(uv*.28-vec2(T*.01,0));
  n=noise(uv*3.+n*2.);

  col.r-=fbm(uv+vec2(0,T*.015)+n);
  col.g-=fbm(uv*1.003+vec2(0,T*.015)+n+.003);
  col.b-=fbm(uv*1.006+vec2(0,T*.015)+n+.006);

  col=mix(col, u_color, dot(col,vec3(.21,.71,.07)));

  col=mix(vec3(.02),col,min(time*.1,1.));
  col=clamp(col,.02,1.);
  O=vec4(col,1);
}`;

const vertexSrc =
  "#version 300 es\nprecision highp float;\nin vec4 position;\nvoid main(){gl_Position=position;}";

const hexToRgb = (hex) => {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r
    ? [
        parseInt(r[1], 16) / 255,
        parseInt(r[2], 16) / 255,
        parseInt(r[3], 16) / 255,
      ]
    : [0.5, 0.5, 0.5];
};

class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.gl = canvas.getContext("webgl2");
    this.color = [0.5, 0.5, 0.5];
    this.vertices = [-1, 1, -1, -1, 1, 1, 1, -1];
    if (!this.gl) return;
    this._setup();
    this._init();
  }

  updateColor(c) {
    this.color = c;
  }

  updateScale() {
    const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 1.5));
    const parent = this.canvas.parentElement;
    if (!parent || !this.gl) return;
    const { width, height } = parent.getBoundingClientRect();
    if (width <= 0 || height <= 0) return;
    this.canvas.width = Math.floor(width * dpr);
    this.canvas.height = Math.floor(height * dpr);
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  _compile(shader, source) {
    const gl = this.gl;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
  }

  _setup() {
    const gl = this.gl;
    this.vs = gl.createShader(gl.VERTEX_SHADER);
    this.fs = gl.createShader(gl.FRAGMENT_SHADER);
    const program = gl.createProgram();
    this._compile(this.vs, vertexSrc);
    this._compile(this.fs, fragmentShaderSource);
    this.program = program;
    gl.attachShader(program, this.vs);
    gl.attachShader(program, this.fs);
    gl.linkProgram(program);
  }

  _init() {
    const { gl, program } = this;
    if (!program) return;
    this.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(this.vertices),
      gl.STATIC_DRAW
    );
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    this.uResolution = gl.getUniformLocation(program, "resolution");
    this.uTime = gl.getUniformLocation(program, "time");
    this.uColor = gl.getUniformLocation(program, "u_color");
  }

  render(now = 0) {
    const { gl, program, buffer, canvas } = this;
    if (!program) return;
    gl.clearColor(0.011, 0.011, 0.039, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.uniform2f(this.uResolution, canvas.width, canvas.height);
    gl.uniform1f(this.uTime, now * 1e-3);
    gl.uniform3fv(this.uColor, this.color);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  dispose() {
    const { gl } = this;
    if (!gl) return;
    if (this.program) gl.deleteProgram(this.program);
    if (this.vs) gl.deleteShader(this.vs);
    if (this.fs) gl.deleteShader(this.fs);
    if (this.buffer) gl.deleteBuffer(this.buffer);
  }
}

const SmokeBackground = ({
  smokeColor = "#8B5CF6",
  opacity = 0.45,
  className = "",
}) => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const rafRef = useRef(0);
  const visibleRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !canvasRef.current) return;
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new Renderer(canvasRef.current);
    rendererRef.current = renderer;
    if (!renderer.gl) {
      // WebGL2 not available — silently no-op
      return;
    }
    renderer.updateColor(hexToRgb(smokeColor));

    const onResize = () => renderer.updateScale();
    onResize();
    window.addEventListener("resize", onResize);

    let lastTs = performance.now();
    const loop = (now) => {
      if (visibleRef.current) renderer.render(now);
      lastTs = now;
      if (!prefersReduced) rafRef.current = requestAnimationFrame(loop);
    };

    // Visibility observer — only render when section is on screen
    let observer;
    if (wrapperRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          visibleRef.current = entries[0]?.isIntersecting ?? false;
        },
        { rootMargin: "200px" }
      );
      observer.observe(wrapperRef.current);
    }

    if (prefersReduced) {
      renderer.render(0);
    } else {
      rafRef.current = requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafRef.current);
      observer && observer.disconnect();
      renderer.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (rendererRef.current) {
      rendererRef.current.updateColor(hexToRgb(smokeColor));
    }
  }, [smokeColor]);

  return (
    <div
      ref={wrapperRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* darken edges so the smoke blends into the page */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(3,3,10,0)_30%,rgba(3,3,10,0.85)_85%)]" />
    </div>
  );
};

export default SmokeBackground;
