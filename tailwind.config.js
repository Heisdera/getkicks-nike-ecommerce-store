/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "",
  theme: {
    extend: {
      boxShadow: {
        bottom: "0 4px 10px -10px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
