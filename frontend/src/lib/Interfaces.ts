
import type { Moment } from 'moment';

export interface Workstream {
    id: number;
    name: string;
    blurb: string;
    status: string;
    started: Moment;
    topics: string[];
    categories: string[];
}

export interface Submission {
    id?: string;
    user?: string;
    workstream?: string;
    summary: string;
    benefit: string;
    significance: string;
    username?: string;
    outcome_vision: string;
    outcome_specifics: string;
    outcome_changes: string;
    outcome_impacts: string;
    outcome_metrics: string;
    outcome_stakeholders: string;
    sources: any[];
}

export interface Source {
    id?: string,
    url: string
}

export interface Value {
    id: string;
    name: string;
}

export interface Portfolio {
    id: string;
    name: string;
    blurb: string;
    summary: string;
    policies: Policy[];
}

export interface Campaign {
    id: string;
    name: string;
    blurb: string;
    summary: string;
    policies: Policy[];
}

export interface Policy {
    id: string;
    title: string;
    summary: string;
    portfolios: string[];
    campaigns: string[];
    values: Value[];
}