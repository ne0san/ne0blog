// これようわからんし汚いので書き換る

import type { OutlineItem } from '@/types/outline';

export function extractOutlineFromContent(content: string): OutlineItem[] {
	const headingRegex = /<h([1-6])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h[1-6]>/gi;
	const items: OutlineItem[] = [];
	let match;

	while ((match = headingRegex.exec(content))) {
		const level = parseInt(match[1]!);
		const id = match[2]!;
		const text = match[3]!.replace(/<[^>]*>/g, '').trim(); // HTMLタグを除去

		items.push({
			id,
			text,
			level,
			isActive: false
		});
	}

	return items;
}

export function generateOutlineFromHeadings(): OutlineItem[] {
	if (typeof document === 'undefined') return [];

	const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
	const items: OutlineItem[] = [];

	headings.forEach((heading) => {
		const level = parseInt(heading.tagName.substring(1));
		const id = heading.getAttribute('id') || '';
		const text = heading.textContent?.trim() || '';

		if (id && text) {
			items.push({
				id,
				text,
				level,
				isActive: false
			});
		}
	});

	return items;
}
