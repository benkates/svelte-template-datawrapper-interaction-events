<script>
	import DatawrapperIframe from '$lib/components/DatawrapperIframe.svelte';
	import InfoDisplay from '$lib/components/InfoDisplay.svelte';
	import { selectedKey } from '../lib/stores';
</script>

<h1>SvelteKit Template for Datawrapper Interaction Events</h1>
<p>
	Datawrapper Documentation: <a
		href="https://developer.datawrapper.de/docs/listening-to-chart-interaction-events"
		>Listening to Chart Interaction Events</a
	>
</p>
<p>SvleteKit Documentation: <a href="https://kit.svelte.dev">kit.svelte.dev</a></p>

<DatawrapperIframe
	title="Share of people using the internet by country"
	datawrapper_id="BfNT0"
	on:regionclick={(e) => {
		console.log(e.detail.data);
		selectedKey.set(e.detail.data['FIPS-Code']);
	}}
	on:regionmouseenter={(e) => selectedKey.set(e.detail.data['FIPS-Code'])}
	on:regionmouseleave={() => selectedKey.set(null)}
/>

<InfoDisplay />
