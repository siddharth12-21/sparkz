import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');

  try {
    const count = await kv.incr('sparkz:visits');
    res.json({ count });
  } catch {
    // KV not configured — return null so frontend hides the badge
    res.json({ count: null });
  }
}
