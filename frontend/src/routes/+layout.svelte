<script lang="ts">
  import "../app.css";
  import logo from "$lib/fusion-logo-right-white.svg";
  import { SvelteToast } from '@zerodevx/svelte-toast'
  import {currentUser, pb } from "$lib/pocketbase"
	import FormRow from "$lib/FormComponents/FormRow.svelte";

  let username: string;
  let password: string;

  async function login() {
    await pb.collection('users').authWithPassword(username, password);
  }
</script>

{#if $currentUser}
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
        <li>{$currentUser.username}</li>
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

{:else}
<h1>
  You're not logged in, bucko
  <FormRow>
    <input bind:value={username}/>
  </FormRow>
  <FormRow>
    <input type="password" bind:value={password}/>
  </FormRow>
  <button on:click={login}>Login</button>
</h1>
{/if}