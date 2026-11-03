# Dylan Van Parys — Portfolio

A personal portfolio built with Next.js, React, and plain CSS.

## Development

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

If file watching is restricted:

```bash
WATCHPACK_POLLING=true npm run dev -- --webpack
```

## Production

```bash
npm run build
npm start
```

## Editing

Content is written directly in JSX:

- `components/Profile.jsx`: introduction, photo, and contact links.
- `components/ExperienceSection.jsx`: the three experience entries.
- `components/Experience.jsx`: shared timeline card layout.
- `components/Technologies.jsx`: grouped technology tags.
- `components/Eductation.jsx`: university and degree.

`pages/index.js` assembles the page and contains its search and sharing metadata. All styling is in `styles/main.css`.

Replace `public/me.png` to update the portrait and `public/dylan_van_parys.pdf` to update the downloadable CV. Company images are in `public/images/`.

If the production domain changes, update `pages/index.js`, `public/robots.txt`, and `public/sitemap.xml`.
