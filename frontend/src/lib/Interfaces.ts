
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
}

export interface Source {
    id?: string,
    url: string
}