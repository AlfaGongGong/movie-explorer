module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier', 'react-hooks'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      json: true,
      javascript: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/extensions': ['off', 'ignorePackages'],
    'import/prefer-default-export': 'warn',
    'import/named': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': 'off',
    'no-nested-ternary': 'off',
    'no-unused-expressions': 'off',
    'no-undef': 'off',
  },

  ignorePatterns: ['node_modules/', 'build/', 'dist/'],

  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
      },
    },
  ],

  globals: {
    React: 'writable',
  },

  parser: 'babel-eslint',

  root: true,

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
