import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': 'error',
    },
  },
  {
    files: ["src/.eslintrc.js"],
    languageOptions: {
      sourceType: "script",
      globals: globals.node,
    },
    rules: {
      'no-undef': 'off',
    },
  },
  pluginJs.configs.recommended,
];
