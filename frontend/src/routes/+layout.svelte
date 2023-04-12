<script lang="ts">
  import "../app.css";
  import Login from "$lib/LayoutComponents/Login.svelte";
  import Header from "$lib/LayoutComponents/Header.svelte";
  import { SvelteToast } from '@zerodevx/svelte-toast';
  import { currentUser } from "$lib/pocketbase";
</script>

<div class="h-[100vh] bg-slate-300 flex flex-col">
  {#if $currentUser}
  <Header/>

  <div class="flex flex-col items-center h-screen py-2">
    <div class="w-[64rem] bg-white rounded-lg h-full p-4">
      <div class="h-full w-full overflow-auto">
        <slot></slot>
      </div>
    </div>
  </div>

  {:else}
    <Login/>
  {/if}

</div>

<SvelteToast />
