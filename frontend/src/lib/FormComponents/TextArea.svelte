<script lang="ts">
	export let value: string;
	export let rows: number = 3;
	export let onChange: (e: Event) => void = () => {};
</script>
<textarea on:keyup={onChange} rows={rows} class="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id="summary" bind:value={value}></textarea>