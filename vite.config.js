import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb", "**/*.gltf"],
  build: {
    outDir: "build", // Output to 'build' instead of 'dist'
  },
});
