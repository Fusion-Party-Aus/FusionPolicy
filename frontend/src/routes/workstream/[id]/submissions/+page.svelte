<script lang="ts">
	import { FormRow, TextArea } from "$lib/FormComponents";
    import { onMount } from 'svelte';
    import {currentUser, pb } from "$lib/pocketbase"
	import type { Submission, Workstream } from "$lib/Interfaces.js";
	import Expander from "./Expander.svelte";
    export let data: any;

    export let workstream: Workstream | null = null;
    export let submissions: Submission[] = [];

    onMount(() => {
        pb.collection('workstreams').getOne(data.workstreamId).then((ws: any) => {
            workstream = ws
        });

        pb.collection('submissions').getList(1, 50, {filter:`workstream="${data.workstreamId}"`, expand: 'user'}).then(
            (s: any) => {
                submissions = s.items.map((i: any) => {
                    console.log(i)
                    i.username = i.expand.user.username;
                    return i;
                })
            },
        )
    });

    $: console.log(submissions)

</script>

<div class="w-full">
    <a href={`/workstream/${data.workstreamId}`}>Back</a>
    <h1>Workstream - {workstream?.name}</h1>
    <h2>Submissions</h2>

    {#each submissions as submission}
        <div class="border border-gray-300 rounded p-4 mb-4">
            <h3 class="text-lg font-semibold mb-2">{submission.username}</h3>
            <Expander title='Summary' text={submission.summary} />
            <Expander title='Benefit' text={submission.benefit} />
            <Expander title='Significance' text={submission.significance} />
          </div>
    {/each}
</div>
