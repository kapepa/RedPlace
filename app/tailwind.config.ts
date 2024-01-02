import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gap: {
        '2': '0.5rem',
        '4': '1rem',
        '6': '2rem',
      },
      fontSize: {
        '3xl': '3rem',
      },
      colors: {
        primary: "#8548EF",
        secondary: "F97912",
      }
    },
  },
  plugins: [],
}
export default config
