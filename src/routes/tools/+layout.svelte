<script lang="ts">
	import { blur,fly } from 'svelte/transition';

	import Pulling from '$lib/components/Pulling.svelte';
	import Dashboard from '$lib/components/Dashboard.svelte';

	const duration = 350;

	let visible = false;
	let height = 0;
</script>

<svelte:window bind:innerHeight={height} />

<div data-type="layout" class="relative">
	{#if !visible}
		<div class="mb-2" transition:blur={{ amount: 3, duration }}>
			<Pulling on:click={(e) => (visible = !visible)} />
		</div>
	{/if}

	{#if visible}
		<div
			transition:fly={{ y: -height, duration }}
			class="absolute flex flex-col min-w-screen w-full min-h-screen h-full bg-gray-200 bg-bottom bg-no-repeat bg-contain bg-origin-border"
			style="background-image: url('/banner.png')"
		>
			<div class="flex flex-col flex-1 p-2 overflow-x-auto">
				<Dashboard on:navigate={() => visible = false} />
			</div>

			<div class="flex flex-none">
				<Pulling direction="up" color="white" on:click={(e) => (visible = !visible)} />
			</div>
		</div>
	{/if}

	<div class="flex m-2">
		<slot />
	</div>
</div>
