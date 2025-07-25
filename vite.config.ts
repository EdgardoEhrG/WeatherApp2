import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import pugPlugin from "vite-plugin-pug";

export default defineConfig({
  plugins: [vue(), pugPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/assets/styles/_variables.scss";
        @import "@/assets/styles/_mixins.scss";
        `,
      },
    },
  },
});
