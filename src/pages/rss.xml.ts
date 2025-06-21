import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
	return rss({
		title: "ねおさん's ろぐ",
		description: 'テックも雑談もごちゃ混ぜの個人ブログ',
		site: context.site!,
		items: await pagesGlobToRssItems(import.meta.glob('./posts/*.{md,mdx}')),
		stylesheet: './rss/styles.xsl',
		customData: `<language>ja-jp</language>`
	});
};
