import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme.js'

export default {
	content: ['./app/**/*.{ts,tsx,jsx,js}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Nunito Sans',
					'Nunito Sans Fallback',
					...defaultTheme.fontFamily.sans,
				],
			},
			gridTemplateRows:{
				main: "min-content 1fr 50px"
			},
			gridColumn: {
				full: '1 / -1',
			},
		},
		screens: {
            'xs': '320px',
			 // => @media (min-width: 320px) {...}
			'sm': '640px', 
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'1xl': '1440px',
		}
	},
} satisfies Config
