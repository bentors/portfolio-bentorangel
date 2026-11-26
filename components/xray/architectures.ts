export type ArchNode = { id: string; label: string; sub?: string; x: number; y: number }; // centro, viewBox 400x500
export type ArchEdge = { from: string; to: string; label?: string };
export type Arch = {
  title: string;
  nodes: ArchNode[];
  edges: ArchEdge[];
  boundary?: { label: string; x: number; y: number; w: number; h: number };
};

export const architectures: Partial<Record<string, Arch>> = {
  "01": {
    title: "Street Stars",
    nodes: [
      { id: "cli", label: "Cliente", x: 110, y: 50 },
      { id: "next", label: "Next.js", sub: "SSR · SEO", x: 110, y: 150 },
      { id: "pay", label: "Pagamento", x: 290, y: 150 },
      { id: "api", label: "API Routes", sub: "Zod · rate limit Upstash", x: 200, y: 270 },
      { id: "fb", label: "Firebase", sub: "custom claims · Firestore", x: 110, y: 400 },
      { id: "cld", label: "Cloudinary", sub: "uploads assinados", x: 290, y: 400 },
    ],
    edges: [
      { from: "cli", to: "next" },
      { from: "next", to: "api" },
      { from: "pay", to: "api", label: "webhook HMAC" },
      { from: "api", to: "fb" },
      { from: "api", to: "cld" },
    ],
  },
  "02": {
    title: "Aurum Finance",
    nodes: [
      { id: "fe", label: "React · TS", sub: "frontend", x: 200, y: 50 },
      { id: "sec", label: "Segurança", sub: "JWT · rate limit", x: 200, y: 160 },
      { id: "api", label: "API Spring Boot", sub: "REST · soft delete", x: 200, y: 270 },
      { id: "cache", label: "Cache", sub: "Caffeine", x: 110, y: 400 },
      { id: "pg", label: "PostgreSQL", sub: "optimistic locking", x: 290, y: 400 },
    ],
    edges: [
      { from: "fe", to: "sec" },
      { from: "sec", to: "api" },
      { from: "api", to: "cache" },
      { from: "api", to: "pg" },
    ],
  },
  "03": {
    title: "AlertaSP",
    nodes: [
      { id: "esp", label: "Sensor ESP32", sub: "nível da água", x: 110, y: 50 },
      { id: "ml", label: "Modelo ML", sub: "risco de alagamento", x: 290, y: 50 },
      { id: "api", label: "API Spring Boot", x: 110, y: 200 },
      { id: "pg", label: "PostgreSQL", x: 110, y: 320 },
      { id: "app", label: "App", sub: "alertas · Minhas Rotas", x: 290, y: 320 },
    ],
    edges: [
      { from: "esp", to: "api" },
      { from: "ml", to: "api" },
      { from: "api", to: "pg" },
      { from: "api", to: "app" },
    ],
    boundary: { label: "VM LINUX · nginx · ufw · systemd", x: 22, y: 135, w: 176, h: 230 },
  },
  "04": {
    title: "Ford Vision",
    nodes: [
      { id: "data", label: "Dados Ford", sub: "600 mil+ registros · 175 mil veículos", x: 200, y: 50 },
      { id: "pre", label: "Pré-processamento", sub: "winsorização · escala", x: 200, y: 130 },
      { id: "km", label: "K-Means", sub: "3 perfis", x: 200, y: 210 },
      { id: "clf", label: "Random Forest", sub: "83,2% de acurácia", x: 200, y: 290 },
      { id: "fast", label: "FastAPI", x: 200, y: 370 },
      { id: "leads", label: "Leads", sub: "por concessionária", x: 200, y: 450 },
    ],
    edges: [
      { from: "data", to: "pre" },
      { from: "pre", to: "km" },
      { from: "km", to: "clf" },
      { from: "clf", to: "fast" },
      { from: "fast", to: "leads" },
    ],
  },
};

/** Conexões em texto ("A → B"), usado no layout compacto e por leitores de tela. */
export function archFlows(arch: Arch): string[] {
  const label = (id: string) => arch.nodes.find((n) => n.id === id)?.label ?? id;
  return arch.edges.map((e) => `${label(e.from)} → ${label(e.to)}${e.label ? ` (${e.label})` : ""}`);
}
