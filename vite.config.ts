import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// vite.config.ts
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@documentation": path.resolve(__dirname, "./src/documentation"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#8A5DDA",
          "border-radius-base": "50px",
          "layout-body-background": "#2F2D2E",
          "layout-header-background": "@layout-body-background",
          "font-size-base": "16px",
          "@text-color": "whitesmoke",
          "@text-color-secondary": "whitesmoke",
        },
        javascriptEnabled: true,
      },
    },
  },
});
