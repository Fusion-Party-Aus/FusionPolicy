<script lang="ts">
	import { Button } from "$lib/FormComponents";
	import type { WorkstreamComment, CommentLike } from "$lib/Interfaces";
	import CommentInput from "./CommentInput.svelte";
	import { currentUser, pb } from "$lib/pocketbase";
	export let comment: WorkstreamComment;
    let showReply: boolean = false;
    export let handleSubmit: (content: string, parent?: string) => void;
    let activeLikes: number = 0

    const submitAndClose = (content: string, parent?: string): void => {
        handleSubmit(content, parent);
        showReply = false;
    }

    const toggleLike = async () => {
        const existing_like = comment.likes?.find(() => comment.user.id === $currentUser?.id)
        if (existing_like) {
            await pb.collection('comment_likes').update(existing_like.id, {"active": !existing_like.active});
            existing_like.active = !existing_like.active
            comment.likes = [...comment.likes];
            return
        }

        const new_like: CommentLike = await pb.collection('comment_likes').create({'user': $currentUser?.id, 'active': true, comment: comment.id});
        await pb.collection("workstream_comments").update(comment.id, {
            'likes+': new_like.id,
        })

        comment.likes = [...comment.likes, new_like]
    }

    $: {
        activeLikes = comment.likes?.filter((c) => c.active).length || 0
    }
</script>

<div class="flex flex-col">
    <small>Submitted by: {comment.user.username} on {comment.created}</small>
    <p>{comment.content}</p>
    <div class="flex">
        <Button width="w-auto" onClick={toggleLike}>Like ({activeLikes})</Button>
        <Button width="w-auto" onClick={() => showReply = !showReply}>Reply</Button>
    </div>

    {#if showReply}
        <CommentInput handleSubmit={submitAndClose} parent={comment.id}></CommentInput>
    {/if}

    {#if comment?.children && comment.children.length > 0}
        <div class="pl-4 border-l-2">
        {#each comment.children as child}
            <svelte:self comment={child} handleSubmit={handleSubmit}/>
        {/each}
        </div>
    {/if}
</div>