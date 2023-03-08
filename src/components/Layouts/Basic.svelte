<script>
	import { javascript } from '@codemirror/lang-javascript';
	import CodemirrorEditor from '../CodemirrorEditor.svelte';
	import LearningTab from '../LearningTab.svelte';
	import Output from '../Output.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let lessonName = 'Editor Layouts';
	export let pageName = 'The Basic Layout';
	export let pageContent =
		'This is a very basic editor, useful for basic programming. It has a code editor (powered by CodeMirror), a learning tab and an output. More complex layouts might include file tabs along with a file explorer. The learning tab is still being worked as of writing, mainly some buttons need to be added at the button. More will need to be added but for now, we are just working on the basic layouts. Then resizable layouts will be added. And then the learning tab will be improved with markdown, elements for tips and hints and more.';
	export let codeContents = 'console.log(`This is a node js app that uses web containers. Try playing around with it. You can use npm in the terminal. The file you are editing is index.js so you just have to run node "index.js" to run whatever is in this file. Make sure to init the project with npm before downloading packages.`)';
	export let lang = javascript;

	setContext('code', writable(codeContents))
</script>

<div class="h-8 w-screen bg-white" />
<div class="flex h-[calc(100vh-64px)] w-screen">
	<LearningTab {lessonName} {pageName} {pageContent} />
	<div class="flex h-full grow flex-col" id="editor">
		<CodemirrorEditor grow={true} minHeight="min-h-[10%]" {codeContents} {lang} />
		<div class="h-12 min-h-12 border-t-2 border-slate-500">
			<Output />
		</div>
	</div>
</div>
