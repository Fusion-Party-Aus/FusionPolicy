<script lang="ts">
  import "../app.css";
  import Header from "$lib/LayoutComponents/Header.svelte";
  import { SvelteToast } from '@zerodevx/svelte-toast';

</script>

<div class="h-screen bg-slate-300 flex flex-col">
  <Header/>

  <div class="flex flex-1 overflow-auto flex-col items-center py-2">
    <div class="w-full max-w-[86rem] bg-white rounded-lg h-full p-5">
      <div class="h-full w-full overflow-auto">
        <slot></slot>
      </div>
    </div>
  </div>

  <SvelteToast />
</div>

<SvelteToast />
