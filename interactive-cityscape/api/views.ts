import { Redis } from '@upstash/redis';

export const config = {
  runtime: 'edge',
};

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export default async function handler(req: Request) {
  const url = new URL(req.url);
  const isBadge = url.searchParams.has('badge');
  const eventName = url.searchParams.get('event');

  if (eventName) {
    await redis.hincrby('events', eventName, 1);
  }

  let pageViews = 0;
  if (req.method === 'GET') {
    pageViews = await redis.incr('page_views');
  } else {
    pageViews = Number(await redis.get('page_views') || '0');
  }

  if (req.method === 'POST') {
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
}
