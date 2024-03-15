# SvelteKit Template for Datawrapper Interaction Events

The purpose of this template repository is to get you started with a SvelteKit project that captures Datawrapper chart interaction events and uses a data key to display information from a lookup dataset.

If you're unfamiliar with this workflow, check out the following documentation:

- [Svelte Interactive Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte)
- [SvelteKit Documentation](https://kit.svelte.dev)
- [Datawrapper: Listening to Chart Interaction Events](https://developer.datawrapper.de/docs/listening-to-chart-interaction-events)

## Project structure and key files (`.src/`)

- `data/data.json`: A sample dataset to use as a lookup table.
- `lib/stores.js`: Writable/readable stores to capture/display information. These are named `selectedKey` and `lookupData`.
- `lib/components/DatawrapperIframe.svelte`: A Svelte component that wraps the Datawrapper iframe and listens to interaction events. Define which events are dispatched here.
- `lib/components/InfoDisplay.svelte`: A Svelte component that displays the information from the lookup dataset.
- `lib/utils/events.js`: Utility script for attaching interaciton event listeners to Datawrapper charts. Copied and slightly modified from the [Datawrapper documentation](https://developer.datawrapper.de/docs/listening-to-chart-interaction-events).
- `routes/+page.svelte`: The parent page for the application.

### Project Settings

[JSDoc for type checking](https://github.com/jsdoc/jsdoc) and [Prettier for code formatting](https://prettier.io/) are enabled by default.

## Developing

Install dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
