
# Helidon Documentation Project

This project contains a [VitePress](https://vitepress.dev/) project for Helidon Documentation.

## To build docs

1. Install VitePress: `npm add -D vitepress@next`
   * See [VitePress Getting Started](https://vitepress.dev/guide/getting-started)
2. Build the site: `npm run docs:build`
3. Run dev HTTP server: `npm run docs:dev` (this will rebuild site as you make changes)

## Key files

* `docs/src` : Helidon documentation source as markdown files
* `docs/src/index.md` : Site's landing page
* `docs/src/.vitepress/config.mts` : VitePress configuration
* `docs/src/.vitepress/dist` : the generated static site (not committed into git)

