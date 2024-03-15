<script>
	import { lookupData } from '../stores';
	import { comma } from '$lib/utils/format';

	/**
	 * Define the data object type for the info display
	 *
	 * @typedef {Object} DisplayDataItem
	 * @property {string} label - The label for the data item.
	 * @property {'pop' | 'pop_chg' | 'birth' | 'death'} var - The variable name for the data item.
	 */

	/**
	 * Array of objects for the info display
	 *
	 * @type {DisplayDataItem[]}
	 */
	const displayData = [
		{ label: 'Population', var: 'pop' },
		{ label: 'Yearly Population Change', var: 'pop_chg' },
		{ label: 'Births', var: 'birth' },
		{ label: 'Deaths', var: 'death' }
	];
</script>

<h2>{$lookupData.name}, {$lookupData.abbr}</h2>
{#each displayData as d}
	<p><b>{d.label}:</b> {comma($lookupData[d.var])}</p>
{/each}
<span>*Data for 2022</span>

<style>
	/* CSS goes here */
</style>
