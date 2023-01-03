<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { page } from '$app/stores';
	import {dashboard} from '$lib/data/tools';

	import Setting from './Setting.svelte';

	const dispatch = createEventDispatcher();
	const onNavigate = (path: string) => {
		dispatch('navigate', {
			path
		});
	};

	$: pathname = $page.url.pathname;
</script>

<div class="flex flex-row justify-end mb-4">
	<Setting />
</div>
<div
	class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row-dense auto-cols-auto auto-rows-auto"
>
	{#each dashboard as panel}
		{#if pathname != panel.url}
			<a
				href={panel.url}
				class="mx-3 my-2"
				data-sveltekit-preload-code="hover"
				on:click={() => onNavigate(panel.url)}
			>
				<div 
					class="flex relative min-w-24 min-h-24 border-2 border-gray-400 border-opacity-80 bg-gray-300 bg-opacity-40 rounded-md"
					>
					<img class="absolute top-1/2 transform -translate-y-1/2 ml-3 w-12" alt="{panel.name}'s image" src={panel.image} />
					<span class="m-auto">{panel.name}</span>
				</div>
			</a>
		{/if}
	{/each}
</div>
