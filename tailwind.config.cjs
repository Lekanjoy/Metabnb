/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backGroundImage: {
        BgPrimary: "90deg, #A02279 11.45%, #A02279 11.45%",
      },
      colors: {
        blackPrimary: "#434343",
      },
    },
  },
  plugins: [],
};
