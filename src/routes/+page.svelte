<script>
	import '../app.css';
	import DatawrapperIframe from '$lib/components/DatawrapperIframe.svelte';
	import InfoDisplay from '$lib/components/InfoDisplay.svelte';
	import { selectedKey } from '../lib/stores';
</script>

<h1>SvelteKit Template for Datawrapper Interaction Events</h1>

<DatawrapperIframe
	title="Unemployment in the US by county"
	aria-label="Choropleth map of US counties showing unemployment rates"
	datawrapper_id="BfNT0"
	on:regionclick={(e) => {
		console.log(e.detail.data); //TODO: remove before production use
		selectedKey.set(e.detail.data['FIPS-Code']);
	}}
	on:regionmouseenter={(e) => selectedKey.set(e.detail.data['FIPS-Code'])}
	on:regionmouseleave={() => selectedKey.set(null)}
/>

<InfoDisplay />

<style>
	/* CSS goes here */
</style>
