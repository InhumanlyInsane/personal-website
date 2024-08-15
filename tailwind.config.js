/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'logo': ['Kanit'],
        'primary': ['Urbanist'],
        'fancy': ['Playfair Display']
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, #0B0C10, #1F2833)',
      }
    },
  },
  plugins: [],
});

