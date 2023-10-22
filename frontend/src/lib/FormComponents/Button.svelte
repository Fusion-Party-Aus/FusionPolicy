<script lang="ts">
	export let onClick: any = () => {} // TODO function with any arguments
	export let disabled = false;
	export let width: "w-full" | "w-auto" = "w-full"



</script>

<button on:click={onClick} class="shadow border rounded {width} y-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline bg-slate-50" disabled={disabled}><slot></slot></button>