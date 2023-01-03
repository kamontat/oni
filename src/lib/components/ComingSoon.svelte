<script lang="ts">
    export let name: string;
</script>

<div 
    data-type="component" 
    class="flex flex-col items-center justify-center text-left font-mono antialiased">
    <h1 class="align-middle font-bold text-2xl tracking-wide leading-relaxed"><span class="uppercase underline-offset-3 hover:underline hover:color-red-300">{name}</span> is coming</h1>
    <span class="align-middle text-small color-gray-700">It's going to be amazing</span>
</div>
