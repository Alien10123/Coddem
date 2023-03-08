<script lang="ts">
	import { WebContainer } from '@webcontainer/api';
	import { getContext, onMount } from 'svelte';
	import { Terminal } from 'xterm';
	import 'xterm/css/xterm.css';
	import { FitAddon } from 'xterm-addon-fit';
	import type { Writable } from 'svelte/store';

	let code: Writable<string> = getContext('code');

	onMount(async () => {
		console.log(code);
		const terminalEl = document.querySelector('.terminal') as HTMLDivElement;
		const webcontainerInstance = await WebContainer.boot();

		const files = {
			'index.js': {
				file: {
					contents: $code
				}
			}
		};

		await webcontainerInstance.mount(files);

		const fitAddon = new FitAddon();

		const terminal = new Terminal({
			convertEol: true
		});
		terminal.loadAddon(fitAddon);
		terminal.open(terminalEl);

		fitAddon.fit();

		const shellProcess = await webcontainerInstance.spawn('jsh', {
			terminal: {
				cols: terminal.cols,
				rows: terminal.rows
			}
		});
		shellProcess.output.pipeTo(
			new WritableStream({
				write(data) {
					terminal.write(data);
				}
			})
		);

		const input = shellProcess.input.getWriter();
		terminal.onData((data) => {
			input.write(data);
		});

		window.addEventListener('resize', () => {
			fitAddon.fit();
			shellProcess.resize({
				cols: terminal.cols,
				rows: terminal.rows
			});
		});
        code.subscribe(async (v) => {
            await webcontainerInstance.fs.writeFile('/index.js', v)
        })
	});
</script>

<div class="terminal pb-3 h-full w-full" />

<svelte:head>
	<style>
		.xterm,
		.composition-view,
		.xterm-viewport {
			background: #262831 !important;
		}
	</style>
</svelte:head>
