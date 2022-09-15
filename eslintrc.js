module.exports = {
    root: true,
    env: {
      browser: true,
      commonjs: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'react-app',
      'react-app/jest',
      'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  };
  