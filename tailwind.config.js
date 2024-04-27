/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{ts,js,tsx,jsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      skyBlueColor: "#96527A",
      midNightBlueColor: "#632B6C",
      MintGreen: "#CD6889",
      white: "#ffffff",
      gray: "#F99F72",
      grayv: "#FE895E",
      black:"#632B6C",
blackv:"#000000",
      oceanBlue: "#00B5E2",
    },
    extend: {
      backgroundImage: (theme) => ({
        'gradient-to-br': 'linear-gradient(to bottom right, #96527A, #CD6889)',
      }),
      fontFamily: {
        IPM: "IBM Plex Mono, monospace",
        WorkSans: "Work Sans, sans-serif",
      },
    },

  },
  plugins: [],
};
