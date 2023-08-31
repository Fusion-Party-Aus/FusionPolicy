<script lang="ts">
    import type { Value, Portfolio, Campaign, Policy } from '$lib/Interfaces';
    export let item: Portfolio | Campaign;
</script>

<div class="p-3 border border-gray-200 rounded-lg shadow-md">
    <div class="h-32 align-bottom bg-slate-600 p-3">
        <h2 class="relative text-white">{item.name}</h2>
    </div>

    <div class="max-h-96 overflow-hidden">
        <!-- {#if item.blurb}
            {@html item.blurb}
        {:else}
            <p>No blurb Provided</p>
        {/if} -->

        {#if item.summary}
            {@html item.summary}
        {:else}
            <p>No Summary Provided</p>
        {/if}
        <!--
        <h2>Policies</h2>
        {#each item.policies as policy}
        <p>-{policy.title}</p>
        {/each}
            -->
    </div>
    <a href="#">Read more</a>

</div>