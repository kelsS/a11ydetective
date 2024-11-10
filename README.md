# a11ydetective

Hey howdy hey, dear reader. Welcome to a blog all about Web Accessibility. Take note that the word accessibility is often shortened to a11y. A11y is a [numeronym](https://www.a11yproject.com/posts/a11y-and-other-numeronyms/).

What is web a11y you might ask?

Web a11y is all about making sites and applications usable to as many people as possible no matter how they are differently abled. This noble pursuit involves automated testing, manual testing, and lots of collaboration!

In this blog you will find helpful tips, tricks, gotchas, and other examples of how to make a website or web application accessible for all!

## A note concerning `package.json` and `yarn.lock`

Please note that *you must push your `package.json` AND `yarn.lock` files*. If you do not, the deploy will fail.

## A note on Node and 11ty

Please note that [11ty](https://www.11ty.dev/#quick-start) requires [Node version 18 or newer](https://nodejs.org/en/about/previous-releases).

## Coming from `npm` world?

Check out this [helpful cheatsheet](https://devhints.io/yarn) showing `npm` commands and their `yarn` equivalents.

## Tools used

- git
- github
- github pages
- nvm
- Yarn
- [11ty](https://11ty.dev/docs/)
- HTML
- Nunjucks
- Markdown
- CSS
- JS
- Code bundler

## File structure

```md
/project root/ -> /a11ydetective/
|
|-- /.github/ - Stores the `11ty_build.yml`
|-- /dist/ - The compiled production ready output after running `yarn run build`
|-- /node_modules/ - The installed project dependencies after running `yarn install`
|-- /src/ - The source code
|-- /src/assets/ - project assets such as images
|-- /src/blog/ - blog posts written as `md` files
|-- /src/includes/ - project templates
|-- `app.js` - The raw JavaScript input, or pre-processor equivalent
|-- `blog.njk` - The blog page template
|-- `index.njk` - The home page template
|-- `robots.txt` - The file disallowing scrapping from AI scrapers
|-- `styles.css` - The raw CSS input, or pre-processor equivalent
|-- `.eleventy.js` - 11ty config file
|-- `.gitignore` - Used to hide things from git so they are not commited to the remote repo
|-- `.nojekyll` - Tells Github pages NOT to use Jekyll since this project will be using 11ty instead
|-- `.nvmrc` - Contains node version for the project that will be used when you run `nvm use`
|-- `DESIGN-PATTERNS.md` - Documentation notes on programming design patterns
|-- `package.json` - Contains information about the project such as node dependencies, build scripts, etc...
|-- `README.md` - Documentation for how to work within the repo
|-- `yarn.lock` - Lockfile for package.json
```

## Commands

- `nvm use`: switches the node version to whatever is in the `.nvmrc`
- `yarn install`: installs project dependencies
- `yarn run build`: destroys dist and rebuild dist
- `yarn start`: destroys dist and starts 11ty and the local server
- `yarn run clean`: destroys dist

## Project setup steps

1. Install the repo from github
2. Navigate to the git repository you just installed
3. Run the following command in your terminal of choice `yarn install`
4. Run the following command in your terminal of choice `yarn start`

- You can delete `dist` and rebiuld with the following command `yarn run build`
- You can delete `dist` only with `yarn run clean`

## Local development urls

- root: `http://localhost:8080/`
- blog: `http://localhost:8080/blog/`

## Live site urls

- root: `https://a11ydetective.com`
- blog: `https://a11ydetective.com/blog/`
