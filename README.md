# Dora AI — Personal Website

The source for [doraaiovo.github.io](https://doraaiovo.github.io): a personal
portfolio about curiosity, thoughtful AI, product design, and the things I am
building along the way.

## Featured

- A personal introduction and current interests
- FinSight, an evidence-first stock research assistant
- RoboLabs, a robotics project with a case study in progress
- Responsive layouts, accessible navigation, and reduced-motion support
- Custom Open Graph artwork for link previews

## Local development

Requires Node.js 22+ and pnpm.

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production builds

```bash
pnpm run build
pnpm run build:pages
```

`build` validates the Sites-compatible output. `build:pages` creates the static
site in `out/` for GitHub Pages.

## Publishing

The workflow in `.github/workflows/deploy-pages.yml` publishes the static site
when changes reach `main`. In the GitHub repository settings, Pages should use
**GitHub Actions** as its source.
