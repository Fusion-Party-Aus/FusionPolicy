<script lang="ts">
    import { onMount } from 'svelte';

    export let url: string = '';
    let previewData: { title?: string; description?: string; image?: string } | null = null;

    async function getLinkPreview() {
        const response = await fetch('/linkPreview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
        });
        previewData = await response.json();
    }
</script>

<input bind:value={url} placeholder="Enter URL" />
<button on:click={getLinkPreview}>Get Preview</button>

{#if previewData}
    <div class="link-preview">
        <h3>{previewData.title}</h3>
        <p>{previewData.description}</p>
        {#if previewData.image}
            <img src={previewData.image} alt="Link preview" />
        {/if}
    </div>
{/if}

<style>
    /* Add some styling for the preview here */
</style>
