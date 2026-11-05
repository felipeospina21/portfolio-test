# portfolio-test

The first version of my personal portfolio: a one-page static site built with plain HTML, CSS and a little JavaScript. It has about, portfolio and skills sections and a responsive nav.

**Live:** https://felipeospina21.github.io/portfolio-test/

> This was an experiment and is **superseded by [`portfolio-astro`](https://github.com/felipeospina21/portfolio-astro)**. The repo is archived for reference.

## Contents

This repo only holds the built site, with no source build step:

```
dist/
├── index.html
└── assets/
    ├── styles.css
    ├── app.js
    └── images/
```

## Deploy

It's published to GitHub Pages from the `dist` folder:

```bash
npm install
npm run deploy   # gh-pages -d dist
```
