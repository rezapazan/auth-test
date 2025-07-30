import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  recommendedConfig: {
    "ignorePatterns": [
      "dist",
      ".next",
      "node_modules",
      "**/*.js",
      "**/*.mjs",
      "**/*.cjs",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "projectService": true,
      "ecmaFeatures": { "jsx": true },
    },
    "settings": {
      "react": { "version": "detect" },
      "import/resolver": { "typescript": true, "node": true },
    },
    plugins: ["@typescript-eslint", "unused-imports"],
    rules: {
      "no-prototype-builtins": "warn",
      "no-case-declarations": "warn",
      "prefer-const": "warn",
      "no-useless-escape": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/no-duplicate-enum-values": "warn",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-unused-expressions": "warn",
      "@typescript-eslint/consistent-type-exports": [
        "error",
        { "fixMixedExportsWithInlineTypeSpecifier": true },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { "fixStyle": "inline-type-imports", "prefer": "type-imports" },
      ],
      "react/prop-types": "off",
      "react/display-name": "warn",
      "react/jsx-key": "warn",
      "react-hooks/rules-of-hooks": "warn",
      "unused-imports/no-unused-imports": "error",
      // "unused-imports/no-unused-vars": [
      //   "warn",
      //   {
      //     "vars": "all",
      //     "varsIgnorePattern": "^_",
      //     "args": "after-used",
      //     "argsIgnorePattern": "^_",
      //   },
      // ],
    }
  },
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"),
];

export default eslintConfig;
