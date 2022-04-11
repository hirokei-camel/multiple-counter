import { writable } from "svelte/store";
export let countersData = writable([
  {
    index: 0,
    count: 0,
    title: 'new',
  },
]);