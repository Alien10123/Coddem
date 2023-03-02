<script lang="ts">
	import Basic from '../../../components/Layouts/Basic.svelte';
	import BasicFileTabs from '../../../components/Layouts/BasicFileTabs.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="h-screen w-screen overflow-y-hidden bg-slate-1000">
	{#if data.layout === "basic"}
		<Basic />
	{/if}
	{#if data.layout === "basicwithtabs"}
		<BasicFileTabs />
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
