<script lang="ts">
    import { autosaveStatus } from './autosaveStatus.js';
</script>

<div class="text-xs">
    {#if $autosaveStatus === 'saving'}
        <span class="text-gray-500">..saving</span>
    {:else if $autosaveStatus == 'saved'}
        <span class="text-green-500">saved</span>
    {:else if $autosaveStatus == 'failed'}
        <span class="text-red-500">failed to save</span>
    {:else if $autosaveStatus == 'unsaved'}
        <span class="text-gray-500">unsaved changes</span>
    {/if}
</div>