<script lang="ts">
	export let value: string;
	export let type: string = "text";
</script>
<input class="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" bind:value={value}/>