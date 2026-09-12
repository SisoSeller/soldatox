import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => ({
  // Local `npm run dev` stays at http://localhost:5173/.
  // The GitHub Pages site lives at /soldatox/, so production URLs must use that prefix.
  base: command === "serve" && mode !== "production" ? "/" : "/soldatox/",
  server: {
    port: 5173,
    host: true,
    watch: {
      ignored: ["**/public/**"],
    },
  },
}));
