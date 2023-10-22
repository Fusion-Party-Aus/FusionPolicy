<script lang="ts">
    import { onMount } from 'svelte';
    import {currentUser, pb } from "$lib/pocketbase"
	import type { Submission, Workstream } from "$lib/Interfaces.js";
    import { page } from '$app/stores';
    export let data: any = {};

    export let workstream: Workstream | null = null;
    export let submission: Submission | null = null;

    onMount(() => {
        pb.collection('workstreams').getOne(data.workstreamId).then((ws: any) => {
            workstream = ws
        });

        pb.collection('submissions').getFirstListItem(`user="${$currentUser?.id}" && workstream="${data.workstreamId}"`).then(
            (s: any) => {
                submission = s
            },
            async (err: any) => {
            }
        )
    });

</script>

<div class="w-full flex flex-col gap-5">
    <h1>Workstream - {workstream?.name}</h1>
    <p class="text-sm bg-sky-100 p-3 rounded">{@html workstream?.blurb}</p>

    <a href={`${$page.url}/submission`} class="border-gray-400 border p-5 cursor-pointer">Edit your Submission</a>
    <a href={`${$page.url}/submissions`} class="border-gray-400 border p-5 cursor-pointer">View All Submissions</a>
</div>
