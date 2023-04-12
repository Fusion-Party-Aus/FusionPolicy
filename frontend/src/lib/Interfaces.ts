
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
    id?: string,
    user?: string,
    workstream?: string,
    summary: string,
    benefit: string,
    significance: string,
    username?: string,
}