<script lang="ts">
	import { Button, FormRow, Input, TextArea } from "$lib/FormComponents";
    import { onMount } from 'svelte';
    import {currentUser, pb } from "$lib/pocketbase"
	import type { Source, Submission, Workstream } from "$lib/Interfaces.js";
    export let data: any;

    export let workstream: Workstream | null = null;
    export let submission: Submission = {
        "summary": "",
        "benefit": "",
        "significance": "",
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
    {#if submission && !loading}
    <a href={`/workstream/${data.workstreamId}`}>Back</a>
    <h1>Workstream - {workstream?.name}</h1>

    <h2>Phase 1 - Problem Identification</h2>
    <p class="pb-2">This form is used to report your research and analysis of the problems identified in the policy proposal. It provides a structured way to assess the scope and scale of the problem the policy is likely to attempt to resolve.</p>
    <FormRow>
        <h4>1. Your summary assessment of the problem. </h4>
        <TextArea rows={3} onChange={debouncedAutosave} bind:value={submission.summary}></TextArea>
    </FormRow>

    <FormRow>
        <h4>2. The number of Australians likely to directly use/benefit from the policy?</h4>
        <small>
            <ul>
                <li>
                    (Please identify if the beneficiaries can be properly identified or this is a broad social good?)
                </li>
                <li>
                    (Please identify if you can the actual number of Australians affected over what timeline?)
                </li>
                <li>
                    (If the matter is a broad social good or values based policy related to our party state this and clarify).
                </li>
            </ul>
        </small>
        <TextArea rows={3} onChange={debouncedAutosave} bind:value={submission.benefit}></TextArea>
    </FormRow>

    <FormRow>
        <h4>3. The significance of the use/benefit for these Australians? </h4>
        <small>
            (While the policy may only affect a few Australians, the benefit may be substantial, please explain).
            (If the policy is a broad or an ecological public good then please clarify the significance geographically, morally or legally)
        </small>
        <TextArea rows={3} onChange={debouncedAutosave} bind:value={submission.significance}></TextArea>
    </FormRow>
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
