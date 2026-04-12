export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const country = request.headers.get("CF-IPCountry") || "Unknown";
    const text = `New visit: ${country} ${url.pathname}`;

    ctx.waitUntil(
      fetch(`https://api.telegram.org/bot${env.TELEGRAM_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: env.TELEGRAM_CHAT_ID,
          text
        })
      }).catch(() => {})
    );

    return new Response("OK");
  }
}