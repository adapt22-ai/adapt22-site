// Support direct Upstash credentials and Vercel Marketplace's native variable names.
export function contactRateConfig(env) {
  if (env.UPSTASH_REDIS_REST_URL && env.UPSTASH_REDIS_REST_TOKEN)
    return {
      url: env.UPSTASH_REDIS_REST_URL,
      token: env.UPSTASH_REDIS_REST_TOKEN,
    };
  if (env.KV_REST_API_URL && env.KV_REST_API_TOKEN)
    return { url: env.KV_REST_API_URL, token: env.KV_REST_API_TOKEN };
  return null;
}
