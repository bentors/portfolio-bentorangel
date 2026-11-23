"use client";

import { useEffect, useRef } from "react";

// Fundo "rede viva": grade blueprint em GLSL com nós, pacotes trafegando
// pelas linhas e uma lente que segue o cursor. Cores vêm do tema (CSS vars).
const FRAG = `
precision mediump float;
uniform vec2 uRes;
uniform float uTime, uScroll, uPlan, uLens;
uniform vec2 uMouse;
uniform vec3 uBg, uLine, uAccent;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

// Pacote correndo numa linha da grade: retorna brilho (cabeça forte, rastro curto)
float packet(float along, float across, float lane, float cell) {
  float h = hash(vec2(lane, 3.7));
  if (h < 0.72) return 0.0;
  float k = fract((along - uTime * (0.6 + h * 1.4)) / 14.0 + h) * 14.0;
  float trail = smoothstep(3.0, 0.0, k) * step(0.0, k);
  return trail * (1.0 - smoothstep(0.0, 2.2, across * cell));
}

void main() {
  vec2 px = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);
  vec2 d = px - uMouse;
  float lens = uLens * exp(-dot(d, d) / (2.0 * 170.0 * 170.0));
  vec2 p = px - d * lens * 0.18;          // leve distorção sob o cursor
  p.y += uScroll * 0.35;                   // parallax com o scroll

  float cell = 56.0;
  vec2 g = p / cell;
  vec2 f = fract(g);
  vec2 e = min(f, 1.0 - f) * cell;         // distância às linhas em px
  float grid = 1.0 - smoothstep(0.0, 1.1, min(e.x, e.y));

  vec2 corner = floor(g + 0.5);
  float node = step(0.86, hash(corner)) * (1.0 - smoothstep(1.5, 3.2, length(g - corner) * cell));

  float pk = packet(g.x, abs(g.y - floor(g.y + 0.5)), floor(g.y + 0.5), cell)
           + packet(g.y, abs(g.x - floor(g.x + 0.5)), floor(g.x + 0.5) + 91.0, cell);

  vec2 uv = gl_FragCoord.xy / uRes;
  float vig = smoothstep(1.15, 0.35, length(uv - 0.5));

  float gridA = (0.05 + uPlan * 0.10 + lens * 0.22) * vig;
  vec3 col = uBg;
  col = mix(col, uLine, grid * gridA);
  col = mix(col, uAccent, clamp(node * (0.25 + lens * 0.75) + pk * 0.55 * vig, 0.0, 1.0));
  gl_FragColor = vec4(col, 1.0);
}`;

const VERT = `attribute vec2 a; void main() { gl_Position = vec4(a, 0.0, 1.0); }`;

const readRgb = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim().split(/\s+/).map((n) => Number(n) / 255);

export default function ShaderBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const gl = canvas?.getContext("webgl", { antialias: false, alpha: false });
    if (!canvas || !gl) return; // sem WebGL: fica só a cor de fundo do body

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const u = (n: string) => gl.getUniformLocation(prog, n);
    const uRes = u("uRes"), uTime = u("uTime"), uScroll = u("uScroll"), uMouse = u("uMouse"), uPlan = u("uPlan"), uLens = u("uLens");

    const setColors = () => {
      gl.uniform3fv(u("uBg"), readRgb("--shader-bg"));
      gl.uniform3fv(u("uLine"), readRgb("--shader-line"));
      gl.uniform3fv(u("uAccent"), readRgb("--shader-accent"));
      gl.uniform1f(uPlan, "plan" in document.documentElement.dataset ? 1 : 0);
    };
    setColors();
    const themeObs = new MutationObserver(() => { setColors(); if (still) draw(performance.now()); });
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "data-plan"] });

    // Resolução em px CSS (1x): linhas finas e custo baixo de GPU
    const resize = () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    resize();

    // Lente começa fora da tela: só aparece quando há um ponteiro de verdade
    const mouse = { x: -1e4, y: -1e4, tx: -1e4, ty: -1e4 };
    const onMove = (e: PointerEvent) => { mouse.tx = e.clientX; mouse.ty = e.clientY; };

    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const draw = (t: number) => {
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;
      gl.uniform1f(uTime, still ? 0 : t / 1000);
      gl.uniform1f(uScroll, scrollY);
      // Lente só no hero: some conforme a primeira tela sai de vista
      gl.uniform1f(uLens, Math.max(0, 1 - scrollY / (innerHeight * 0.7)));
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const loop = (t: number) => { draw(t); raf = requestAnimationFrame(loop); };
    const onVisible = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !still) raf = requestAnimationFrame(loop);
    };

    addEventListener("resize", resize);
    addEventListener("pointermove", onMove);
    document.addEventListener("visibilitychange", onVisible);
    if (still) {
      const redraw = () => draw(0);
      addEventListener("scroll", redraw, { passive: true });
      redraw();
      return () => { removeEventListener("scroll", redraw); removeEventListener("resize", resize); themeObs.disconnect(); };
    }
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      themeObs.disconnect();
      removeEventListener("resize", resize);
      removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-0 h-full w-full" />;
}
