/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			screens: {
				'sm': {'max': '639px'},
				'md': {'max': '767px'},
				'lg': {'max': '1024px'},
			},
			colors: {
				'greyish': 'rgb(240,240,240)'
			},
		},
	},
	plugins: [],
}
