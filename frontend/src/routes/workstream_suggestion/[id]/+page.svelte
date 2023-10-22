<script lang="ts">
    import { onMount } from 'svelte';
    import { pb } from "$lib/pocketbase"
	import type { WorkstreamSuggestion, WorkstreamComment } from "$lib/Interfaces.js";
	import CommentThread from '$lib/CommentComponents/CommentThread.svelte';
    export let data: any = {};

    let suggestion: WorkstreamSuggestion | null = null;

    onMount(async() => {
        const suggestion_data: any = await pb.collection('workstream_suggestions').getOne(data.workstreamId, {expand: 'user, comments, comments.user, comments.likes'});
        const comments_data = suggestion_data.expand.comments ?? []

        const mapped_comments = comments_data.map( (comment: WorkstreamComment) => {
            return {
                ...comment,
                likes: comment.expand.likes || [],
                user: comment.expand.user
            }
        })

        suggestion = {
            ...suggestion_data, 
            user: suggestion_data.expand.user.username, 
            comments: mapped_comments,
        };

        if (!suggestion) return

    });
</script>

{#if suggestion?.id }
    <div class="w-full flex flex-col">
        <h2>{suggestion?.title}</h2>
        <small>Submitted by: {suggestion?.user} on {suggestion?.created}</small>
        <p>{suggestion?.additional_information}</p>
    </div>

    <CommentThread comments={suggestion.comments} collection="workstream_suggestions" collectionId={suggestion.id}/>
{/if}