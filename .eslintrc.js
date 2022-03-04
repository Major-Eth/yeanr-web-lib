const path = require("path");
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    extraFileExtensions: [".json"],
  },
  plugins: ["react", "@typescript-eslint", "prettier", "import", "react-hooks"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.stories.*", "**/.storybook/**/*.*"],
        peerDependencies: true,
      },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "^_", ignoreRestSiblings: true },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
      },
    ],
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
    ],
    "@typescript-eslint/no-useless-constructor": "error",
    "no-useless-constructor": "off",
    "no-console": "warn",
    "react/jsx-curly-brace-presence": ["error", "always"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "import/named": "off",
    "import/namespace": "off",
    "react/self-closing-comp": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/ignore": ["react-native"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        project: path.resolve(__dirname, "./tsconfig.json"),
      },
    },
  },
};
