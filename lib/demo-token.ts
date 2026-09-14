import { createHmac, timingSafeEqual, randomBytes } from "crypto";

// Stateless email-verification tokens for demo-site gates: no database, no
// server-side session store — just an HMAC-signed payload the visitor's own
// email client hands back to us when they click the link. Anyone can read
// the payload (it's base64, not encrypted) but nobody can forge or alter it
// without the secret, and that's all we need: proof they control the inbox.
//
// Fails closed if DEMO_LINK_SECRET isn't set, rather than falling back to
// any fixed value — this repo is public, so a fallback secret in source
// would let anyone forge a valid unlock link for any email address.

let ephemeralSecret: string | null = null;

function getSecret(): string {
  const secret = process.env.DEMO_LINK_SECRET;
  if (secret) return secret;

  if (!ephemeralSecret) {
    console.warn(
      "DEMO_LINK_SECRET is not set — using a random secret generated for this process only. " +
        "Tokens will stop verifying on the next deploy or cold start. Set DEMO_LINK_SECRET in production.",
    );
    ephemeralSecret = randomBytes(32).toString("hex");
  }
  return ephemeralSecret;
}

function sign(payload: string): string {
  return createHmac("sha256", getSecret()).update(payload).digest("base64url");
}

export function createDemoToken(email: string, ttlMs = 30 * 60_000): string {
  const payload = Buffer.from(JSON.stringify({ email, exp: Date.now() + ttlMs })).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export function verifyDemoToken(token: string): { email: string } | null {
  const [payload, signature] = String(token ?? "").split(".");
  if (!payload || !signature) return null;

  const expected = sign(payload);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

  try {
    const { email, exp } = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (typeof email !== "string" || typeof exp !== "number") return null;
    if (Date.now() > exp) return null;
    return { email };
  } catch {
    return null;
  }
}
