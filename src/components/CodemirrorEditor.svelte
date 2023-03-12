<script lang="ts">
	import { EditorView, basicSetup } from 'codemirror';
	import { keymap, ViewUpdate } from '@codemirror/view';
	import { indentLess, indentWithTab, insertTab } from '@codemirror/commands';
	import { javascript } from '@codemirror/lang-javascript';
	import { boysAndGirls } from 'thememirror';
	import { browser } from '$app/environment';
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let height = '';
	export let minHeight = '';
	export let maxHeight = '';
	export let grow = true;
	export let codeContents = '';
	export let lang = javascript;

	let activeFile: Writable<{
		name: string;
		lang: string;
		svg: string;
		contents: string;
		active: boolean;
		deleteable: boolean;
	}> = getContext('active');
	let oldActiveFile = $activeFile;

	let code: Writable<string> = getContext('code');

	onMount(() => {
		if (document.querySelector('.cm-editor') === null) {
			let test = EditorView.theme(
				{
					'.cm-scroller': {
						background: 'rgb(38, 40, 49)'
					},
					'.cm-gutters': {
						background: 'rgb(38, 40, 49)'
					},
					'.cm-content': {
						fontFamily:
							'"Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
					},
					'.cm-gutter': {
						fontFamily:
							'"Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
					},
					'.cm-activeLine': {
						background: 'rgb(56 58 67)'
					},
					'.cm-activeLineGutter': {
						background: 'rgb(56 58 67)'
					},
					'.cm-selectionLayer': {
						zIndex: '30 !important'
					},
					'.cm-selectionBackground': {
						background: 'rgb(189 194 208 / 0.4) !important'
					}
				},
				{ dark: true }
			);
			let addedStartingText = false;
			let timer: NodeJS.Timeout | undefined;
			let view = new EditorView({
				extensions: [
					basicSetup,
					lang(),
					test,
					boysAndGirls,
					keymap.of([
						{
							key: 'Tab',
							preventDefault: true,
							run: insertTab
						},
						{
							key: 'Shift-Tab',
							preventDefault: true,
							run: indentLess
						}
					]),
					EditorView.lineWrapping,
					EditorView.updateListener.of((v: ViewUpdate) => {
						if (v.docChanged && addedStartingText) {
							clearTimeout(timer)
							timer = setTimeout(() => {
								$activeFile.contents = v.state.doc.toString()
							}, 500)
							console.log(1)
						}
					})
				]
			});
			view.dispatch({
				changes: { from: 0, insert: $activeFile.contents }
			});
			addedStartingText = true;
			console.log(view.dom);
			document.getElementById('code')?.appendChild(view.dom);

			activeFile.subscribe((v) => {
				if (v.contents !== oldActiveFile.contents) {
					addedStartingText = false;
					view.dispatch({
						changes: {
							from: 0,
							to: view.state.doc.length,
							insert: v.contents
						}
					})
					oldActiveFile = v
					addedStartingText = true;
				}
			})
		}
	});
</script>

<div
	class={`${grow ? 'grow' : ''} w-full ${height} ${minHeight} ${maxHeight} overflow-scroll`}
	id="code"
/>

<svelte:head>
	<style>
		.cm-editor {
			height: 100%;
		}

		.cm-focused {
			outline: 0 !important;
		}
	</style>
</svelte:head>

<style>
	/* #code :global(.cm-editor),
	#code :global(.cm-gutters) {
		@apply bg-slate-1000;
	} */

	/* #code :global(.cm-activeLine),
	#code :global(.cm-activeLineGutter) {
		@apply bg-gray-800;
	} */
</style>
