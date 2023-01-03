import adapter from '@sveltejs/adapter-netlify';
// import { vitePreprocess } from '@sveltejs/kit/vite';
// https://github.com/unocss/unocss/issues/2043
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			edge: true
		})
	}
};

export default config;
