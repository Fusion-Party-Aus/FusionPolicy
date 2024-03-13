import {pb } from "$lib/pocketbase"
import type { Portfolio, Campaign, Policy, PolicyGroup, Value } from '$lib/Interfaces';
import type { LayoutData } from './$types';


function customSort<T extends { order: number }>(arr: T[]) {
	return arr.sort((a, b) => {
	  if (a.order === 0) return 1;
	  if (b.order === 0) return -1;
	  return a.order - b.order;
	});
  }

export const load: LayoutData = async () => {
	let portfolios: Portfolio[] = await pb.collection('portfolios').getFullList();
	let campaigns: Campaign[] = await pb.collection('campaigns').getFullList();
	campaigns = campaigns.filter((campaign) => campaign.active);
	campaigns = customSort(campaigns);

	let policy_groups: PolicyGroup[] = await pb.collection('policy_groups').getFullList();
	policy_groups = policy_groups.filter((policy_group) => policy_group.active);
	policy_groups = customSort(policy_groups);

	let policies: Policy[] = await pb.collection('policies').getFullList();
	policies = customSort(policies)
	//policies = policies.filter((policy) => policy.active);

	const values: Value[] = await pb.collection('values').getFullList();

	policy_groups = policy_groups.map((policy_group) => {
		policy_group.policies = policies.filter((policy) => policy.policy_groups && policy.policy_groups.includes(policy_group.id));
		return policy_group;
	});

	campaigns = campaigns.map((campaign) => {
		campaign.policy_groups = policy_groups.filter((policy_group) => policy_group.campaigns && policy_group.campaigns.includes(campaign.id));
		return campaign;
	});

	portfolios = portfolios.map((portfolio) => {
		portfolio.policies = policies.filter((policy) => policy.portfolios &&  policy.portfolios.includes(portfolio.id));
		return portfolio;
	});

	return {
        campaigns,
		policy_groups,
        portfolios,
        policies,
        values
	};
};