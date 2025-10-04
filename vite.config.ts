import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Note: some Vite plugins can inject custom JSX props/attributes which may
// conflict with @react-three/fiber's applyProps. Avoid injecting unknown props
// into Three.js objects to prevent runtime crashes.

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // componentTagger disabled to avoid injecting unknown props into three.js objects
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
