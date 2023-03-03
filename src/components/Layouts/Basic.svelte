<script>
	import { javascript } from '@codemirror/lang-javascript';
	import CodemirrorEditor from '../CodemirrorEditor.svelte';
	import LearningTab from '../LearningTab.svelte'

	export let lessonName = "Editor Layouts"
	export let pageName = "The Basic Layout"
	export let pageContent = "This is a very basic editor, useful for basic programming. It has a code editor (powered by CodeMirror), a learning tab and an output. More complex layouts might include file tabs along with a file explorer. The learning tab is still being worked as of writing, mainly some buttons need to be added at the button. More will need to be added but for now, we are just working on the basic layouts. Then resizable layouts will be added. And then the learning tab will be improved with markdown, elements for tips and hints and more."
	export let codeContents = "const "
	export let lang = javascript
</script>

<div class="h-8 w-screen bg-white" />
<div class="flex h-[calc(100vh-64px)] w-screen">
	<LearningTab
		lessonName={lessonName}
		pageName={pageName}
		pageContent={pageContent}
	/>
	<div class="flex h-full grow flex-col" id="editor">
		<CodemirrorEditor grow={true} minHeight="min-h-[10%]" codeContents={codeContents} lang={lang} />
		<div class="h-12 min-h-12 border-t-2 border-slate-500">
			<!-- <p class="ml-2 mt-2 font-code text-md text-white">Hello World</p> -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<iframe id="iframe" class="w-full h-full" />
		</div>
	</div>
</div>
