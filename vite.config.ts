// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact,
// tailwindcss, tsConfigPaths, nitro, componentTagger (dev-only), etc.
//
// Deployment targets:
// - Inside Lovable's sandbox build, the preset is forced to `cloudflare-module`
//   (Lovable Hosting on Cloudflare Workers). The overrides below are ignored there.
// - Outside the sandbox (e.g. on Vercel CI), nitro uses the `vercel` preset and
//   emits the Build Output API v3 layout at `.vercel/output/`, which Vercel
//   auto-detects — no `vercel.json` needed, no custom build/output settings.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  nitro: {
    // Honor NITRO_PRESET (Vercel sets it automatically) and fall back to `vercel`.
    preset: process.env.NITRO_PRESET ?? "vercel",
  },
});
