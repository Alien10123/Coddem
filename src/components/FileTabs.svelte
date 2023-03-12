<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	let files: Writable<
		{
			name: string;
			contents: string;
			svg: string;
			lang: string;
			active: boolean;
			deleteable: boolean;
		}[]
	> = getContext('files');
	let Activefile: Writable<
		{
			name: string;
			contents: string;
			svg: string;
			lang: string;
			active: boolean;
			deleteable: boolean;
		}
	> = getContext('active');
</script>

<div class="w-full h-7 bg-gray-900 flex">
	{#each $files as file, index}
		<button
			class={`${file.active ? 'border-b-pink-400' : 'bg-gray-700'} h-full flex w-fit px-4  place-items-center text-white gap-2 border-[1px] border-gray-900`}
			on:click={() => {
				if (!file.active) {
					$files[index].active = true;
					Activefile.set(file)
					$files.forEach((v, i) => {
						if (index !== i) {
							$files[i].active = false
						}
					})
				}
			}}
		>
			{@html file.svg}
			<h3 class="font-code text-xl">{file.name}</h3>
			{#if file.deleteable}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-x w-5 h-5 ml-1"
					><line x1="18" y1="6" x2="6" y2="18" /><line
						x1="6"
						y1="6"
						x2="18"
						y2="18"
					/></svg
				>
			{/if}
		</button>
	{/each}
</div>
