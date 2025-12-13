/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#2563eb",
          600: "#1d4ed8",
        },
      },
      boxShadow: {
        "glow-blue": "0 20px 80px rgba(37, 99, 235, 0.25)",
      },
    },
  },
  plugins: [],
};
