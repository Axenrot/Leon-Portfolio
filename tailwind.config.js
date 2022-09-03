/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1200px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      backgroundImage: {
        fadingblack:
          "linear-gradient(101.4deg, #000000 0%, #1C1C1C 70%, #474747 99.75%)",
      },
    },
  },
  plugins: [],
};
