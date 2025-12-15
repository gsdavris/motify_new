# Motify Website

Marketing site for Motify built with Next.js and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Environment variables live in `.env.local` (see `.env.example` when available). Never commit secrets.

## Production deployment

The production server tracks this repository in `/root/motify_new` and serves it through PM2. To deploy a new version:

1. Push your changes to `main` on GitHub.
2. SSH into the server and run `~/deploy_motify.sh [branch]` (defaults to `main`). The script runs `git pull`, `npm ci`, `npm run build`, and finally `pm2 reload ecosystem.config.js --only motify_new`.

Automating this can be done via a GitHub Action or post-receive hook that executes the same script.
