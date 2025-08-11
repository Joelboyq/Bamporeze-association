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
          "conic-gradient(from 180deg at 50% 50%, #16a34a 0deg, #22c55e 180deg, #4ade80 360deg)",
        "green-to-transparent": "linear-gradient(90deg, rgba(22, 163, 74, 0.17) 5.99%, rgba(22, 163, 74, 0.00) 83.92%)",
        "teal-gradient": "linear-gradient(135deg, #003d1d 0%, #16a34a 50%, #71c993 100%)",
        "emerald-gradient": "linear-gradient(135deg, #71c993 0%, #22c55e 50%, #16a34a 100%)",
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",

        // Primary Green Palette
        green: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },

        // Custom Green Colors used in the site
        teal: {
          DEFAULT: "#003d1d",
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },

        emerald: {
          DEFAULT: "#71c993",
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },

        brand: {
          // Primary brand colors
          primary: {
            DEFAULT: "#16a34a", // green-600
            50: "#f0fdf4",
            100: "#dcfce7", 
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e",
            600: "#16a34a",
            700: "#15803d",
            800: "#166534",
            900: "#14532d",
          },
          
          // Dark teal for backgrounds
          dark: {
            DEFAULT: "#003d1d",
            50: "#f0fdfa",
            100: "#ccfbf1",
            200: "#99f6e4",
            300: "#5eead4",
            400: "#2dd4bf",
            500: "#14b8a6",
            600: "#0d9488",
            700: "#0f766e",
            800: "#115e59",
            900: "#134e4a",
          },

          // Light green for accents
          light: {
            DEFAULT: "#71c993",
            50: "#ecfdf5",
            100: "#d1fae5",
            200: "#a7f3d0",
            300: "#6ee7b7",
            400: "#34d399",
            500: "#10b981",
            600: "#059669",
            700: "#047857",
            800: "#065f46",
            900: "#064e3b",
          },

          // Legacy colors for backward compatibility
          "darkblue": {
            DEFAULT: "#16a34a", // Updated to green-600
            10: "#16a34a10",
            5: '#16a34a05'
          },
          "white": {
            DEFAULT: "#FFFFFF",
            60: "#FFFFFF60",
            80: "#FFFFFF80",
            10: "#FFFFFF10"
          },
          "black": "#000000",
          "lightblack": "#385845",
          "blackblue": "#16a34a", // Updated to green-600
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
