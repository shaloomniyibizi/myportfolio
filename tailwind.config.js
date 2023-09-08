/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primarycolor: '#7865ff',
				black: '#393939',
				textcolor: '#1D2231',
				graycolor: '#757575',
				white: 'rgba(255,255,255,0.8)',
				bgcolor: {
					DEFAULT: '#0e1831',
					varient: '#132347',
				},
			},
			transitionTimingFunction: {
				bloop: 'cubic-bezier(1,-0.65,0,2,31)',
				log: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
			},
			animation: {
				shake: 'shake 0.3s ease-in-out',
			},
			keyframes: {
				bounce: {
					'0%, 100%': {
						ml: '0px',
					},
					'20%, 80%': {
						ml: '-12px',
					},
					'40%, 60%': {
						ml: '12px',
					},
				},
			},
			boxShadow: {
				bs: '0 12px 24px 0 rgba(0,0,0,0.09)',
				cl: '35px 35px 0 10px',
				cld: '35px -35px 0 10px',
				line: 'inset 0px 1px 1px rgba(255,255,255,255.05), 0px 1px rgba(0,0,0,0.4);',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		// ...
	],
};
