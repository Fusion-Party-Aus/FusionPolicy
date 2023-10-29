<script lang="ts">
    import { writable } from 'svelte/store';
    import { goto } from '$app/navigation';
    import type { PolicyWorkstream, ContentWorkstream, WorkstreamSuggestion, Workstream } from '$lib/Interfaces';
    import { onMount } from 'svelte';
    import {getFullList, pb } from "$lib/pocketbase"
	import { Button } from '$lib/FormComponents';
  
    let policyWorkstreams: PolicyWorkstream[] = [];
    let contentWorkstreams: ContentWorkstream[] = [];
    let workstreamSuggestions: WorkstreamSuggestion[] = [];
    let allWorkstreams: Workstream[] = [];

    onMount(async () => {
        policyWorkstreams = await getFullList('workstreams', {dateFields: ['started']});
        contentWorkstreams = await getFullList('content_workstreams');
        workstreamSuggestions = await getFullList('workstream_suggestions');
        allWorkstreams =  [...policyWorkstreams, ...contentWorkstreams, ...workstreamSuggestions];
        console.log(allWorkstreams)
    });

    let orderBy: string = 'created';
    let orderDirection: string = 'asc';
  
    const filter = writable({
      status: '',
      type: '',
    });

    function filterWorkstreams(workstreams: Workstream[], filter: Record<string, string>): Workstream[] {
      return workstreams.filter((ws: Workstream) => {
        return Object.keys(filter).every(key => {
          const filterValue = filter[key];
          const wsValue = ws[key as keyof Workstream];
          if (!filterValue) return true;
        });
      });
    }

    function isContentWorkstream(workstream: Workstream): workstream is ContentWorkstream {
      return (workstream as ContentWorkstream).collectionName == 'content_workstreams'
    }

    function isPolicyWorkstream(workstream: Workstream): workstream is PolicyWorkstream {
      return (workstream as ContentWorkstream).collectionName == 'workstreams'
    }

    function isWorkstreamSuggestion(workstream: Workstream): workstream is WorkstreamSuggestion {
      return (workstream as ContentWorkstream).collectionName == 'workstream_suggestions'
    }
  </script>

  
  <div class="container mx-auto">
    <div class="flex justify-between">
      <h1 class="inline">Current Workstreams</h1>
      <div class="w-200">
        <Button onClick={() => { goto("/intake") } }>Suggest a new workstream</Button>
      </div>
    </div>
    <table class="table-auto w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Status</th>
          <th>Comments</th>
          <th>Last Activity</th>
        </tr>
      </thead>
      <tbody>
        {#each filterWorkstreams(allWorkstreams, $filter) as workstream (workstream.id)}
          {#if isPolicyWorkstream(workstream)}
            <tr class="cursor-pointer" on:click={() => {goto(`/policy_workstream/${workstream.id}`)}}>
              <td>{workstream.name}</td>
              <td>TODO</td>
              <td>Policy: {workstream.status}</td>
              <td>-</td>
              <td>TODO</td>
            </tr>
          {:else if isContentWorkstream(workstream)}
            <tr class="cursor-pointer" on:click={() => {goto(`/content_workstream/${workstream.id}`)}}>
              <td>Content: {workstream.type}</td>
              <td>{workstream.status}</td>
              <td>{workstream.comments.length}</td>
              <td>TODO</td>
              <td>TODO</td>
            </tr>
          {:else if isWorkstreamSuggestion(workstream)}
            <tr class="cursor-pointer" on:click={() => {goto(`/workstream_suggestion/${workstream.id}`)}}>
              <td>{workstream.title}</td>
              <td>TODO</td>
              <td>{workstream.status}</td>
              <td>{workstream.comments.length}</td>
              <td>TODO</td>
            </tr>
          {/if}
        {/each}
      </tbody>
    </table>
  </div>
  