import { writable, derived } from 'svelte/store';
import data from '../data/data.json';

export const selectedKey = writable(null);

// create a read-only, derived store of lookup data
export const lookupData = derived(selectedKey, ($selectedKey) => {
	if (!$selectedKey) return data[0]['00000'];
	return data[0][$selectedKey];
});
