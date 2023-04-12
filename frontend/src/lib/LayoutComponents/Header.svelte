<script lang="ts">
    import {pb} from "$lib/pocketbase"
    import logoWhite from "$lib/img/fusion-logo-right-white.svg";
    import { currentUser } from "$lib/pocketbase";

    let username: string = '';
    let password: string = '';

    async function login() {
        await pb.collection('users').authWithPassword(username, password);
    }
</script>

  <header class="bg-black shadow-md">
    <div class="container mx-auto px-4 py-2 flex items-center justify-between">
      <div class="text-white text-2xl font-bold">
        <img src={logoWhite} alt="Fusion Logo" class="h-8" />
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
