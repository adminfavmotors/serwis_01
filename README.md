# MotoFix Serwis

Portfolio project for a fictional Polish auto repair shop built with Next.js 14, TypeScript, Tailwind CSS v3, shadcn-style UI primitives, Framer Motion, React Hook Form and Zod.

## Development

```bash
npm install
npm run dev
```

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS v3
- shadcn-style component setup
- Framer Motion
- React Hook Form + Zod

## Environment variables

Create `.env.local` based on `.env.example` to enable Telegram notifications for the contact form.

## Deployment

The project is intended for Vercel deployment without additional platform configuration.

## Google Search Console

After the first production deployment, the client should:

1. Add the property `https://serwis01.vercel.app` in Google Search Console.
2. Open the `Sitemaps` section and submit:
   `sitemap.xml`
