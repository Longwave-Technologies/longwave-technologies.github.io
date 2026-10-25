import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    // Keep CRA's output folder so `gh-pages -d build` and the postbuild
    // script work unchanged.
    outDir: "build",
  },
});
