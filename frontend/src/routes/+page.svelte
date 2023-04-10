<script lang="ts">
    import { writable } from 'svelte/store';
    import moment from 'moment';
    import type { Moment } from 'moment';
  
    interface Workstream {
      id: number;
      name: string;
      stage: string;
      started: Moment;
      category: string;
      topic: string;
    }
  
    let workstreams: Workstream[] = [
      {
        'id': 1,
        'name': 'Affordable housing',
        'stage': 'Problem Identification',
        'started': moment('2023-01-01'),
        'category': 'Category 1',
        'topic': 'Topic 1',
      },
      {
        'id': 2,
        'name': 'Climate Change',
        'stage': 'Problem Identification',
        'started': moment('2023-01-01'),
        'category': 'Category 1',
        'topic': 'Topic 1',
      }
    ];
  
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
  