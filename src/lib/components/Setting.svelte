<script lang="ts">
	import { settings } from '$lib/store/setting';
	import type { TemperatureUnit } from '$lib/store/setting.model';
	import type { ChangeEventHandler } from 'svelte/elements';

	import { blur } from 'svelte/transition';

    const duration = 350

	let visible = false;
	let selected: TemperatureUnit = 'c';

	const onSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
        settings.update(prev => {
            prev.unit.temperature = selected
            return prev
        })
	};
</script>

<div class="flex flex-row">
	{#if visible}
		<div transition:blur={{ amount: 3, duration }} class="flex flex-row flex-1 items-center mr-3">
			<label for="temperature" class="mr-1">Temperature:</label>
			<select name="temperature" bind:value={selected} on:change={onSelect}>
				<option value="c">Celsius</option>
				<option value="k">Kelvin</option>
				<option value="f">Farenheight</option>
			</select>
		</div>
	{/if}

	<button
		on:click={() => (visible = !visible)}
		class="flex-none i-ic-outline-settings text-gray-600 text-3xl"
	/>
</div>
