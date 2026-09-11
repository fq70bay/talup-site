# TalUp Project Portfolio

Minimal, premium one-page portfolio site for TALUP Project.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Required brand assets

Place the original TALUP logo here:

```text
public/talup-logo.png
```

Do not redraw or change the logo proportions.

## Contacts

Change WhatsApp phone, Instagram, and email in:

```text
config/siteConfig.ts
```

The WhatsApp links are generated automatically from `phone` and the current language message.

## Metall Invest preview

Replace the preview image here:

```text
public/projects/metall-invest-full.webp
```

Recommended screenshot size: about `1440px` wide, full-page desktop screenshot of:

```text
https://metall-invest-zeta.vercel.app
```

If the file is missing, the site shows a minimal fallback preview.

## Add a new project

Add a new object to the `projects` array:

```text
data/projects.ts
```

Project descriptions support both `kz` and `ru`.

## Build

```bash
npm run build
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Build TalUp Project portfolio"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

## Deploy to Vercel

1. Create a new Vercel project.
2. Import the GitHub repository.
3. Keep the default Next.js settings.
4. Deploy.

## Custom domain

In Vercel:

1. Open the project settings.
2. Go to Domains.
3. Add your domain.
4. Update DNS records as Vercel shows.
5. Wait for verification.
