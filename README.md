# a11ydetective

Hey howdy hey, dear reader. Welcome to a blog all about Web Accessibility. Take note that the word accessibility is often shortened to a11y. A11y is a [numeronym](https://www.a11yproject.com/posts/a11y-and-other-numeronyms/).

What is web a11y you might ask?

Web a11y is all about making sites and applications usable to as many people as possible no matter how they are differently abled. This noble pursuit involves automated testing, manual testing, and lots of collaboration!

In this blog you will find helpful tips, tricks, gotchas, and other examples of how to make a website or web application accessible for all!

## A note concerning `package.json` and `package-lock.json`

Please note that *you must push your `package.json` AND `package-lock.json` files*. If you do not, the deploy will fail.

## A note on Node and 11ty

Please note that [11ty](https://www.11ty.dev/#quick-start) requires [Node version 18 or newer](https://nodejs.org/en/about/previous-releases).

## Coming from `npm` world?

Check out this [helpful cheatsheet](https://devhints.io/yarn) showing `npm` commands in `yarn` syntax.

## Tools used

- git
- github
- github pages
- nvm
- Yarn
- 11ty
- HTML
- Nunjucks
- CSS
- JS
- Code bundler

## File structure

```md
/project root/ -> /a11ydetective/
|
|-- /build/ - Build scripts
|  |-- gulpfile.js - The tasks for the main build process
|  |-- util.js - Utilities used by the tasks
|
|-- /src/ - Your code
|  |-- `index.md`
|  |-- `style.css` - The raw CSS input, or pre-processor equivalent
|  |-- `script.js` - The raw JavaScript input, or pre-processor equivalent
|
|-- /dist/ - The compiled output after running `yarn run build`
|  |-- `index.html`
|  |-- `script.js`
|  |-- `style.css`
|
|-- `.nojekyll` - Tells Github pages to NOT use Jekyll since this project will be using 11ty instead
|-- /.github/workflows/`11ty_build.yml` - Github Pages deploy yaml file
|-- `.eleventy.js` - 11ty config file
|-- `.nvmrc` - Contains node version for the project that will be used when you run `nvm use`
|-- `.gitignore` - Used to hide things from git so they are not commited to the remote repo
|-- `package.json` - Contains information about the project such as node dependencies, build scripts, etc...
|-- `package-lock.json` - Lockfile for package.json
|-- `README.md` - Documentation for how to work within the repo
```
