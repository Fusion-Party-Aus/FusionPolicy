<script lang="ts">
	export let onClick: () => void;
	export let disabled = false;
</script>

<button on:click={onClick} class="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline bg-slate-50" disabled={disabled}><slot></slot></button>