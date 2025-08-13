/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1587F1",
        additional: "#0E8143",
        button: {
          primary: {
            default: "#1587F1",
            disabled: "#CED4DA",
            hover: "#1774DE",
            text: {
              disabled: "#9DA9B7",
            },
          },
          additional: {
            default: "#0E8143",
            disabled: "#CED4DA",
            hover: "#0B6F39",
            text: {
              disabled: "#9DA9B7",
            },
          },
        },
        border: {
          default: "#CED4DA",
          focus: "#1F2022",
          checkbox: "#9DA9B7",
          active: "#1587F1",
          "input-active": "#1587F1",
        },
        error: "#E92444",
        input: {
          background: {
            disabled: "#EAEDEF",
          },
          placeholder: "#8D92A4",
          text: {
            disabled: "#9DA9B7",
          },
        },
        surface: {
          default: "#F1F3F5",
          substrate: "#DEE4E7",
          blue: "#E6EEF5",
          gray: "#B2BDC7",
        },
        typography: {
          primary: "#1587F1",
          secondary: "#5F6774",
        },
      },
    },
  },
  plugins: [],
};
