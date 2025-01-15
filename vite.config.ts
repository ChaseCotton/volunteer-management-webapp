import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
    plugins: [sveltekit()],
    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
            provider: 'istanbul', // Use the Istanbul coverage provider
            reporter: ['text', 'html'], // Text summary and HTML report
            all: true,
            include: ['src/**/*.{ts,svelte}'],
            exclude: ['node_modules', 'tests'],
        },
    },
});