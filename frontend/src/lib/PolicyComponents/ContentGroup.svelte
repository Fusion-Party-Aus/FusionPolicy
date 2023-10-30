<script lang="ts">
    import type { Value, Portfolio, Campaign, Policy } from '$lib/Interfaces';
    export let item: Portfolio | Campaign;
</script>

<div class="p-3 border border-gray-200 rounded-lg shadow-md">
    <div class="h-32 align-bottom bg-slate-600 p-3">
        <h2 class="relative text-white">{item.name}</h2>
    </div>

    <div class="max-h-96 overflow-hidden">
        {#if item.summary}
            {@html item.summary}
        {:else}
            <p>No Summary Provided</p>
        {/if}
    </div>
    <a href="campaign/{item.id}">Read more</a>

</div>