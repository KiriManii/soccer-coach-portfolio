/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A', // Deep Blue
        },
        secondary: {
          DEFAULT: '#FFD700', // Gold
        },
        light: {
          DEFAULT: '#FFFFFF', // White
        },
        gray: {
          light: '#F3F4F6', // Light Gray
        }
      },
    },
  },
  plugins: [],
}