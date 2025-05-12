import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // Для GH-pages
  base: "/ive-world/",
  plugins: [react()],
  server: {
    host: true,
  },
});
