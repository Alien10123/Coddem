<script>
	import { EditorView, basicSetup } from 'codemirror';
	import { keymap } from '@codemirror/view';
	import { indentWithTab } from '@codemirror/commands';
	import { javascript } from '@codemirror/lang-javascript';
	import { boysAndGirls } from 'thememirror';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	export let height = '';
	export let minHeight = '';
	export let maxHeight = '';
	export let grow = true;

	if (browser) {
		onMount(() => {
			if (document.querySelector('.cm-editor') === null) {
				// let test = EditorView.baseTheme({
				// 	'.cm-editor': {
				// 		fontFamily: '"Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
				// 	}
				// });
				let view = new EditorView({
					extensions: [
						basicSetup,
						javascript(),
						boysAndGirls,
						// @ts-ignore
						keymap.of(indentWithTab)
					]
				});
				console.log(view.dom);
				document.getElementById('code')?.appendChild(view.dom);
			}
		});
	}
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
	#code :global(.cm-gutter) {
		@apply font-code;
	}

	#code :global(.cm-content) {
		@apply font-code;
	}

	#code :global(.cm-editor) {
		@apply bg-slate-1000;
	}

	#code :global(.cm-editor),
	#code :global(.cm-gutters) {
		@apply bg-slate-1000;
	}

	#code :global(.cm-activeLine),
	#code :global(.cm-activeLineGutter) {
		@apply bg-gray-800;
	}
</style>
