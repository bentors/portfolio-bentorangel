import type { NextConfig } from "next";
import { execSync } from "node:child_process";

// Commit e horário do build, exibidos no status do rodapé
const sha = process.env.VERCEL_GIT_COMMIT_SHA ?? (() => {
  try { return execSync("git rev-parse HEAD").toString().trim(); } catch { return "local"; }
})();

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BUILD_SHA: sha.slice(0, 7),
    NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
  },
};

export default nextConfig;
