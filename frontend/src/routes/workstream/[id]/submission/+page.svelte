<script lang="ts">
	import { FormRow, TextArea } from "$lib/FormComponents";
    import { onMount } from 'svelte';
    import {currentUser, pb } from "$lib/pocketbase"
	import type { Submission, Workstream } from "$lib/Interfaces.js";
    export let data: any;

    export let workstream: Workstream | null = null;
    export let submission: Submission = {
        "summary": "",
        "benefit": "",
        "significance": "",
    };

    onMount(() => {
        pb.collection('workstreams').getOne(data.workstreamId).then((ws: any) => {
            workstream = ws
        });

        pb.collection('submissions').getFirstListItem(`user="${$currentUser?.id}" && workstream="${data.workstreamId}"`).then(
            (s: any) => {
                submission = s
            },
            async (err: any) => {
                submission.user = $currentUser?.id;
                submission.workstream = data.workstreamId;
                submission = await pb.collection('submissions').create(submission);
            }
        )
    });

	let debounceTimer: ReturnType<typeof setTimeout>;
	const debouncedAutosave = () => {
		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
            if (!submission?.id) return;
            pb.collection('submissions').update(submission.id, submission);

        }, 500);
	}

</script>

<div class="w-full">
    {#if submission}
    <a href={`/workstream/${data.workstreamId}`}>Back</a>
    <h1>Workstream - {workstream?.name}</h1>

    <h2>Phase 1 - Problem Identification</h2>
    <p class="pb-2">This form is used to report your research and analysis of the problems identified in the policy proposal. It provides a structured way to assess the scope and scale of the problem the policy is likely to attempt to resolve.</p>
    <FormRow>
        <h4>1. Your summary assessment of the problem. </h4>
        <TextArea onChange={debouncedAutosave} bind:value={submission.summary}></TextArea>
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
        <TextArea onChange={debouncedAutosave} bind:value={submission.benefit}></TextArea>
    </FormRow>

    <FormRow>
        <h4>3. The significance of the use/benefit for these Australians? </h4>
        <small>
            (While the policy may only affect a few Australians, the benefit may be substantial, please explain).
            (If the policy is a broad or an ecological public good then please clarify the significance geographically, morally or legally)
        </small>
        <TextArea onChange={debouncedAutosave} bind:value={submission.significance}></TextArea>
    </FormRow>
    {/if}
</div>
