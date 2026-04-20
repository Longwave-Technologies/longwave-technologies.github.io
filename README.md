# Website

Checkout our website: https://longwave-technologies.github.io

A static business website deployed on GitHub Pages.

Deploy to GitHub Pages: `npm run deploy`

Run locally: `npm start`

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
- [React-app deploy official doc](https://create-react-app.dev/docs/deployment/#github-pages)
- [React-app-deploy official github doc](https://github.com/gitname/react-gh-pages)
- [React dependencies error](https://www.freecodecamp.org/news/error-error-0308010c-digital-envelope-routines-unsupported-node-error-solved/)
- [Import Babel devDependencies error](https://stackoverflow.com/questions/76435306/babel-preset-react-app-is-importing-the-babel-plugin-proposal-private-propert)
- [Properly name repo to host on Github Pages](https://kinsta.com/blog/github-pages/)
- [Animated Logo Preloader](https://ihatetomatoes.net/create-css3-spinning-preloader/)

TODO:

1. These warnings come from inside Create React App (react-scripts) itself, not your code. CRA uses an older version of webpack-dev-server that calls deprecated middleware APIs (onAfterSetupMiddleware / onBeforeSetupMiddleware). The newer API is setupMiddlewares.

You can't fix it without ejecting from CRA or upgrading react-scripts. It's harmless — dev server works fine, and these warnings never appear in a production build.

The standard fix is to migrate from CRA to Vite, which is the modern replacement. That would eliminate the warning and also give you significantly faster dev startup and hot reload. Worth doing, but it's a bigger migration task.

2. Fix header spacing
