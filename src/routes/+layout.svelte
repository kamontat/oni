<script lang="ts">
	import { browser } from '$app/environment';

	import '@unocss/reset/antfu.css';
	// import '@unocss/reset/tailwind.css'

	if (browser) {
		import('virtual:unocss-devtools');
	}
</script>

<div data-type="layout">
	<slot />
</div>

<style uno:preflights uno:safelist global></style>
