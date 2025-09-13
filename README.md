This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

Follow these steps to deploy to Vercel and configure your custom domain onlyfansofplants.com.

### 1) Deploy with Vercel CLI
```bash
# install CLI and login
npm i -g vercel
vercel login

# from the project root, link or create the Vercel project
vercel

# deploy to production
vercel --prod
```

### 2) Add the domain to the project
```bash
# add apex and www domains to the Vercel project
vercel domains add onlyfansofplants.com
vercel domains add www.onlyfansofplants.com
```

### 3) Configure DNS at your domain registrar
Create these records at your DNS provider (registrar):
- A record for root ("@"): points to 76.76.21.21
- CNAME record for host "www": points to cname.vercel-dns.com.

Example using Vercel DNS (only if your domain uses Vercel nameservers):
```bash
vercel dns add onlyfansofplants.com @ A 76.76.21.21
vercel dns add onlyfansofplants.com www CNAME cname.vercel-dns.com
```

### 4) SSL
No extra action needed. Vercel automatically provisions and renews SSL/TLS (Let’s Encrypt) after DNS is verified.

### 5) Redirect www to root
A redirect rule is included in vercel.json so that https://www.onlyfansofplants.com → https://onlyfansofplants.com.

### 6) Environment variables (if needed)
If your app requires environment variables, add them in the Vercel dashboard (Project Settings → Environment Variables) or via CLI before deploying.

After DNS propagates, your site will be available at https://onlyfansofplants.com/ and https://www.onlyfansofplants.com/ (with www redirecting to root).
