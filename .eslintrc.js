module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': ['off'],
  },
};
