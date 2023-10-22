import { writable } from 'svelte/store';

export const autosaveStatus = writable<null | 'saved' | 'failed' | 'saving' | 'unsaved'>(null);