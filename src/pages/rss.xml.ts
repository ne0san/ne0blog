import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { AppConfig } from '@/utils/AppConfig';

export const GET: APIRoute = async (context) => {
	return rss({
		title: AppConfig.title,
		description: AppConfig.description,
		site: context.site!,
		items: await pagesGlobToRssItems(import.meta.glob('./posts/*.{md,mdx}')),
		stylesheet: './rss/styles.xsl',
		customData: `<language>ja-jp</language>`
	});
};
