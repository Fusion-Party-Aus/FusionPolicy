<script lang="ts">
    import type { Policy } from '$lib/Interfaces';
    export let policy: Policy; 
    let expanded = false;
</script>

<div class="pb-3 px-3 my-2 border rounded border-gray-200 bg-gray-50">
    <h3>
        {policy.title}
    </h3>
    {#if policy.summary}
        {@html policy.summary}
    {/if}

    {#if policy.details}
        {#if expanded}
            <p class="text-x">
                {@html policy.details}
            </p>
            <button class="text-sm text-blue-500" on:click={() => expanded = false}>
                Show less
            </button>
        {:else}
            <button class="text-sm text-blue-500" on:click={() => expanded = true}>
                Show more
            </button>
        {/if}
    {/if}
</div>