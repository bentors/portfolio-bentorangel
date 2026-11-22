import { archFlows, type Arch } from "./architectures";

const PURPLE = "#a855f7";

export default function ArchDiagram({ arch, compact }: { arch?: Arch; compact?: boolean }) {
  if (!arch) return null;

  // Layout compacto (cards do mobile): conexões em lista, legível em pouca altura
  if (compact)
    return (
      <div className="flex h-full w-full flex-col justify-center gap-1.5 p-4">
        <span className="bp-label">{`// ARQUITETURA · ${arch.title}`}</span>
        {archFlows(arch).map((f) => (
          <span key={f} className="font-mono text-[11px] leading-tight text-purple-200">{f}</span>
        ))}
      </div>
    );

  const byId = Object.fromEntries(arch.nodes.map((n) => [n.id, n]));
  const b = arch.boundary;

  return (
    <div className="flex h-full w-full flex-col p-4">
      <span className="bp-label shrink-0">{`// ARQUITETURA · ${arch.title}`}</span>
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet" className="h-full min-h-0 w-full flex-1">
        {b && (
          <g>
            <rect x={b.x} y={b.y} width={b.w} height={b.h} rx={12} fill="none" stroke={PURPLE} strokeOpacity={0.5} strokeDasharray="5 4" />
            <text x={b.x + 8} y={b.y + 14} fill={PURPLE} fontSize={9} fontFamily="ui-monospace, monospace">
              {b.label}
            </text>
          </g>
        )}

        {arch.edges.map((e, i) => {
          const a = byId[e.from];
          const t = byId[e.to];
          return (
            <line key={`l${i}`} x1={a.x} y1={a.y} x2={t.x} y2={t.y} stroke={PURPLE} strokeOpacity={0.6} strokeWidth={1} />
          );
        })}

        {arch.edges.map((e, i) => {
          const a = byId[e.from];
          const t = byId[e.to];
          return (
            <circle key={`p${i}`} r={3} fill={PURPLE} className="xray-packet">
              <animateMotion dur="2.4s" repeatCount="indefinite" begin={i * 0.3 + "s"} path={`M ${a.x} ${a.y} L ${t.x} ${t.y}`} />
            </circle>
          );
        })}

        {arch.nodes.map((n) => (
          <g key={n.id}>
            <rect x={n.x - 70} y={n.y - 22} width={140} height={44} rx={10} fill="#0a0a0a" stroke={PURPLE} strokeOpacity={0.8} />
            <text x={n.x} y={n.sub ? n.y - 3 : n.y + 4} textAnchor="middle" fill="#f4f4f5" fontSize={12} fontWeight={700}>
              {n.label}
            </text>
            {n.sub && (
              <text x={n.x} y={n.y + 12} textAnchor="middle" fill="#a1a1aa" fontSize={9} fontFamily="ui-monospace, monospace">
                {n.sub}
              </text>
            )}
          </g>
        ))}

        {arch.edges.map((e, i) => {
          if (!e.label) return null;
          const a = byId[e.from];
          const t = byId[e.to];
          return (
            <text
              key={`t${i}`}
              x={(a.x + t.x) / 2}
              y={(a.y + t.y) / 2 - 6}
              textAnchor="middle"
              fill={PURPLE}
              fontSize={9}
              fontFamily="ui-monospace, monospace"
              stroke="#0a0a0a"
              strokeWidth={3}
              paintOrder="stroke"
            >
              {e.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
