<script lang="ts">
	import Basic from '../../../components/Layouts/Basic.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data, 123)
</script>

<div class="h-screen w-screen overflow-y-hidden bg-slate-1000">
	{#if data.layout === "basic"}
		<Basic />
	{/if}
</div>

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
