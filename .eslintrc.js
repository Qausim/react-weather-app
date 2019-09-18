module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'eslint-plugin-jsx-a11y'
  ],
  rules: {
    semi: 'error',
    "linebreak-style": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-curly-spacing": 0,
    "react/jsx-filename-extension": 0
  },
};
