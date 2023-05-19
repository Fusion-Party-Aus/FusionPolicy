<script lang="ts">
    export let title = ''
    export let toggleAll: boolean = false;
    let expanded = false
    let toggle = () => {
        expanded = !expanded
    }

    $: if (toggleAll) {
        expanded = true
    } else {
        expanded = false
    }
</script>

<div class="mb-2 border rounded-lg p-1 bg-blue-200 shadow-sm">
    <div class="text-lg font-semibold mb cursor-pointer" on:click={toggle} on:keydown={toggle}>
        <span class="text-lg">
            {title}
        </span>
    </div>
    {#if expanded}
        <p class="mt-2 border rounded-lg border-gray-50 p-4 max-h-30 overflow-auto">
            <slot>
            </slot>
        </p>
    {/if}
</div>