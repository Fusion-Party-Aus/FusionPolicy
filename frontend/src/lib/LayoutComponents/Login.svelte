<script lang="ts">
	import { FormRow, Input, Label, Button } from "$lib/FormComponents";
    import logoColoured from "$lib/img/full-name-colour-portrait-logos.png";
    import {pb} from "$lib/pocketbase"

    let username: string = '';
    let password: string = '';

    async function login() {
        try {
            const x = await pb.collection('users').authWithPassword(username, password);
        } catch (err) {
            alert(err)
        }
    }
</script>

<div class="flex flex-col items-center ">
    <div class="max-w-4xl p-10 border-stone-500">
    <img src={logoColoured} alt="Fusion Logo" class="h-80 mb-10" />
    <form>
        <FormRow>
            <Label isFor="username" >Username</Label>
            <Input id="username" bind:value={username}/>
        </FormRow>
        <FormRow>
            <Label isFor="password">Password</Label>
            <Input id="password" type="password" bind:value={password}/>
        </FormRow>
    <Button onClick={login}>Login</Button>
    </form>
    </div> 
</div>