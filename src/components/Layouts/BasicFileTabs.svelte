<script>
	import CodemirrorEditor from '../CodemirrorEditor.svelte';
	import FileTabs from '../FileTabs.svelte';
	import LearningTab from '../LearningTab.svelte';
</script>

<div class="h-8 w-screen bg-white" />
<div class="flex h-[calc(100vh-64px)] w-screen">
	<LearningTab
		lessonName="Editor Layouts"
		pageName="The Basic Layout With File Tabs"
		pageContent="This is like the basic editor but with file tabs. They aren't functioning. That will be fixed later. This has the same usecases as the basic layout, but it is useful if you need just a few files."
	/>
	<div class="flex h-full grow flex-col" id="editor">
		<FileTabs />
		<CodemirrorEditor grow={true} minHeight="min-h-[10%]" />
		<div class="h-12 min-h-12 border-t-2 border-slate-500">
			<p class="ml-2 mt-2 font-code text-md text-white">Hello World</p>
		</div>
	</div>
</div>
