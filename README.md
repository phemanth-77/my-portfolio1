# Hemanth Vidya Deep — Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Local development

Requires Node.js 20.19+ and npm.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deployment

Deploy with the [Vercel CLI](https://vercel.com/docs/cli):

```bash
npx vercel
```

For production, run:

```bash
npx vercel --prod
```

The root `vercel.json` configures Vercel to build the Vite app and serve the `dist` directory. You can also import this GitHub repository in the Vercel dashboard; pushes to the configured production branch will then deploy automatically.
