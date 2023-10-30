<script lang="ts">
    import { page } from '$app/stores';
    import type { Campaign } from '$lib/Interfaces';
	import PolicyGroup from '$lib/PolicyComponents/PolicyGroup.svelte';
    export let data: any = {};
    let campaign: Campaign;

    $: {
        campaign = data.campaigns.find((c: any) => c.id === $page.params.id);
    }

</script>

<div class="w-full flex flex-col gap-5 p-4 bg-gray-50">
    <!-- Campaign title -->
    <h1 class="mb-4">
        {campaign.name}
    </h1>

    <!-- Campaign summary -->
    <p class="text-lg text-gray-700 mb-4">
        {@html campaign.summary}
    </p>

    <!-- Policy Groups -->
    {#each campaign.policy_groups as group}
        <PolicyGroup group={group} />
    {/each}

</div>