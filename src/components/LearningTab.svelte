<script>
	import {micromark} from 'micromark';

	export let width = '14'
	export let height = 'full'
	export let lessonName = '';
	export let pageName = '';
	export let pageContent = '';
	export let button = false;
	export let buttonText = 'Run Code'
	export let buttonOnClick = () => {}
</script>

<div class={`bg-slate-900 overflow-scroll w-${width} h-${height} border-r-2 border-slate-500 min-w-14`}>
	<div class="flex h-7 w-full place-items-center justify-center gap-1 bg-slate-1000 ">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="white"
			class="w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
			/>
		</svg>

		<h2 class="font-notoSans font-bold text-white">Tutorial</h2>
	</div>
	<h3 class="ml-2 mt-3 text-xs text-gray-200">{lessonName}</h3>
	<h1 class="ml-2 font-sourceSans text-2xl font-semibold leading-7 text-white">
		{pageName}
	</h1>
	<div class="prose prose-invert">
		<p class="ml-2 mt-3 w-[45ch] text-sm text-white">
			{@html micromark(pageContent)}
		</p>
	</div>
	{#if button}
		<div class={`fixed bottom-0 flex place-items-center bg-slate-1000 h-8 w-${width} justify-end px-4 border-r-2 border-slate-500`}>
			<button on:click={buttonOnClick} class="cursor-pointer bg-blue-500 text-white px-3 py-2 rounded-md">{ buttonText }</button>
		</div>
	{/if}
</div>
