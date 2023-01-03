<script lang="ts">
	import type { PageData, ActionData } from './$types';

	export let data: PageData;
	export let form: ActionData;
</script>

<form method="POST" action="?/create">
	{#if form?.message}
		<p class="error">{form.message}</p>
	{/if}

	<label for="a">A</label>
	<input name="a" type="text" />

	<label for="b">B</label>
	<input name="b" type="text" />

	<label for="pin">pin</label>
	<input name="pin" type="password" />

    <button>Create</button>
</form>

<p>{data.cdata}</p>
