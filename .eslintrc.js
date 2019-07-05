module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    useJSXTextNode: true,
    project: './tsconfig.json',
  },
  env: {
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['graphql', '@typescript-eslint'],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 100,
      },
    ],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        mjs: 'never',
        ts: 'never',
        gql: 'never',
        graphql: 'never',
      },
    ],
    '@typescript-eslint/no-explicit-any': 0,
    'import/prefer-default-export': 0,
  },
  settings: {
    'import/core-modules': ['aws-sdk', '@generated/nexus-prisma', '@generated/photon', 'path'],
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.gql', '.graphql'] },
    },
  },
};
