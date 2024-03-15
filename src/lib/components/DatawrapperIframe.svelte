<script>
	import { createEventDispatcher } from 'svelte';
	import datawrapper_events from '$lib/utils/events';

	/*** @type {string} HTML title of the iframe */
	export let title = 'Lorem ipsum dolor sit amet';

	/*** @type {string} Datawrapper chart ID */
	export let datawrapper_id = 'TNscZ';

	/*** @type {string} HTML aria-label of the iframe */
	export let aria_label = 'Lorem ipsum dolor sit amet';

	/*** @type {string} iframe scrolling attribute */
	export let scrolling = 'no';

	/*** @type {string} iframe frameborder attribute */
	export let frameborder = '0';

	/*** @type {string} iframe height attribute (placeholder since reactivity is enabled) */
	export let height = '500';

	/*** @type {string} CSS styles of the iframe */
	export let style = 'width: 0; min-width: 100% !important; border: none;';

	// add event dispatching for Datawrapper interaction events
	// more: https://developer.datawrapper.de/docs/listening-to-chart-interaction-events#visualization-events
	const dispatch = createEventDispatcher();

	let datawrapper = datawrapper_events();

	if (typeof window !== 'undefined') {
		// @ts-ignore
		datawrapper.on('region.click', (e) => {
			dispatch('regionclick', e);
		});

		// @ts-ignore
		datawrapper.on('region.mouseenter', (e) => {
			dispatch('regionmouseenter', e);
		});

		// @ts-ignore
		datawrapper.on('region.mouseleave', (e) => {
			dispatch('regionmouseleave', e);
		});
	}

	// responsive iframe code from Datawrapper
	if (typeof window !== 'undefined') {
		window.addEventListener('message', function (a) {
			if (void 0 !== a.data['datawrapper-height']) {
				var e = document.querySelectorAll('iframe');
				for (var t in a.data['datawrapper-height'])
					for (var r = 0; r < e.length; r++)
						if (e[r].contentWindow === a.source) {
							var i = a.data['datawrapper-height'][t] + 'px';
							e[r].style.height = i;
						}
			}
		});
	}
</script>

<iframe
	{title}
	aria-label={aria_label}
	id="datawrapper-chart-{datawrapper_id}"
	src="https://datawrapper.dwcdn.net/{datawrapper_id}"
	{scrolling}
	{frameborder}
	{style}
	{height}
	data-external="1"
	{...$$restProps}
/>
