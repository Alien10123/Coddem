<script>
    export let styles = "w-14 h-full bg-slate-900 border-r-2 border-slate-500"
    export let lessonName = ""
    export let pageName = ""
    export let pageContent = ""
</script>

<div class={`${styles} overflow-scroll`}>
    <div class="bg-slate-1000 h-7 w-full flex justify-center place-items-center gap-1 ">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-book"
            ><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path
                d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
            /></svg
        >
        <h2 class="font-notoSans text-white font-bold">Tutorial</h2>
    </div>
    <h3 class="text-xs text-gray-200 ml-2 mt-3">{lessonName}</h3>
    <h1 class="font-sourceSans text-white text-2xl font-semibold ml-2 leading-7">
        {pageName}
    </h1>
    <div class="prose prose-invert">
        <p class="text-sm ml-2 text-white w-[45ch] mt-3">
            {pageContent}
        </p>
    </div>
</div>