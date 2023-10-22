<script lang="ts">
	export let id: string | null = null;
	export let value: string;
	export let multiple: boolean = false;
	export let onChange: (e: Event) => void = () => {};
	export let options: {value: string, label: string}[] = [];
</script>

{#if multiple}
<select on:change={onChange} class="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id={id} bind:value={value}>
	{#each options as option}
		<option value={option.value}>{option.label}</option>
	{/each}
</select>

{:else}
<select on:change={onChange} class="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id={id} bind:value={value}>
	<slot></slot>
	{#each options as option}
		<option value={option.value}>{option.label}</option>
	{/each}
</select>
{/if}