import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/votos": {
        target: "https://get-conteovotos-56phcx2hya-rj.a.run.app/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/votos/, ""),
      },
      "/region": {
        target: "https://get-conteoregion-56phcx2hya-rj.a.run.app/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/region/, ""),
      },
      "/valido": {
        target: "https://get-conteovalido-56phcx2hya-rj.a.run.app/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/valido/, ""),
      },
    },
  },
});
