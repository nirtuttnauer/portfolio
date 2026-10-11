# Nir Tuttnauer's portfolio

A personal portfolio and blog built with the Next.js Pages Router, React,
TypeScript, Tailwind CSS and Framer Motion. The home page assembles profile,
skills, experience, project, contact and resume sections. Blog content is local
Markdown stored in TypeScript, and Storybook provides component examples.

## Run locally

Use Node **22.23.3** (`.nvmrc`) and npm 10. Use npm and the committed
`package-lock.json` for reproducible installs; the older `yarn.lock` is retained
as historical project material and is not the lockfile used by CI.

```sh
git clone https://github.com/nirtuttnauer/portfolio.git
cd portfolio
# If you use nvm:
nvm use
npm ci
npm run dev
```

Open <http://localhost:3000>. No application environment variables or external
backend are required for the current local pages. Development and production
are separate commands:

```sh
npm run build
npm start
```

`npm start` serves the existing production build, so run `build` first.

## Edit content and components

| Location | What to edit |
| --- | --- |
| `src/pages/index.tsx` | Portfolio page and bundled local fonts |
| `src/pages/blog.tsx` | Blog listing |
| `src/pages/post/[slug].tsx` | Individual Markdown posts and missing-post state |
| `src/data/posts.ts` | Post slugs, titles, author/date fields and Markdown |
| `src/data/proj.ts`, `src/data/exp.ts` | Project and experience entries |
| `src/components/` | Profile, navigation, cards, skills, contact, resume and animation components |
| `src/stories/`, `.storybook/` | Component stories and Storybook configuration |
| `src/styles/globals.css`, `tailwind.config.ts` | Shared styling and theme |

Post slugs must be unique URL segments, such as `storybook-for-react`. The
regression tests check that the blog listing links to each configured post and
that slugs are unique and valid.

## Verify changes

```sh
npm run lint
npm test -- --ci --runInBand
npm run build
npm run build-storybook
```

The pull-request CI runs a locked install and all four commands, including an
actual production build. Jest uses Next.js's [built-in test configuration](https://nextjs.org/docs/pages/guides/testing/jest)
for TypeScript, imports and font mocks; the tests render the blog on the server
and do not need a browser. Lint and TypeScript build checks remain enabled.

For interactive component development:

```sh
npm run storybook
```

Open <http://localhost:6006>. `npm run build-storybook` creates the static
`storybook-static/` directory. Building it does not publish it.

## Current limits

- The contact form shows a local alert and resets its fields; it does not send
  email or save messages. Use the existing email/social links to contact Nir.
- Project cards include placeholder images and authored sample entries. Review
  their factual content before treating the site as an up-to-date resume.
- `src/api/hello.ts` is outside `src/pages/api/`, so it is not a Pages Router API
  endpoint. The current site has no implemented form-delivery backend.
- Unit checks do not cover every component or replace browser accessibility and
  interaction testing. Native deployment, Docker operation and delivery of
  contact messages are not certified by CI.
- The existing Docker files and CD workflow are retained; the npm workflow above
  is the verified local path. No deployment or publication is performed by the
  commands in this README.

No project license file is included; contact the author for reuse terms.
