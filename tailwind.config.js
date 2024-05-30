/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fishBlue: "#79A1BB",
        fishDarkBlue: "#0D395E",
      },
    },
  },
  plugins: [],
};
