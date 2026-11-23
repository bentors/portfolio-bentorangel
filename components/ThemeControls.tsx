"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const THEMES = ["dark", "light", "mono"] as const;
type Theme = (typeof THEMES)[number];

// Alterna o modo planta e sincroniza os diagramas SMIL com ele
const setPlan = (on: boolean) => {
  const root = document.documentElement;
  if (on) root.dataset.plan = "";
  else delete root.dataset.plan;
  document.querySelectorAll<SVGSVGElement>(".xray-layer svg").forEach((s) => (on ? s.unpauseAnimations() : s.pauseAnimations()));
};

// Troca o tema com transição curta e salva a escolha
const applyTheme = (t: Theme) => {
  const root = document.documentElement;
  root.classList.add("theme-anim");
  root.dataset.theme = t;
  localStorage.setItem("theme", t);
  setTimeout(() => root.classList.remove("theme-anim"), 450);
};

// Tema lido direto do <html> (já aplicado pelo script inline antes da hidratação)
const subscribe = (cb: () => void) => {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => obs.disconnect();
};
const getTheme = () => (document.documentElement.dataset.theme as Theme) || "dark";

export default function ThemeControls() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "dark" as Theme);
  const [plan, setPlanState] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "b" || e.metaKey || e.ctrlKey || e.altKey) return;
      if ((e.target as HTMLElement).closest("input, textarea, [contenteditable]")) return;
      setPlanState((p) => !p);
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => setPlan(plan), [plan]);

  const btn = (active: boolean) =>
    `px-2 py-1 rounded-full transition-colors ${active ? "bg-zinc-100 text-zinc-950" : "text-zinc-500 hover:text-zinc-200"}`;

  return (
    <div className="fixed bottom-4 right-4 z-[95] flex items-center gap-1 rounded-full border border-zinc-800 bg-page/80 p-1 font-mono text-[11px] backdrop-blur-md">
      <div role="radiogroup" aria-label="Tema" className="flex">
        {THEMES.map((t) => (
          <button key={t} role="radio" aria-checked={theme === t} onClick={() => applyTheme(t)} className={btn(theme === t)}>
            {t}
          </button>
        ))}
      </div>
      <span className="h-4 w-px bg-zinc-800" />
      <button aria-pressed={plan} onClick={() => setPlanState((p) => !p)} className={btn(plan)} title="Modo planta (tecla B)">
        planta <kbd className="hidden opacity-60 md:inline">B</kbd>
      </button>
    </div>
  );
}
