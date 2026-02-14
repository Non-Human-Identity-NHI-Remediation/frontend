import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Set this to your GitHub repo name
  // GitHub Pages serves at: https://<org>.github.io/<repo-name>/
  base: "/frontend/",
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
  },
});
