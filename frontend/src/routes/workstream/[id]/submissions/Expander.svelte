<script lang="ts">
    export let title = ''
    export let text = ''
    export let toggleAll: boolean = false;
    let expanded = false
    let toggle = () => {
        expanded = !expanded
    }

    $: if (toggleAll) {
        console.log('expand');
        expanded = true
    } else {
        console.log('close');
        expanded = false
    }
</script>

<div class="mb-2 border rounded-lg p-1 bg-blue-200 cursor-pointer shadow-sm" on:click={toggle} on:keydown={toggle}>
    <div class="text-lg font-semibold mb">
        <span class="text-lg">
            {title}
        </span>
    </div>
    {#if expanded}
        <p class="mt-2 border rounded-lg border-gray-50 p-4 max-h-20 overflow-auto whitespace-pre">{text}</p>
    {/if}
</div>