import type { APIRoute } from "astro";
import rss, { pagesGlobToRssItems } from '@astrojs/rss';


export const GET :APIRoute = async (context) => {
  return rss({
    title: 'Astro学習者 | ブログ',
    description: 'Astroを学ぶ旅',
    site: context.site!,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>ja-jp</language>`,
  });
}