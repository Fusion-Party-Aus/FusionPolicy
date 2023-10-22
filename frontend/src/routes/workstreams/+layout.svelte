<script lang="ts">
  import Login from "$lib/LayoutComponents/Login.svelte";
  import Header from "$lib/LayoutComponents/Header.svelte";
  import { SvelteToast } from '@zerodevx/svelte-toast';
  import { currentUser } from "$lib/pocketbase";
</script>

  {#if $currentUser}
  <div class="flex flex-1 overflow-auto flex-col items-center py-2">
    <div class="w-full bg-white rounded-lg h-full p-5">
      <div class="h-full w-full overflow-auto">
        <slot></slot>
      </div>
    </div>
  </div>
  {:else}
    <Login/>
  {/if}

<SvelteToast />
