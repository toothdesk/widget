# DentalBot widget

Embeddable FAQ + lead-capture chat widget. One JS file, zero dependencies, styled in shadow DOM so it never clashes with the clinic's site.

## Files
- `dental-bot.js` — widget source with `/*__CLINIC_CONFIG__*/` marker
- `build.js` — inlines a clinic's config: `node build.js <clinic>-config.json > bot.js`
- `demo.html` — test page loading a built per-clinic file

## Per-clinic deploy (GitHub Pages)
1. `node build.js smith-config.json > bot.js`
2. Push `bot.js` to `<pages-host>/<clinic-slug>/`
3. Clinic pastes one line into their site:
   `<script src="https://<pages-host>/<clinic-slug>/bot.js"></script>`

## Lead delivery (zero cost)
Captured leads POST via the free FormSubmit AJAX relay to the clinic's email
(`email` in config). First submission triggers a one-time activation email the
clinic must click. No accounts, no backend, no cost.

## Notes
- Medical disclaimer + emergency redirect are baked into the widget footer and brain.
- Config fields: clinicName, tagline, phone, email, address, hours, color, services[].
- `window.__DENTAL_BOT__` can also override config at runtime (used for local testing).
- Brain: word-boundary keyword intents (greetings, hours, location, contact, services,
  pricing, booking, emergency, new patients, staff, thanks) with plural handling and
  priority ordering (emergency/pricing/booking outrank generic matches). Greetings like
  "hi" never hit the fallback; "hi, what are your hours?" answers hours.
- UX: quick-reply chips (Hours/Services/Pricing/Call me back), typing indicator,
  proactive teaser bubble + pulsing button after 6s idle, name capture ("my name is…"),
  yes/no follow-ups after callback offers, lead capture (name → phone → emailed to clinic).
