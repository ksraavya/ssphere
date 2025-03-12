/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cyberpunk Dark Theme Colors
        primary: "#FF6B00", // Neon Orange for active links and highlights
        secondary: "#0D0D1F", // Dark Purple base
        accent: "#1A1A2E", // Slightly lighter purple
        midnight: "#232946", // Midnight Blue
        neonPurple: "#A020F0", // Neon Purple accent
        neonBlue: "#009DFF", // Neon Blue accent
        text: "#F5F5F5", // Light Gray for text
        textDim: "#EAEAEA", // Slightly dimmer text
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, #0D0D1F, #121212)',
        'gradient-midnight': 'linear-gradient(to right, #0D0D1F, #232946)',
        'gradient-cyberpunk': 'linear-gradient(135deg, #0D0D1F 0%, #1A1A2E 50%, #232946 100%)',
      }
    },
  },
  plugins: [],
} 