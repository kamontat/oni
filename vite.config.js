import { sveltekit } from '@sveltejs/kit/vite';

import UnoCSS from '@unocss/vite';
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import presetTypography from '@unocss/preset-typography'
import presetRemToPx from '@unocss/preset-rem-to-px'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		UnoCSS({
			mode: "svelte-scoped",
			presets: [
				presetUno(),
				presetIcons({
					prefix: "i-",
					cdn: 'https://esm.sh/'
				}),
				presetTypography(),
				presetRemToPx(),
			],
			safelist: [
				...["up", "down"].map(k => `i-ic-baseline-keyboard-arrow-${k}`),
				...["black", "white"].map(k => `text-${k}`),
			],
			preflights: [
				{
					getCSS: () => `
						input, select, textarea {
							background-color: inherit
						}
					`
				}
			]
		}),
		sveltekit()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
