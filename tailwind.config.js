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
    },
    screens: {
      'xs': '320px',
      'cs': '768px',
    }
  },
  plugins: [],
});

