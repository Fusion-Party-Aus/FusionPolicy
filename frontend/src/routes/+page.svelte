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
          {#if displayGroup.summary}
            <p>{displayGroup.summary}</p>
          {:else}
            <p>No Summary Provided
          {/if}

          {#each displayGroup.policies as policy}
            <p>-{policy.title}</p>
          {/each}
        </Expander>
      {/each}

    {/if}
  </div>
  