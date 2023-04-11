<script lang="ts">
    import { writable } from 'svelte/store';
    import moment from 'moment';
    import type { Workstream } from '$lib/Interfaces';
    import { onMount } from 'svelte';
    import {currentUser, pb } from "$lib/pocketbase"
  
    let workstreams: Workstream[] = [];

    onMount(async () => {
        const data = await pb.collection('workstreams').getFullList()
        workstreams = data.map((ws: any) => {
            return {
                ...ws,
                started: moment(ws.started),
            };
        });
    });
  
    const filter = writable({
      name: '',
      stage: '',
      started: '',
      category: '',
      topic: '',
    });
  
    function filterWorkstreams(workstreams: Workstream[], filter: Record<string, string>): Workstream[] {
      return workstreams.filter((ws: Workstream) => {
        return Object.keys(filter).every(key => {
          const filterValue = filter[key];
          const wsValue = ws[key as keyof Workstream];
          if (!filterValue) return true;

          if (key === 'started') {
            return moment(ws[key]).isSame(moment(filter[key]), 'day');
          } else {
            return (wsValue as string).toLowerCase().includes(filterValue.toLowerCase());
          }
        });
      });
    }
  </script>
  
  <div class="container mx-auto">
    <table class="table-auto w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Stage</th>
          <th>Started</th>
          <th>Category</th>
          <th>Topic</th>
        </tr>
        <tr>
          <th>
            <input
              class="border rounded"
              type="text"
              bind:value={$filter.name}
              placeholder="Filter by name"
            />
          </th>
          <th>
            <input
              class="border rounded"
              type="text"
              bind:value={$filter.stage}
              placeholder="Filter by stage"
            />
          </th>
          <th>
            <input
              class="border rounded"
              type="date"
              bind:value={$filter.started}
              placeholder="Filter by started date"
            />
          </th>
          <th>
            <input
              class="border rounded"
              type="text"
              bind:value={$filter.category}
              placeholder="Filter by category"
            />
          </th>
          <th>
            <input
              class="border rounded"
              type="text"
              bind:value={$filter.topic}
              placeholder="Filter by topic"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {#each filterWorkstreams(workstreams, $filter) as workstream (workstream.name)}
          <tr>
            <td><a href={`/workstream/${workstream.id}`}> {workstream.name}</a></td>
            <td>{workstream.stage}</td>
            <td>{workstream.started.format('YYYY-MM-DD')}</td>
            <td>{workstream.category}</td>
            <td>{workstream.topic}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  