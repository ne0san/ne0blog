import rss, {pagesGlobToRssItems} from '@astrojs/rss';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  return rss({
    title: 'ねおぶろぐ',
    description: 'テックも雑談もごちゃ混ぜのブログ',
    site: context.site!,
    items: await pagesGlobToRssItems(
      import.meta.glob('./posts/*.{md,mdx}'),
    ),
    stylesheet: './rss/styles.xsl',
    customData: `<language>ja-jp</language>`,
  });
}