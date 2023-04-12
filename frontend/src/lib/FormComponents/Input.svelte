<script lang="ts">
	export let value: string;
	export let id: string;
	export let type: string = "text";

	const handleInput = (e: any) => {
		// in here, you can switch on type and implement
		// whatever behaviour you need
		value = type.match(/^(number|range)$/)
		? +e.target.value
		: e.target.value;
	};
</script>

<input {type} id={id} class="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" value={value} on:input={handleInput}/>