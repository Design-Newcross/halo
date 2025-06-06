import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: "src/index.tsx",
      name: "Halo",
      formats: ["es"],
      fileName: (format: string) => `index.${format}.js`,
    },
    minify: false,
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react-router-dom",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-router-dom": "ReactRouterDOM",
        },
        compact: false,
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
      },
    },
    sourcemap: false,
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
