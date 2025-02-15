module.exports = {
  printWidth: 80,
  arrowParens: 'always',
  semi: false,
  bracketSameLine: false,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@app/(.*)$',
    '^@processes/(.*)$',
    '^@screens/(.*)$',
    '^@widgets/(.*)$',
    '^@features/(.*)$',
    '^@entities/(.*)$',
    '^@shared/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
}
