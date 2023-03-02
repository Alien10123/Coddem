import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	let exists = false;
	let layout = params.id;
	if (layout === "basicwithtabs" || layout === "basic") {
		exists = true;
	}
	if (exists) {
		return {
			layout: layout
		};
	}
	throw error(404, 'Not found');
}) satisfies PageLoad;