import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error", // يجعل Prettier جزء من ESLint
    },
  },

  // قواعد JavaScript الأساسية
  js.configs.recommended,

  // قواعد TypeScript
  ...tseslint.configs.recommended,

  // تعطيل أي تعارض بين ESLint و Prettier
  eslintConfigPrettier,
]);
