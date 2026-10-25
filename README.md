# Website

Checkout our website: https://copiersys.com

A static business website built with React + [Vite](https://vite.dev) and deployed on GitHub Pages.

All commands run from the `react-website/` folder:

- Run locally: `npm start` (opens http://localhost:3000)
- Build: `npm run build` (outputs to `build/`)
- Preview the production build: `npm run preview`
- Deploy to GitHub Pages: `npm run deploy`

Page titles, descriptions, business info, and FAQ live in `src/routes/seo.json`. After each build, `scripts/prerender-routes.js` uses it to write the per-page HTML files, structured data, and `llms.txt`.

## Testing the Website

There are no automated tests, so check the site by hand before each deploy. Run these from `react-website/`.

### 1. Quick check while editing

```bash
npm start
```

Opens http://localhost:3000 and reloads as you save files. Good for checking changes as you make them.

### 2. Production check before deploying (most important)

```bash
npm run build
npm run preview
```

Open http://localhost:4173. This serves the exact files `npm run deploy` will upload. Check:

- [ ] Home, Products, and Contact pages load from the header links
- [ ] Refreshing on `/products` and `/contact` reloads the same page
- [ ] Images load, and the product search and product popups work
- [ ] Browser back/forward buttons move between pages
- [ ] Mobile layout looks right (F12, then Ctrl+Shift+M for device mode)
- [ ] No red errors in the console (F12 → Console)
- [ ] Contact form submits (this sends a real Formspree email, so mark it as a test)

### 3. Live check after deploying

GitHub Pages takes 1–5 minutes to update. Hard-refresh with Ctrl+Shift+R so you don't see a cached copy, then:

- [ ] Repeat the checklist above on https://copiersys.com
- [ ] Open https://copiersys.com/products and https://copiersys.com/contact directly in a new tab
- [ ] `curl -I https://copiersys.com/products` shows `HTTP/2 200` (a `404` means Google can't index the page)
- [ ] https://copiersys.com/llms.txt and https://copiersys.com/sitemap.xml load

### SEO checks (after changing titles, descriptions, or business info)

- [Rich Results Test](https://search.google.com/test/rich-results): paste a page URL and confirm `LocalBusiness` (and `FAQPage` on the home page) are detected with no errors
- [Google Search Console](https://search.google.com/search-console): use URL Inspection → "Request indexing" on changed pages
- To see what AI crawlers see (no JavaScript): `curl https://copiersys.com/products` should show the full copier list in the HTML

### Security check

```bash
npm audit
```

Should report `found 0 vulnerabilities`. GitHub's Dependabot alerts update after you push to `main`.

## Git Workflow

Save locally and pull from remote:

```bash
# Stash unfinished work
git stash
# or
git stash save "feature X"

# Pull latest
git pull origin main

# Restore stashed work
git stash apply
```

Feature branch workflow:

```bash
git checkout main
git checkout -b feature/feature-name
# After feature is done
git checkout main
git merge feature/feature-name
git branch -d feature/feature-name
```

Reference: [Beginner's Guide to Proper Git Workflow](https://medium.com/@anjulapaulus_84798/beginners-guide-to-proper-git-workflow-35a2d967734e)

# References

- [How to deploy React App to GitHub Pages](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)
- [Vite static deploy docs](https://vite.dev/guide/static-deploy)
- [React-app-deploy official github doc](https://github.com/gitname/react-gh-pages)
- [Properly name repo to host on Github Pages](https://kinsta.com/blog/github-pages/)
- [Animated Logo Preloader](https://ihatetomatoes.net/create-css3-spinning-preloader/)

