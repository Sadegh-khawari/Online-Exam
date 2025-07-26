module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // General rules
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    // React-specific
    'react/prop-types': 'off', // Using TypeScript for types
    // TypeScript-specific
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
  overrides: [
    {
      files: ['client/src/**/*.{ts,tsx}'],
      env: { browser: true },
      rules: {
        // Frontend-specific rules
      },
    },
    {
      files: ['server/**/*.{ts,js}'],
      env: { node: true },
      rules: {
        // Backend-specific rules
      },
    },
  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'coverage/',
    '*.config.js',
  ],
};
