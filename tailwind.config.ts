import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: 'Roboto'
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      bold: '700',
    },
    extend: {
      colors: {
        background: '#F8F9FA',
        foreground: '#333333',
        primary: '#0077B6',
        secondary: '#061A40',
        accent: {
          1: '#FFC857'
        },
        shades: {
          silver: '#ADADAD',
          darkGrey: '#525252'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
