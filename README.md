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
