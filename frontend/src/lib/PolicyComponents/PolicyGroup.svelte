<script lang="ts">
    import type {PolicyGroup } from '$lib/Interfaces';
	import PolicyCard from './PolicyCard.svelte';
    export let group: PolicyGroup; 
</script>

<div class="bg-white p-6 shadow-lg rounded-md mb-6 border border-gray-200">
    <h2 class="">{group.title}</h2>

    <!-- Group summary -->
    <div class="overflow-auto mb-4">
        {#if group.summary}
            <p class="text-gray-600">{@html group.summary}</p>
        {/if}

        <!-- Policies list -->
        <div class="list-disc pl-2 mt-2">
            {#each group.policies as policy}
                <PolicyCard policy={policy} />
            {/each}
        </div>
    </div>
</div>