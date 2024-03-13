
import type { Moment } from 'moment';

export interface User {
    id: string;
    username: string;
}

export interface PBBase {
    id: string;
    created?: Moment;
    updated?: Moment;
    collectionId?: string;
    collectionName?: string;
    expand?: any;
}

export interface CommentLike extends PBBase {
    user: string;
    comment: string;
    active: boolean;
}

export interface WorkstreamComment extends PBBase {
    id: string;
    user: User;
    parent: string;
    children?: WorkstreamComment[];
    content: string;
    deleted: boolean;
    deletedReason: string;
    likes: CommentLike[]
}

export interface WorkstreamContentVersions extends PBBase {
    user: User;
    plain_text: string;
    rich_text: string;
}

export interface ContentWorkstream extends PBBase {
    title: string;
    type: string;
    status: string;
    suggestion: string;
    comments: WorkstreamComment[];
    topics: string[];
    categories: string[];
    campaigns: string[];
    portfolios: string[];
    content_versions: WorkstreamContentVersions[];
}
export interface PolicyWorkstream extends PBBase {
    name: string;
    blurb: string;
    status: string;
    started: Moment;
    topics: string[];
    categories: string[];
    portfolios: string[];
}

export interface WorkstreamSuggestion extends PBBase {
    url: string;
    title: string;
    additional_information: string;
    user: User;
    type: string;
    status: string;
    comments: WorkstreamComment[];
    response?: string;
}

export type Workstream = ContentWorkstream | PolicyWorkstream | WorkstreamSuggestion;


export interface Submission extends PBBase {
    user: User;
    workstream?: string;
    summary: string;
    benefit: string;
    significance: string;
    outcome_vision: string;
    outcome_specifics: string;
    outcome_changes: string;
    outcome_impacts: string;
    outcome_metrics: string;
    outcome_stakeholders: string;
    sources: any[];
}

export interface Source extends PBBase {
    url: string
}

export interface Value extends PBBase {
    id: string;
    name: string;
}

export interface Portfolio extends PBBase {
    id: string;
    name: string;
    blurb: string;
    summary: string;
    policies: Policy[];
}


export interface Campaign extends PBBase {
    id: string;
    name: string;
    blurb: string;
    summary: string;
    policy_groups: PolicyGroup[];
    order: number;
    active: boolean;
}

export interface PolicyGroup extends PBBase {
    title: string;
    summary: string;
    campaigns: string[]
    policies: Policy[];
    order: number;
    active: boolean;
}

export interface Policy extends PBBase {
    title: string;
    summary: string;
    portfolios: string[];
    details: string[];
    campaigns: string[];
    values: Value[];
    policy_groups: string[];
    order: number
    active: boolean;
}