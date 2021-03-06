/* eslint-disable quote-props */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-unused-vars': 'warn',
    "no-trailing-spaces": "off",
    "object-curly-spacing": "warn",
    "react/jsx-tag-spacing": "warn",
    "react/jsx-indent-props": "off",
    "no-tabs": "off",
    "indent": "off",
    'no-undef': "off",
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'quotes': 'off',
    'jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-indent': 'off',
    'react/function-component-definition': 'off',
    'comma-dangle': 'off',
    'semi': 'off',
    'arrow-parens': 'off',
    'eol-last': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'max-len': 'off',
    'spaced-comment': 'off',
    'no-console': 'off',
    'object-curly-newline': 'off',
    'jsx-quotes': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-escape': 'warn',
    'implicit-arrow-linebreak': 'off',
    'arrow-body-style': 'off'
  },
};
