import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
  optimizeDeps: {
    include: ["hydra-synth"],
  },
  build: {
    commonjsOptions: {
      include: [/hydra-synth/, /node_modules/],
    },
  },
  server: {
    headers: {
      "Content-Security-Policy": `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://player.vimeo.com;
        style-src 'self' 'unsafe-inline';
        img-src 'self' data: https:;
        media-src 'self' https:;
        frame-src https://player.vimeo.com;
      `
        .replace(/\s{2,}/g, " ")
        .trim(),
    },
  },
});
