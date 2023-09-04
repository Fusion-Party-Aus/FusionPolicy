<script lang="ts">
    import { page } from '$app/stores';
    import type { Campaign } from '$lib/Interfaces';
    export let data: any = {};
    let campaign: Campaign;

    $: campaign = data.campaigns.find((c: any) => c.id === $page.params.id);
</script>

<div class="w-full flex flex-col gap-5 p-4 bg-gray-50">

    <!-- Campaign title -->
    <h1 class="text-4xl font-bold text-gray-800 mb-4">
        {campaign.name}
    </h1>

    <!-- Campaign summary -->
    <p class="text-lg text-gray-700 mb-4">
        {@html campaign.summary}
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mb-2">Policies:</h2>

    <!-- Policy Groups -->
    {#each campaign.policy_groups as group}
        <div class="bg-white p-4 shadow-lg rounded-md mb-5">
            <h2 class="text-xl font-semibold text-gray-800 mb-3">{group.title}</h2>

            <!-- Group summary -->
            <div class="max-h-96 overflow-auto mb-4">
                {#if group.summary}
                    <p class="text-gray-600">{@html group.summary}</p>
                {/if}

                <!-- Policies list -->
                <ul class="list-disc pl-5 mt-2">
                    {#each group.policies as policy}
                        <li class="text-gray-600">
                            {policy.title}
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    {/each}

</div>
