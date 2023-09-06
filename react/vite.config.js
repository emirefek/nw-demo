import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "chrome116",
    outDir: "../nw/dist-react",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      //"@@": fileURLToPath(new URL("./tests", import.meta.url)),
    },
  },
});
