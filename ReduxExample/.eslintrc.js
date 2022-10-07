/* eslint-disable prettier/prettier */
module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': 'off',
        'eol-last': 'off',
        'react-native/no-inline-styles': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-trailing-spaces': 'off',
      },
    },
  ],
};
