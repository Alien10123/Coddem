import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
 
export const load = (({ params }) => {
  console.log(params, 1)
  if (params.id === 'basic') {
    return {
        layout: "basic"
    };
  }
 
  throw error(404, 'Not found');
}) satisfies PageLoad;