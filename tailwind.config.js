/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2563EB",

          secondary: "#FF6799",

          accent: "#FFFFFF",

          neutral: "#1C1A2D",

          "base-100": "#FFFFFF",

          "base-200": "#F2F2F2",

          info: "#A5CAE3",

          success: "#35E9C8",

          warning: "#EF9943",

          error: "#E25A75",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
