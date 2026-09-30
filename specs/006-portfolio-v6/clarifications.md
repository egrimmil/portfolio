# Clarifications — 006

## CV

Elkin asked for a Drive CV link (2026-09-29). Signed share URL is in `data/contact.ts` (`cvUrl`).

## Site URL

Do not invent a production domain. Use `NEXT_PUBLIC_SITE_URL`, then `https://${VERCEL_URL}`, then `http://localhost:3000`.
