<script lang="ts">
	import { Button, TextArea } from "$lib/FormComponents";
    let content: string = ""
    export let handleSubmit: (content: string, parent?: string) => void;
    export let parent: string | undefined = undefined;

</script>

<TextArea bind:value={content}></TextArea>
<Button onClick={() => { handleSubmit(content, parent) }}>Submit</Button>