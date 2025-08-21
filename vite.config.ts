import { defineConfig } from "vite";

import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173, // پورت سرور لوکال
    open: true, // بعد از start مرورگر باز بشه
  },
  build: {
    outDir: "dist", // مسیر خروجی build
    sourcemap: true, // برای دیباگ
  },
  resolve: {
    alias: {
      "@": "/src", // استفاده از @ به جای مسیر src
    },
  },
  plugins: [tailwindcss()],
});
