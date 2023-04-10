<script lang="ts">
  import "../app.css";
  import logo from "$lib/fusion-logo-right-white.svg";
  import { SvelteToast } from '@zerodevx/svelte-toast'

</script>

<header class="bg-black shadow-md">
  <div class="container mx-auto px-4 py-2 flex items-center justify-between">
    <div class="text-white text-2xl font-bold">
      <img src={logo} alt="Fusion Logo" class="h-8" />
    </div>
    <nav>
      <ul class="flex items-center space-x-4">
        <li>
          <a
            href="/register"
            class="text-white hover:text-blue-300"
          >Policy Register</a>
        </li>
        <li>
          <a
            href="/"
            class="text-white hover:text-blue-300"
          >Workstreams</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

<SvelteToast />

<div class="flex flex-col items-center min-h-screen py-2">
  <div class="max-w-4xl">
    <slot></slot>
  </div>

</div>