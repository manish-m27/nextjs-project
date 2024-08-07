/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
			objectPosition: {
        'position-50-20': '50% 20%',
      }
    },
	fontFamily: {
      'oswald': ['Oswald', 'sans-serif'],
      'opensans': ['Open Sans', 'sans-serif'],
    },
	boxShadow: {
		'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
	}
  },
  plugins: [],
}
