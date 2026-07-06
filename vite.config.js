import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import path from "path";
import checker from "vite-plugin-checker";

const __dirname = path.resolve();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
    checker({
      eslint: {
        // Points to your project's lint command
        useFlatConfig: true,
        lintCommand: 'eslint "./src/**/*.{ts,tsx,js,jsx}"', 
         overrideConfigFile: path.resolve(__dirname, '.eslintrc.cjs'),
      },
    })
  ],
});