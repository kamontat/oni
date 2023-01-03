<script lang="ts">
	export let direction = 'down';
	export let color = 'black';
</script>

<button on:click class="flex items-center justify-center flex-grow-1 bg-gray-200 bg-opacity-30">
	<div class="i-ic-baseline-keyboard-arrow-{direction} text-{color} text-5xl" />
</button>
