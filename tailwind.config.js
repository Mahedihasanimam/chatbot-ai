/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0077cc",
        secondary: "#6c757d",
        success: "#28a745",
        danger: "#dc3545",
        warning: "#ffc107",
        info: "#17a2b8",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "chatbot-bg": "url('/src/assets/images/Step 1.png')",
        "chatbot-bg2": "url('/src/assets/images/bg2.png)",
      },
      letterSpacing: {
        normal: "4px",
      },

    },
  },
  plugins: [],
}

