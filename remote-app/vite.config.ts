import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./RemoteHome": "./src/RemoteHome.tsx",
      },
      shared: ["react", "react-dom", "react-router"],
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 5001,
  },
});
