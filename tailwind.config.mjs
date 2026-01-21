import { theme } from './themizer.config.ts'

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: theme.aliases,
  },
}
