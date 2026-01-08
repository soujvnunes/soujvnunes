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
  objectWrap: 'collapse',
  tailwindStylesheet: 'app/globals.css',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cva', 'twMerge', 'cn'],
}

export default config
