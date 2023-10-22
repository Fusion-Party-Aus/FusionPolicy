<script lang="ts">
	import { goto } from '$app/navigation';
  import { FormRow, Input, Select } from '$lib/FormComponents';
	import Button from '$lib/FormComponents/Button.svelte';
  import TextArea from '$lib/FormComponents/TextArea.svelte';
  import { toast } from '@zerodevx/svelte-toast'
	import { currentUser, pb } from '$lib/pocketbase';

  interface Form {
    type: 'position_request' | 'consider resource';
    url: string;
    title: string;
    additional_information: string;
  }

  let form: Form = {
    type: 'position_request', 
    url: '',
    title: '',
    additional_information: '',
  }

  let previewData: { title?: string; description?: string; image?: string } | null = null;

  const submit = async () => {
    if (!$currentUser) {
      return;
    }

    const data = {
      "user": $currentUser.id,
      "status": "pending",
      ...form
    };
    try {
      const record = await pb.collection('workstream_suggestions').create(data);
      goto(`/workstream_suggestion/${record.id}`);
    }
    catch (error) {
      console.log(error);
      return;
    }
  }

  // debounced function
  let timeout: ReturnType<typeof setTimeout>;
  const debounced = (fn: Function, delay: number) => {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  }

  async function getLinkPreview() {
    debounced( async () => {
      const response = await fetch('/link_preview', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: form.url })
      });

      if (response.status !== 200) {
        toast.push("Unable to get link preview")
        return
      }

      previewData = (await response.json()).body;

      if (previewData?.title) {
        form.title = previewData.title;
      }

    }, 1000)
  }

  </script>
  
<h2>Suggest new workstream</h2>

<FormRow>
    <h4>What are you suggesting?</h4>
    <Select id="suggestion_type" bind:value={form.type} options={[ 
      {value: 'position_request', label: 'Request or suggest a position on a topic'},
      {value: 'consider_resource', label: 'Submit a resource for consideration</option'}
    ]}/>
</FormRow>

<FormRow>
    <h4>Link </h4>
    <Input id="url" bind:value={form.url} onKeydown={getLinkPreview}/>
</FormRow>

<FormRow>
    <h4>Title </h4>
    <Input id="title" bind:value={form.title}/>
</FormRow>

<FormRow>
    <h4>Your question or additional information</h4>
    <TextArea rows={3} bind:value={form.additional_information}></TextArea>
</FormRow>

<Button onClick={submit}>Submit</Button>