import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: ['codemirror', '@codemirror/view', '@codemirror/commands', '@codemirror/lang-javascript', '@codemirror/theme-one-dark', 'thememirror']
	}
});
