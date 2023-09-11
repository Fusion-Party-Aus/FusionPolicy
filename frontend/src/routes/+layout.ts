import {pb } from "$lib/pocketbase"
import type { LayoutData } from './$types';

export const load: LayoutData = async () => {
	let portfolios = await pb.collection('portfolios').getFullList();
	let campaigns = await pb.collection('campaigns').getFullList();
	let policy_groups = await pb.collection('policy_groups').getFullList();
	const policies = await pb.collection('policies').getFullList();
	const values = await pb.collection('values').getFullList();

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
        portfolios,
        policies,
        values
	};
};