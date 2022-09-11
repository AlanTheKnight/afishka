import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

process.env.APP_VERSION = require("./package.json").version;

export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: true,
    assetsDir: "static",
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    port: 80,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
      },
      "/media": {
        target: "http://localhost:8000",
      },
      "/admin": {
        target: "http://localhost:8000",
      },
      "/static": {
        target: "http://localhost:8000",
      },
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
});
