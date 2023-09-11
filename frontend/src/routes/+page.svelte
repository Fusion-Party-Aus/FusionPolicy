<script lang="ts">
    import type { Value, Portfolio, Campaign, Policy } from '$lib/Interfaces';
    import MultiSelect from 'svelte-multiselect'
    import { onMount } from 'svelte';
    import PolicyCard from '$lib/PolicyComponents/PolicyCard.svelte';
    import { fade } from 'svelte/transition';
    import {flip} from 'svelte/animate';
    import Expander from './workstream/[id]/submissions/Expander.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
    let filteredPolicies: Policy[] = [];

    let arrangeBy = 'Policy'
    let loading = true;
    let filterByPortfolio: { label: string, value: string }[] = [];
    let filterByCampaign: { label: string, value: string }[] = [];
    let filterByValue: { label: string, value: string }[] = [];
    let filterByTopic: { label: string, value: string }[] = [];

    onMount(async () => {
      loading = false;
    });

    $: filteredPolicies = data.policies.filter(policy => {
      if (filterByPortfolio.length > 0) {
        if (!policy.portfolios.some(portfolio => filterByPortfolio.map(p => p.value).includes(portfolio))) {
          return false;
        }
      }

      if (filterByCampaign.length > 0) {
        if (!policy.campaigns.some(campaign => filterByCampaign.map(c => c.value).includes(campaign))) {
          return false;
        }
      }

      if (filterByValue.length > 0) {
        if (!policy.values.some(value => filterByValue.map(v => v.value).includes(value))) {
          return false;
        }
      }
      return true;
    });
  
  </script>
  
  <div class="container mx-auto p-4">
    <h1 class="text-3xl mb-4">Policy Register</h1>
    <div class="flex items-center space-x-4 mb-6">
        <label for="arrangeBy" class="text-xl">Arrange By</label>
        <select id="arrangeBy" bind:value={arrangeBy} class="border p-2 rounded">
            <option value="Portfolio">Portfolio</option>
            <option value="Campaign">Campaign</option>
            <option value="Policy">Policy</option>
        </select>
    </div>

    {#if loading}
      <p class="text-xl">Loading...</p>
    {:else}
      {#if arrangeBy === 'Portfolio'}
        {#each data.portfolios as portfolio}
          <Expander title={`${portfolio.name} - ${portfolio.policies.length} policies`}>
            <h2>Summary</h2>
            {#if portfolio.summary}
              {@html portfolio.summary}
            {:else}
              <p>No Summary Provided
            {/if}

            <h2>Policies</h2>
            {#each portfolio.policies as policy}
              <p>-{policy.title}</p>
            {/each}
          </Expander>
        {/each}
      {:else if arrangeBy === 'Campaign'}
        <div class="grid gap-4 md:grid-cols-3">
          {#each data.campaigns as campaign}
              <div class="p-4 border rounded">
                  <PolicyCard item={campaign}></PolicyCard>
              </div>
          {/each}
        </div>

      {:else if arrangeBy === 'Policy'}
        <div class="flex space-x-4 mb-6">
          <span class="text-xl">Filter by Portfolio:</span>
          <MultiSelect bind:selected={filterByPortfolio} options={data.portfolios.map((p) => ({label: p.name, value: p.id}))} />
        </div>
        <div class="flex space-x-4 mb-6">
            <span class="text-xl">Filter by Campaign:</span>
            <MultiSelect bind:selected={filterByCampaign} options={data.campaigns.map((c) => ({label: c.name, value: c.id}))} />
        </div>

        <div class="grid gap-4">
            {#each filteredPolicies as policy (policy.id)}
                <div class="p-4 border rounded" in:fade animate:flip={{duration: 200}}>
                    <p class="text-xl">{policy.title}</p>
                </div>
            {/each}
        </div>
      {/if}
    {/if}
  </div>
  