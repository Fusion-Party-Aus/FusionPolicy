<script lang="ts">
	import type { WorkstreamComment } from "$lib/Interfaces";
	import { currentUser, pb } from "$lib/pocketbase";
	import CommentInput from "./CommentInput.svelte";
	import Comment from "./Comment.svelte";
	import { nestComments } from "./comments";
	export let comments: WorkstreamComment[];
    export let collection: "workstream_comments" | "workstream_suggestions";
    export let collectionId: string;

    async function submitComment(content: string, parent?: string) {
        if (!content) return;
        if (!collection) {
            console.error('no collection');
            return;
        }

        if (!collectionId) {
            console.error('no collecection ID');
            return;
        }

        const comment = {
            "user": $currentUser?.id,
            "content": content,
            parent: parent
        }
        const new_comment: WorkstreamComment = await pb.collection('workstream_comments').create(comment);

        await pb.collection(collection).update(collectionId, {
            'comments+': new_comment.id,
        })
        content = "";
        comments = ([...comments, new_comment])
    }
    let nestedComments: any;
    $: {
        nestedComments = nestComments(comments);
    }

</script>

<hr class="my-5"/>
<h2>Comments</h2>
<CommentInput handleSubmit={submitComment}/>

<hr class="my-5"/>
{#if comments.length > 0}
    {#each nestedComments as comment}
        <Comment comment={comment} handleSubmit={submitComment}/>
    {/each}
{:else}
    <p>No Comments yet</p>
{/if}