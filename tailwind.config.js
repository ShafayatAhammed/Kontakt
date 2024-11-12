/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xspghd: "450px",
        xspghd2: "500px",
        sm2: "660px",
        md2: "960px",
        lg2: "1170px",
        xl3: "1500px",
        xl4: "1700px",
      },
    },
  },
  plugins: [],
};
