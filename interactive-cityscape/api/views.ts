import { Redis } from '@upstash/redis';

export const config = {
  runtime: 'edge',
};

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export default async function handler(req: Request) {
  if (req.method !== 'GET') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const url = new URL(req.url);
  const isBadge = url.searchParams.has('badge');
  const hasEvent = url.searchParams.has('event');
  
  if (hasEvent) {
    const eventName = url.searchParams.get('event');
    if (eventName) {
      await redis.incr(`event:${eventName}`);
    }
  }
  
  const count = await redis.incr('page_views');

  if (isBadge) {
    
    return Response.json({
      schemaVersion: 1,
      label: 'page views',
      message: count.toLocaleString(),
      color: 'brightgreen',
      cacheSeconds: 300,  
    });
  }

  return Response.json({
    views: count.toLocaleString(),
  });
}
