import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config({
  ignores: ["dist/**", "node_modules/*", "eslint.config.js"],
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh
  },
  files: ["**/*.{js,jsx,ts,tsx}"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    "@typescript-eslint/consistent-type-imports": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ],
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }
    ],
    "no-console": ["error", { allow: ["warn", "error"] }]
  }
});
