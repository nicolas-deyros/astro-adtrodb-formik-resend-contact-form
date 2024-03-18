# Astro DB contact form

Contact form build in Astro, connected to Astro DB and Astro Studio. Using React, Framer Motion, Tailwind, Formik, Yup, Resend and React Email

## Astro DB documentation

Find the Astro DB documentation https://docs.astro.build/en/guides/astro-db

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── db/
│   └── confi.ts
│   └── seed.ts
├── public/
├── src/
│   └── assets/
│   └── components/
│       └── emails/
│           └── SampleEmail.tsx
│       └── Form/
│           └── ContactUs.tsx
│   └── layouts/
│       └── Head.astro
│       └── index.astro
│   └── pages/
│       └── api/
│           └── sendEmail.json.ts
│       └── index.astro
│   └── schemas/
│       └── index.tsx
└── package.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                            |
| :------------------------ | :------------------------------------------------ |
| `npm install`             | Installs dependencies                             |
| `npm run dev`             | Starts local dev server                           |
| `npm run dev-db`          | Starts local dev server connected to astro studio |
| `npm run build`           | Build your production site to `./dist/`           |
| `npm run preview`         | Preview your build locally, before deploying      |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`  |
| `npm run astro -- --help` | Get help using the Astro CLI                      |

### Astro Studio

| Command                 | Action                          |
| :---------------------- | :------------------------------ |
| `npm run astro login`   | Login to Astro Studio           |
| `npm run astro link`    | Link project to Astro Studio DB |
| `npm run astro db push` | Push table schemas              |

## Dependencies

This are all the dependencies use for this project

```text
  "@astrojs/check": "^0.5.9",
  "@astrojs/db": "^0.8.6",
  "@astrojs/node": "^8.2.3",
  "@astrojs/partytown": "^2.0.4",
  "@astrojs/prefetch": "^0.4.1",
  "@astrojs/react": "^3.1.0",
  "@astrojs/tailwind": "^5.1.0",
  "@astrojs/vercel": "^7.3.6",
  "@react-email/components": "^0.0.15",
  "@react-email/render": "^0.0.12",
  "@types/react": "^18.2.66",
  "@types/react-dom": "^18.2.22",
  "astro": "^4.5.5",
  "astro-icon": "^1.1.0",
  "astro-seo": "^0.8.3",
  "formik": "^2.4.5",
  "framer-motion": "^11.0.14",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-email": "^2.1.0",
  "resend": "^3.2.0",
  "tailwindcss": "^3.4.1",
  "typescript": "^5.4.2",
  "yup": "^1.4.0"
```

## Environment Variables

You need to setup the following environment variables in order for resend to work **RESEND_API_KEY=**. If you would like to add Google Analytics you will also need to use **GA_GTAG=**
