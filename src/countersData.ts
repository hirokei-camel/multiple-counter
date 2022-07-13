import { writable, Writable } from 'svelte/store';
import type { counter } from './types';
export let countersData: Writable<counter[]> = writable([
  {
    index: 0,
    count: 0,
    title: 'new',
  },
]);
