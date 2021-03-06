module.exports = {
  root: true,

  env: {
    node: true,
    jest: true,
  },

  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "@vue/typescript",
  ],

  parserOptions: {
    parser: "@typescript-eslint/parser",
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
