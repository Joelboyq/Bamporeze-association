import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';
// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif']
      },
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #0A5C36 0deg, #218559 180deg, #2E9E64 360deg)",
        "blue-to-transparent": "linear-gradient(90deg, rgba(10, 92, 54, 0.17) 5.99%, rgba(10, 92, 54, 0.00) 83.92%)",
      },
      colors: {
        brand: {
          "darkblue": {
            DEFAULT: "#0A5C36",
            10: "#0A5C3610",
            5: '#0A5C3605'
          },
          "white": {
            DEFAULT: "#FFFFFF",
            60: "#FFFFFF60",
            80: "#FFFFFF80",
            10: "#FFFFFF10"
          },
          "black": "#000000",
          "lightblack": "#385845",
          "blackblue": "#0A2E1C",
          "red": "#DC5436"
        }
      },
      screens: {
        ...defaultTheme.screens,
        "msm": "0px"
      }
    },
  },
  plugins: [],
};
export default config;
