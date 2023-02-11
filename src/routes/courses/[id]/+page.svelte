<script lang="ts">
	import { browser } from '$app/environment';

	if (browser) {
		const resizable = function (resizer: HTMLElement) {
                    const direction = resizer.getAttribute('data-direction') || 'horizontal';
                    const prevSibling = resizer.previousElementSibling as HTMLElement;
                    const nextSibling = resizer.nextElementSibling as HTMLElement;

                    // The current position of mouse
                    let x = 0;
                    let y = 0;
                    let prevSiblingHeight = 0;
                    let prevSiblingWidth = 0;

                    // Handle the mousedown event
                    // that's triggered when user drags the resizer
                    const mouseDownHandler = function (e: MouseEvent) {
                        // Get the current mouse position
                        x = e.clientX;
                        y = e.clientY;
                        const rect = prevSibling.getBoundingClientRect();
                        prevSiblingHeight = rect.height;
                        prevSiblingWidth = rect.width;

                        // Attach the listeners to `document`
                        document.addEventListener('mousemove', mouseMoveHandler);
                        document.addEventListener('mouseup', mouseUpHandler);
                    };

                    const mouseMoveHandler = function (e: MouseEvent) {
                        // How far the mouse has been moved
                        const dx = e.clientX - x;
                        const dy = e.clientY - y;

                        switch (direction) {
                            case 'vertical':
                                const h =
                                    ((prevSiblingHeight + dy) * 100) /
                                    resizer.parentElement!.getBoundingClientRect().height;
                                prevSibling.style.height = `${h}%`;
                                break;
                            case 'horizontal':
                            default:
                                const w =
                                    ((prevSiblingWidth + dx) * 100) / resizer.parentElement!.getBoundingClientRect().width;
                                prevSibling.style.width = `${w}%`;
                                break;
                        }

                        const cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
                        resizer.style.cursor = cursor;
                        document.body.style.cursor = cursor;

                        prevSibling.style.userSelect = 'none';
                        prevSibling.style.pointerEvents = 'none';

                        nextSibling.style.userSelect = 'none';
                        nextSibling.style.pointerEvents = 'none';
                    };

                    const mouseUpHandler = function () {
                        resizer.style.removeProperty('cursor');
                        document.body.style.removeProperty('cursor');

                        prevSibling.style.removeProperty('user-select');
                        prevSibling.style.removeProperty('pointer-events');

                        nextSibling.style.removeProperty('user-select');
                        nextSibling.style.removeProperty('pointer-events');

                        // Remove the handlers of `mousemove` and `mouseup`
                        document.removeEventListener('mousemove', mouseMoveHandler);
                        document.removeEventListener('mouseup', mouseUpHandler);
                    };

                    // Attach the handler
                    resizer.addEventListener('mousedown', mouseDownHandler);
                };

                // Query all resizers
                document.querySelectorAll('.resizer').forEach(function (ele) {
                    resizable(ele as HTMLElement);
                });
	}
</script>

<div class="flex">
	<div class="w-10 h-screen bg-gray-1000" />
	<div class="w-[calc(100vw-96px)] h-8 bg-gray-900" />
	<div
		class="layout_container flex w-[calc(100vw-96px)] h-[calc(100vh-64px)] absolute bottom-0 left-10"
	>
		<div class="container__left w-1/6 min-w-[0%] text-center overflow-hidden bg-slate-900" />
		<div class="resizer w-2 bg-slate-900 hover:cursor-col-resize" data-direction="horizontal" />
		<div class="container__right grow min-w-0 overflow-hidden">
			<div class="container__right text-center min-h-[0%] h-[70%] bg-slate-1000 overflow-hidden" />
			<div class="resizer w-full h-2 bg-slate-1000 hover:cursor-row-resize" data-direction="vertical" />
			<div class="h-full grow min-h-0 overflow-hidden border-t-[1px] border-gray-400 bg-gray-1000"></div>
		</div>
	</div>
</div>
