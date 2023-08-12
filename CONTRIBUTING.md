# Contributing

First off, thanks for taking the time to contribute!

All types of contributions are encouraged and valued.

## Table of Contents

- [I Want To Contribute](#i-want-to-contribute)
- [How We Code](#how-we-code)

## I Want To Contribute

### Must Haves

- NodeJS
- npm
- Typescript
  - tsconfig.json
- ESLint
- Prettier
- Tailwind
  - tailwind.config.js

### Helpful

#### Plugins

- Tailwind
- Prettier

### Long Term Nice To Haves

- Pre Commit
  - Requires the brew package `pre-commit`
  - References a repo that seems to have the "default" rules
  - https://pre-commit.com/
- Semantic Release
  - .releaserc
  - Uses npm semantic-release
  - This is used in tandem with the git conventional commits plugin to figure out how to version the release given what was added/removed
  - https://semantic-release.gitbook.io/semantic-release/usage/installation

### Unknowns

- postcss.config.js
  - https://postcss.org/
  - https://nextjs.org/docs/pages/building-your-application/styling
- next-env.d.ts
  - https://nextjs.org/docs/basic-features/typescript
- next.config.mjs
  - https://nextjs.org/docs/pages/api-reference/next-config-js
- env.mjs
  - @t3-oss/env-nextjs
  - createEnv
- instrumentation.ts
  - @vercel/otel
  - https://nextjs.org/docs/pages/building-your-application/optimizing/open-telemetry
- reset.d.ts
- renovate.json
- playwright.config.ts
- Storybook
- Jest?
  - jest.config.ts

### Not Needed

- .all-contributorsrc
  - npm dev package that puts information into this file

## How We Code

### Project Conventions

- Will use a `src` folder
- `src` will have:
  - common
  - features
  - utils
  - pages
    - api

## Deployment

### GitHub Actions (GHA)
