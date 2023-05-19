<script lang="ts">
	import { FormRow, TextArea } from "$lib/FormComponents";
    import { onMount } from 'svelte';
    import {currentUser, pb } from "$lib/pocketbase"
	import type { Submission, Workstream } from "$lib/Interfaces.js";
	import Expander from "./Expander.svelte";
    export let data: any;

    export let workstream: Workstream | null = null;
    export let submissions: Submission[] = [];
    let selected_status: string;

    let toggleAll = false;

    function expandAllExpanders() {
        toggleAll = true;
    }

    function collapseAllExpanders() {
        toggleAll = false;
    }

    onMount(() => {
        pb.collection('workstreams').getOne(data.workstreamId).then((ws: any) => {
            workstream = ws;
            selected_status = ws.status;
        });

        pb.collection('submissions').getList(1, 50, {filter:`workstream="${data.workstreamId}"`, expand: 'user, sources(submission)'}).then(
            (s: any) => {
                submissions = s.items.map((i: any) => {
                    i.username = i.expand.user.username;
                    i.sources = i.expand['sources(submission)'];
                    return i;
                })
            },
        )
    });

    $: console.log(submissions)

</script>

{#if workstream && selected_status}

<div class="w-full">
    <a href={`/workstream/${data.workstreamId}`}>Back</a>
    <h1>Workstream - {workstream?.name}</h1>

    <div class="flex mb-6 border-b border-gray-300">
        <button class="py-2 px-4 {selected_status === 'Problem Identification' ? 'border-b-2 border-indigo-500 font-semibold' : 'text-gray-500'} focus:outline-none" on:click={() => (selected_status = 'Problem Identification')}>Problem Identification</button>
        <button class="py-2 px-4 {selected_status === 'Outcome Identification' ? 'border-b-2 border-indigo-500 font-semibold' : 'text-gray-500'} focus:outline-none" on:click={() => (selected_status = 'Outcome Identification')}>Outcome Identification</button>
        <button class="py-2 px-4 {selected_status === 'Implementation' ? 'border-b-2 border-indigo-500 font-semibold' : 'text-gray-500'} focus:outline-none" on:click={() => (selected_status = 'Implementation')}>Implementation</button>
    </div>

    <h2>
        Submissions
        <small class="text-xs">
            <button class=" py-1 px-1 rounded mt-3 mr-2 focus:outline-none" on:click={expandAllExpanders}>Expand All</button>
            <button class=" py-1 px-3 rounded mt-3 focus:outline-none" on:click={collapseAllExpanders}>Collapse All</button>
        </small>
    </h2>

    {#each submissions as submission}
        <div class="border border-gray-300 rounded p-4 mb-4">
            <h3 class="text-lg font-semibold mb-2">{submission.username}</h3>
            {#if selected_status === 'Problem Identification'}
            <Expander toggleAll={toggleAll} title='Summary'>{submission.summary}</Expander>
            <Expander toggleAll={toggleAll} title='Benefit'>{submission.benefit}</Expander>
            <Expander toggleAll={toggleAll} title='Significance'>{submission.significance}</Expander>

            {:else if selected_status === 'Outcome Identification'}
            <Expander toggleAll={toggleAll} title='Vision'>{submission.outcome_vision} </Expander>
            <Expander toggleAll={toggleAll} title='Specific Outcomes'>{submission.outcome_specifics} </Expander>
            <Expander toggleAll={toggleAll} title='Changes'>{submission.outcome_changes} </Expander>
            <Expander toggleAll={toggleAll} title='Impacts'>{submission.outcome_impacts} </Expander>
            <Expander toggleAll={toggleAll} title='Metrics'>{submission.outcome_metrics} </Expander>
            <Expander toggleAll={toggleAll} title='Stakeholders'>{submission.outcome_stakeholders} </Expander>
                
            {:else if selected_status === 'Implementation'}
            <p>Under construction</p>
            {/if}

            <Expander toggleAll={toggleAll} title='Sources'>
                {#each submission.sources as source}
                    <p>{source.url}</p>
                {/each}
            </Expander>
          </div>
    {/each}
</div>
{/if}