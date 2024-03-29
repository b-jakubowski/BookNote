module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  printWidth: 100,
  trailingComma: 'es5',
  tabWidth: 2,
  useTabs: true,
  semi: true,
  importOrder: [
    '^react$',
    '^react-native$',
    '^@core/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@components/(.*)$',
    '^src[./]',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderSeparation: false,
};
