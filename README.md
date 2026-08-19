# Imboni waitlist

Production-ready waitlist landing page for Imboni, an AI-powered event photo discovery product.

## Local setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and add your Supabase credentials.
3. Run `supabase/schema.sql` in the Supabase SQL editor.
4. Start the app with `npm run dev`.

The service role key is used only in the server-side API route and is never exposed to the browser. If Supabase is not configured, the form displays a friendly temporary-unavailability message.
