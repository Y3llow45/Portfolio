import { Redis } from '@upstash/redis';

export const config = {
  runtime: 'edge',
};

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export default async function handler(req: Request) {
    try{
    const url = new URL(req.url);
    const method = req.method;
    const isBadge = url.searchParams.has('badge');
    const shouldCountView = url.searchParams.get('count') === '1';
    const eventName = url.searchParams.get('event');

    const allowedEvents = new Set([
      'copy_email',
      'click_project_github',
      'click_award_link',
      'views'
    ]);

    if (eventName && allowedEvents.has(eventName)) {
      await redis.hincrby('events', eventName, 1);
    }

    let pageViews = 0;

    if (method === 'GET' && shouldCountView) {
      pageViews = await redis.incr('page_views');
    } else {
      pageViews = Number(await redis.get('page_views') || '0');
    }

    if (method === 'POST') {
      return new Response(null, { status: 204 });
    }

    const eventsHash = await redis.hgetall('events');
    const events: Record<string, string> = {};

    for (const [key, value] of Object.entries(eventsHash || {})) {
      events[key] = Number(value).toLocaleString();
    }

    if (isBadge) {
      return Response.json({
        schemaVersion: 1,
        label: 'page views',
        message: pageViews.toLocaleString(),
        color: 'brightgreen',
        cacheSeconds: 300,
      });
    }

    return Response.json({
      views: pageViews.toLocaleString(),
      ...events,
    });
    } catch (err) {
        return new Response(
            JSON.stringify({ error: 'internal_error' }),
            { status: 500 }
        );
    }
}
