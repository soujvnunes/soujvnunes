/** @type {import('prettier').Config} */
const config = {
  jsxSingleQuote: false,
  bracketSameLine: true,
  singleAttributePerLine: true,
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  enableDebugLogs: true,
  printWidth: 104,
  tailwindStylesheet: './app/globals.css',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cva', 'twMerge', 'cn'],
  bracketSpacing: true,
}

export default config
