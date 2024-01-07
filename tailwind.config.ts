import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7856ff",
        yello: "#fefd00",
        blak: "#202123",
        tabs: "#84edb2",
        tabs2: "#b353fc",
        disc: "#f64056"
      },
      gridTemplateColumns: {
        "lemon": "repeat(auto-fit, minmax(400px, 1fr))"
      }
    },
  },
  plugins: [],
}
export default config
