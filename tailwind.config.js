/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // Blue 600
          light: '#3B82F6',   // Blue 500
          dark: '#1D4ED8',    // Blue 700
        },
        secondary: {
          DEFAULT: '#0EA5E9', // Sky 500
          light: '#38BDF8',   // Sky 400
          dark: '#0284C7',    // Sky 600
        },
        accent: {
          DEFAULT: '#F59E0B', // Amber 500
          light: '#FBBF24',   // Amber 400
          dark: '#D97706',    // Amber 600
        },
        background: {
          DEFAULT: '#F8FAFC', // Slate 50
          dark: '#F1F5F9',    // Slate 100
        }
      },
    },
  },
  plugins: [],
}