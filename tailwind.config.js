/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: ".5rem",
        md: "2rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "3rem",
      },
    },
    extend: {
      backgroundImage: {
        mobile: "url('./assets/images/bg-intro-mobile.svg')",
        desktop: "url('./assets/images/bg-intro-desktop.svg')",
        mockup: "url('./assets/images/image-mockups.png')",
      },
      colors: {
        darkBlue: " hsl(233, 26%, 24%)",
        limeGreen: "hsl(136, 65%, 51%)",
        brightCyan: "hsl(192, 70%, 51%)",
        grayishBlue: " hsl(220, 16%, 96%)",
        lightGray: "hsl(0, 0%, 98%)",
        white: " hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
