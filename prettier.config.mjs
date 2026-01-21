/** @type {import('prettier').Config} */
export default {
  jsxSingleQuote: false,
  bracketSameLine: true,
  singleAttributePerLine: true,
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  enableDebugLogs: true,
  printWidth: 104,
  tailwindStylesheet: './app/tailwind.config.css',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cva', 'twMerge', 'cn'],
  bracketSpacing: true,
}
