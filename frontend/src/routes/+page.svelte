<script lang="ts">
    import type { Value, Portfolio, Campaign, Policy } from '$lib/Interfaces';
    import { onMount } from 'svelte';
    import {pb } from "$lib/pocketbase"
    import Expander from './workstream/[id]/submissions/Expander.svelte';
  
    let values: Value[] = [];
    let portfolios: Portfolio[] = [];
    let campaigns: Campaign[] = [];
    let policies: Policy[] = [];

    let arrangeBy = 'Portfolio'

    let loading = true;

    let displayGroups: Portfolio[] | Campaign[] = [];

    onMount(async () => {
      values = await pb.collection('values').getFullList();
      portfolios = await pb.collection('portfolios').getFullList();
      campaigns = await pb.collection('campaigns').getFullList();
      policies = await pb.collection('policies').getFullList();
      values = await pb.collection('values').getFullList();

      campaigns = campaigns.map(campaign => {
        campaign.policies = policies.filter(policy => policy.campaigns.includes(campaign.id));
        return campaign;
      });

      portfolios = portfolios.map(portfolio => {
        portfolio.policies = policies.filter(policy => policy.portfolios.includes(portfolio.id));
        return portfolio;
      });

      loading = false;
    console.log(portfolios)

    });


    $: displayGroups = arrangeBy === 'Portfolio' ? portfolios : campaigns;
  
  </script>
  
  <div class="container mx-auto">
    <h1>Policy Register</h1>
    Arrange By
    <select bind:value={arrangeBy}>
      <option value="Portfolio">Portfolio</option>
      <option value="Campaign">Campaign</option>
    </select>

    {#if loading}
      <p>Loading...</p>
    {:else}
      {#each displayGroups as displayGroup}
        <Expander title={`${displayGroup.name} - ${displayGroup.policies.length} policies`}>
          <h2>Summary</h2>
          {#if displayGroup.summary}
            {@html displayGroup.summary}
          {:else}
            <p>No Summary Provided
          {/if}

          <h2>Policies</h2>
          {#each displayGroup.policies as policy}
            <p>-{policy.title}</p>
          {/each}
        </Expander>
      {/each}

    {/if}
  </div>
  