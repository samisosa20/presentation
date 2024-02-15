import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#0D6E6E",
          200: "#4A9D9C",
          300: "#AFFFFF",
        },
        accent: {
          100: "#FF3D3D",
          200: "#FFE0C8"
        },
        body: {
          100: "#FFFFFF",
          200: "#E0E0E0"
        },
        bg: {
          100: "#0D1F2D",
          200: "#1D2E3D",
          300: "#354656",
          400: "#1E1E1E",
        }
      }
    },
  },
  plugins: [],
};
export default config;
