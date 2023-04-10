<script lang="ts">
	export let value: string;
	export let rows: number = 10;
</script>
<textarea rows={rows} class="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id="summary" bind:value={value}></textarea>