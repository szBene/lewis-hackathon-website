import typography from '@tailwindcss/typography';
/** @type {import('tailwindcss').Config} */
// module.exports = {
// 	content: ['./*.{html,js,jsx,ts,tsx}'],
// 	theme: {
// 		extend: {}
// 	},
// 	plugins: []
// };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [typography]
};
