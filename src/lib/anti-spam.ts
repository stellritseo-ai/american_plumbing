/**
 * Anti-Spam & Bot Protection Engine for American Commercial Plumbing website
 *
 * Provides layered defense against automated form bots, web scrapers,
 * spam links, and duplicate email submissions:
 * 1. Honeypot trap verification (hidden fields bots fill)
 * 2. Time-to-submit verification (submitting in < 2 seconds is superhuman)
 * 3. 60-second in-memory deduplication (prevents 2 identical emails on Zoho)
 * 4. IP-based sliding window rate limiter
 * 5. Spam heuristic scoring (Cyrillic spam, crypto, casino, SEO backlinks, link floods)
 */

export interface AntiSpamOptions {
  hp_company?: string;
  hp_website?: string;
  hp_fax?: string;
  formStartTime?: number;
}

export interface AntiSpamResult {
  allowed: boolean;
  reason?: string;
  isDuplicate?: boolean;
}

// In-memory cache for recent submissions to deduplicate identical requests within 60s
const recentSubmissions = new Map<string, number>();

// In-memory sliding window rate limiter per IP (max 4 requests per 10 minutes)
const ipRateLimits = new Map<string, number[]>();

// Periodic cleanup every 5 minutes
const CLEANUP_INTERVAL = 5 * 60 * 1000;
let lastCleanup = Date.now();

function runCleanup() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;

  // Prune submissions older than 2 minutes
  for (const [key, timestamp] of recentSubmissions.entries()) {
    if (now - timestamp > 120 * 1000) {
      recentSubmissions.delete(key);
    }
  }

  // Prune IP rate limits older than 10 minutes
  for (const [ip, timestamps] of ipRateLimits.entries()) {
    const fresh = timestamps.filter((t) => now - t < 10 * 60 * 1000);
    if (fresh.length === 0) {
      ipRateLimits.delete(ip);
    } else {
      ipRateLimits.set(ip, fresh);
    }
  }
}

// Known spam keywords frequently submitted by automated marketing bots
const SPAM_KEYWORDS = [
  "crypto",
  "cryptocurrency",
  "bitcoin",
  "usdt",
  "binance",
  "ethereum",
  "forex trading",
  "casino",
  "gambling",
  "online poker",
  "betting site",
  "viagra",
  "cialis",
  "seo ranking",
  "backlinks",
  "da90",
  "dr rating",
  "domain authority",
  "guest posting",
  "guest post",
  "index your website",
  "first page of google",
  "passive income",
  "investment proposal",
  "business loan offer",
  "t.me/",
  "telegram.me",
  "wa.me/",
  "whatsapp.com/channel",
];

// Spam email domains commonly used by bulk spam bots
const SPAM_EMAIL_DOMAINS = [
  "mail.ru",
  "bk.ru",
  "inbox.ru",
  "list.ru",
  "yandex.ru",
  "ya.ru",
];

function normalize(str?: string): string {
  return (str || "").toLowerCase().trim().replace(/\s+/g, " ");
}

/**
 * Validates a lead submission against multiple bot detection layers
 */
export function validateLeadSubmission(
  data: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    formTitle?: string;
    address?: string;
    hp_company?: string;
    hp_website?: string;
    hp_fax?: string;
    formStartTime?: number;
  },
  clientIp?: string
): AntiSpamResult {
  runCleanup();

  const now = Date.now();
  const name = data.name || "";
  const email = data.email || "";
  const phone = data.phone || "";
  const message = data.message || "";
  const fullText = `${name} ${message}`.toLowerCase();

  // ── LAYER 1: HONEYPOT TRAP ──
  // Bots auto-fill all visible and hidden form fields they find in the DOM.
  // Real humans will never interact with honeypot fields.
  if (data.hp_company?.trim() || data.hp_website?.trim() || data.hp_fax?.trim()) {
    console.warn("[AntiSpam] Bot blocked: Honeypot field filled.");
    return { allowed: false, reason: "honeypot_triggered" };
  }

  // ── LAYER 2: SPEED TRAP (TIME-TO-SUBMIT) ──
  // A human typing contact info takes at least 2.5-3 seconds.
  // Headless bot scripts submit within milliseconds.
  if (data.formStartTime && typeof data.formStartTime === "number") {
    const elapsed = now - data.formStartTime;
    if (elapsed < 2000) {
      console.warn(`[AntiSpam] Bot blocked: Form submitted too fast (${elapsed}ms).`);
      return { allowed: false, reason: "submitted_too_fast" };
    }
    // Invalid timestamp in future
    if (data.formStartTime > now + 10000) {
      console.warn("[AntiSpam] Bot blocked: Timestamp in future.");
      return { allowed: false, reason: "invalid_future_timestamp" };
    }
  }

  // ── LAYER 3: DEDUPLICATION (PREVENTS THE "2 EMAILS" ISSUE) ──
  // If the same name, contact info, and message is submitted within 60 seconds,
  // we consider it a duplicate (e.g., user double-click, browser retry, or bot double-post).
  const submissionKey = `${normalize(name)}|${normalize(email || phone)}|${normalize(message).slice(0, 80)}`;
  const previousSubmissionTime = recentSubmissions.get(submissionKey);

  if (previousSubmissionTime && now - previousSubmissionTime < 60 * 1000) {
    console.warn(`[AntiSpam] Duplicate submission detected within 60s for: "${submissionKey}". Suppressing duplicate email.`);
    return { allowed: false, isDuplicate: true, reason: "duplicate_submission_within_60s" };
  }

  // ── LAYER 4: RATE LIMITING (PER IP) ──
  if (clientIp && clientIp !== "unknown" && clientIp !== "127.0.0.1") {
    const timestamps = ipRateLimits.get(clientIp) || [];
    const recentFromIp = timestamps.filter((t) => now - t < 10 * 60 * 1000);
    if (recentFromIp.length >= 4) {
      console.warn(`[AntiSpam] Rate limit exceeded for IP: ${clientIp} (${recentFromIp.length} in 10m).`);
      return { allowed: false, reason: "rate_limit_exceeded" };
    }
    recentFromIp.push(now);
    ipRateLimits.set(clientIp, recentFromIp);
  }

  // ── LAYER 5: SPAM CONTENT HEURISTICS ──
  // A) Cyrillic script: Tucson, Arizona local plumbing site does not expect Cyrillic spam
  const cyrillicRegex = /[\u0400-\u04FF]/;
  if (cyrillicRegex.test(name) || cyrillicRegex.test(message) || cyrillicRegex.test(email)) {
    console.warn("[AntiSpam] Spam blocked: Cyrillic characters detected.");
    return { allowed: false, reason: "cyrillic_content" };
  }

  // B) Multiple promotional URLs (plumbing customers rarely include 2+ web links in problem description)
  const urlMatches = fullText.match(/https?:\/\/|www\.|\[url=/g);
  if (urlMatches && urlMatches.length >= 2) {
    console.warn(`[AntiSpam] Spam blocked: Excessive URLs detected (${urlMatches.length}).`);
    return { allowed: false, reason: "excessive_links" };
  }

  // C) Name field contains URL (classic bot giveaway)
  if (name.includes("http://") || name.includes("https://") || name.includes("www.")) {
    console.warn("[AntiSpam] Spam blocked: URL in name field.");
    return { allowed: false, reason: "url_in_name" };
  }

  // D) Known spam keywords
  for (const keyword of SPAM_KEYWORDS) {
    if (fullText.includes(keyword)) {
      console.warn(`[AntiSpam] Spam blocked: Contains spam keyword "${keyword}".`);
      return { allowed: false, reason: `spam_keyword_${keyword}` };
    }
  }

  // E) Known spam email domain check
  if (email) {
    const domain = email.split("@")[1]?.toLowerCase();
    if (domain && SPAM_EMAIL_DOMAINS.includes(domain)) {
      console.warn(`[AntiSpam] Spam blocked: High-risk spam domain "@${domain}".`);
      return { allowed: false, reason: "spam_email_domain" };
    }
  }

  // F) Basic sanity check: both email AND phone cannot be blank for a valid lead
  if (!email.trim() && !phone.trim()) {
    console.warn("[AntiSpam] Form rejected: Missing both phone and email.");
    return { allowed: false, reason: "missing_contact_info" };
  }

  // Record this valid submission in deduplication cache
  recentSubmissions.set(submissionKey, now);

  return { allowed: true };
}
