<script lang="ts">
	export let value: string;
</script>
<textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="summary" bind:value={value}></textarea>