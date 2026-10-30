# Goti Adarian

Website for the Goti Adarian fire temple in Surat, India — [gotiadarian.com](https://gotiadarian.com)

## About

Goti Adarian is a Parsi-Zoroastrian fire temple serving the Zoroastrian community in Surat.
This site is a simple web presence for the temple — information about the agiary, the community it serves, and how to reach it.
It is a community project, maintained by volunteers.

## Tech

Next.js (static export) + Tailwind CSS, in `web/`. Hosted on Cloudflare Pages (project `gotiadarian`): every push to `main` builds `web/` and publishes `web/out`.

## Running locally

```bash
git clone https://github.com/Zahanturel/gotiadarian.git
cd gotiadarian/web
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` writes the static site to `web/out`.

To re-optimise photos after adding new ones, run `node scripts/optimize-images.mjs` from `web/`.

## Contributing

Contributions are welcome — corrections, translations, photos, or content additions.

Open an issue or submit a pull request. If you're from the community and not comfortable with GitHub, reach out directly and we'll handle it.


Please keep changes respectful of the temple and the community it represents.
