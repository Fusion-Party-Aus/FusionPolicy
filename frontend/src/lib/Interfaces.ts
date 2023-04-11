
import type { Moment } from 'moment';
export interface Workstream {
    id: number;
    name: string;
    blurb: string;
    stage: string;
    started: Moment;
    topic: string;
}

export interface Submission {
    id?: string,
    user?: string,
    workstream?: string,
    summary?: string,
    benefit?: string,
    significance?: string,
}