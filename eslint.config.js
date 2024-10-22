import globals from "globals";
import jsPlugin from "@eslint/js";
import sveltePlugin from "eslint-plugin-svelte";

export default [
  {
    ignores: [".vscode", "dist"],
  },

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2025,
      },
    },
  },

  jsPlugin.configs.recommended,

  {
    rules: {
      "no-unused-expressions": "error",
      "prefer-const": "warn",
      semi: "warn",
    },
  },

  ...sveltePlugin.configs["flat/recommended"],
];
