module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');

  const url   = process.env.KV_REST_API_URL   || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) return res.json({ count: null });

  try {
    const r    = await fetch(`${url}/incr/sparkz:visits`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await r.json();
    res.json({ count: data.result ?? null });
  } catch {
    res.json({ count: null });
  }
}
