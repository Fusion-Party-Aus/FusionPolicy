<script lang="ts">
	export let isFor: string;
</script>
<label class="block text-gray-700 text-sm font-bold mb-2" for={isFor}><slot></slot></label>