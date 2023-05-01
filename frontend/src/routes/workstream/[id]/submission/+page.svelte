<script lang="ts">
	import { Button, FormRow, Input, TextArea } from "$lib/FormComponents";
    import { onMount } from 'svelte';
    import {currentUser, pb } from "$lib/pocketbase"
	import type { Source, Submission, Workstream } from "$lib/Interfaces.js";
    export let data: any;
    import ProblemForm from "./forms/ProblemForm.svelte";
    import OutcomeForm  from "./forms/OutcomeForm.svelte";
    import ImplementationForm from "./forms/ImplementationForm.svelte";
    export let workstream: Workstream | null = null;
    export let submission: Submission = {
        "summary": "",
        "benefit": "",
        "significance": "",
        "outcome_vision": "",
        "outcome_specifics": "",
        "outcome_changes": "",
        "outcome_impacts": "",
        "outcome_metrics": "",
        "outcome_stakeholders": "",
    };

    let sources: Source[] = []

    let sourceInput = "";
    let loading = true;
    let sourceSubmitting = false;

    onMount(async() => {
        workstream = await pb.collection('workstreams').getOne(data.workstreamId)

        let submission_data: Submission;

        try {
            submission_data = await pb.collection('submissions').getFirstListItem(`user="${$currentUser?.id}" && workstream="${data.workstreamId}"`);
        } catch (error) {
            console.log(error);
            submission.user = $currentUser?.id;
            submission.workstream = data.workstreamId;
            submission_data = await pb.collection('submissions').create(submission);
        }
        submission = {...submission_data};



        const source_data: any = await pb.collection('sources').getList(1, 50, {filter:`submission="${submission.id}"`, expand: 'user'});
        sources = source_data.items.map((source: Source) => (
            {...source}
        ))
        loading = false;
    });

	let debounceTimer: ReturnType<typeof setTimeout>;
	const debouncedAutosave = () => {
		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
            if (!submission?.id) return;
            pb.collection('submissions').update(submission.id, submission);

        }, 500);
	}

    const addSource = async () => {
        sourceSubmitting = true;
        const new_source: Source = await pb.collection('sources').create({url: sourceInput, submission: submission.id});
        sources.push(new_source);
        sources = sources
        sourceInput = "";
        sourceSubmitting = false;
    }

    const handleSourceKeydown = (e: any) => {
        if (e.key === 'Enter') {
            addSource();
        }
    }

</script>

<div class="w-full">
    {#if submission && workstream && !loading}
    <a href={`/workstream/${data.workstreamId}`}>Back</a>
    <h1>Workstream - {workstream?.name}</h1>

    {#if workstream.status === 'Problem Identification'}
        <ProblemForm submission={submission} autosave={debouncedAutosave}/>
    {:else if workstream.status === 'Outcome Identification'}
        <OutcomeForm submission={submission} autosave={debouncedAutosave}/>
    {:else if workstream.status === 'Implementation'}
        <ImplementationForm submission={submission} autosave={debouncedAutosave}/>
    {/if}

    <FormRow>
        <h4>Sources</h4>
        <p>Your claims should be sourced, add a link to include it with your submission</p>

        <div class="flex">
            <Input id="source_input" bind:value={sourceInput} on:enter placeholder="url..." handleKeydown="{handleSourceKeydown}"/>
            <div class="">
            <Button disabled={sourceSubmitting} onClick={addSource}>{#if sourceSubmitting}Submitting{:else} Submit{/if}</Button>

            </div>
        </div>

        <table class="table-auto w-full">
        <tbody>
        {#each sources as source}
            <tr>
                <td>{source.url}</td>
            </tr>
        {/each}

        </table>

    </FormRow>
    {:else}
        <p>Loading...</p>
    {/if}
</div>
