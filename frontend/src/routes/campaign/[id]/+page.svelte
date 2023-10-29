<script lang="ts">
    import { page } from '$app/stores';
    import type { Campaign } from '$lib/Interfaces';
    export let data: any = {};
    let campaign: Campaign;

    $: {
        campaign = data.campaigns.find((c: any) => c.id === $page.params.id);
    }

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

    <!-- Policy Groups -->
    {#each campaign.policy_groups as group}
        <div class="bg-white p-4 shadow-lg rounded-md mb-5">
            <h2 class="">{group.title}</h2>

            <!-- Group summary -->
            <div class="max-h-96 overflow-auto mb-4">
                {#if group.summary}
                    <p class="text-gray-600">{@html group.summary}</p>
                {/if}

                <!-- Policies list -->
                <ul class="list-disc pl-5 mt-2">
                    {#each group.policies as policy}
                        <div class="pb-3">
                            <h3>
                                {policy.title}
                            </h3>
                            <p class="text-x">
                                {@html policy.summary}
                            </p>
                        </div>
                    {/each}
                </ul>
            </div>
        </div>
    {/each}

</div>