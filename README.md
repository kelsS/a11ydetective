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

- [git](https://git-scm.com/)
- [github](https://github.com/)
- [github pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [JAMstack (JavaScript, APIs, and Markup)](https://jamstack.org/what-is-jamstack/)
- [nvm](https://github.com/nvm-sh/nvm)
- [Yarn](https://yarnpkg.com/)
- [11ty](https://11ty.dev/docs/)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Markdown](https://www.markdownguide.org/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Web Componets](https://www.webcomponents.org/introduction)
- [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Typescript](https://www.typescriptlang.org/)
- [Cypress](https://www.cypress.io/)
- [Vitest](https://vitest.dev/)
- [ARIA](https://www.w3.org/WAI/standards-guidelines/aria/)
- [W3C Design Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)
- [aXe DevTools](https://www.deque.com/axe/devtools/)
- [NVDA](https://www.nvaccess.org/)
- [JAWS](https://www.freedomscientific.com/products/software/jaws/)
- [VoiceOver](https://www.apple.com/voiceover/info/guide/_1121.html#:~:text=VoiceOver%20is%20a%20built%2Din,that's%20in%20documents%20and%20windows.)
- [TalkBack](https://dequeuniversity.com/screenreaders/talkback-shortcuts)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Code bundler](https://dev.to/sayanide/the-what-why-and-how-of-javascript-bundlers-4po9)

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
|-- `yarn.lock` - Lockfile for package.json
|-- `README.md` - Documentation for how to work within the repo
```

## ES module example

/math.js/ (module)

```js
// Exporting a function
export function add(a, b) {
  return a + b;
}

// Exporting a variable
export const PI = 3.14159;
```

/app.js/ (main app js file)

```js
// Importing from the module
import { add, PI } from './math.js';

console.log(add(5, 3)); // 8
console.log(PI); // 3.14159
```

### In the HTML

```html
<script type="module" src="/path/to/app.js"></script>
```

## Getting started

1. Open your preferred terminal (all commands will be ran in the terminal)
2. Run`nvm use` to make sure you are using the correct node version for the project
3. Run `yarn` to install the node modules
4. Run `yarn start` to run the local developement setup
5. Navigate to the project url in a browser - http://localhost:8081/

## @todo

- [] Investigate setting up search with https://www.algolia.com/developers?utm_source=fontawesome&utm_medium=referral
  - [] Read [Adding Algolia Search to Eleventy and Netlify](https://www.raymondcamden.com/2020/06/24/adding-algolia-search-to-eleventy-and-netlify)
  - [] Read [Adding search to a JAMstack site](https://www.hawksworx.com/blog/adding-search-to-a-jamstack-site/)
- [] Clean up css and remove redundant code
- [] Setup domain name through porkbun and netlify
  - figure out if domain settings should go in github or in netlify or porkbun
- [] Create custom icons
- [] Convert components into vanilla web componets
  - In a blog post or posts show Lit/Vue/React/Vanilla JS versions of components
- [] Create "Course Cards" section which contains custom cards displaying courses I have completed
- [] Create a recommended course section - it will be whichever course I have completed most recently to date
  - also show course certificates
- [] Project - create a drag and drop component that is a11y, maybe a puzzle game?
- [] Create settings nav - dark/light theme toggle, reduce motion (turns off animations), reading mode, text highlight mode (as you move your cursor or finger or stylus across text highlight it)
- [] Create video component with transcript section
- [] Finish adding controls and form components
- [] Create a11y newsletter of recommended resources
  - [] Read [Adding an Email Subscription to Your Jamstack Site](https://www.raymondcamden.com/2021/05/01/adding-an-email-subscription-to-your-jamstack-site)
- [] Setup custom email hosting for ad email
- [] pre-fix components with "ad-"
- [] Convert to PWA (progressive web app) with offline mode
- [] Create tech stack page
- [] Create a11y and performance site status leaderboard
  - ex: [speedlify example](https://www.11ty.dev/speedlify/)
    - [speedlify repo](https://github.com/zachleat/speedlify/#deploy-to-netlify)
- [] Implement multi-lang site features
  - [] Read [Multilingual sites with Eleventy](https://www.webstoemp.com/blog/multilingual-sites-eleventy/)
  - [] Read [Language switcher for multilingual JAMstack sites](https://www.webstoemp.com/blog/language-switcher-multilingual-jamstack-sites/)
- [] Setup multiple authors feature
  - [] Read [Supporting Multiple Authors in an Eleventy Blog](https://www.raymondcamden.com/2020/08/24/supporting-multiple-authors-in-an-eleventy-blog)
- [] Read [Dynamic Short URLs with Eleventy](https://www.raymondcamden.com/2021/06/22/dynamic-short-urls-with-eleventy)
- [] Read [Building a Database Driven Eleventy Site](https://www.raymondcamden.com/2021/04/15/building-a-database-driven-eleventy-site)
- [] Read [Eleventy Guide: A Framework-Agnostic Static Site Generator](https://www.sitepoint.com/getting-started-with-eleventy/)
- [] Read [A Site for Front-End Development Conferences (Built with 11ty on Netlify)](https://css-tricks.com/a-site-for-front-end-development-conferences-built-with-11ty-on-netlify/)
- [] Finish [Turn static HTML/CSS into a blog with CMS using the JAMStack](https://youtu.be/4wD00RT6d-g?si=SoF4JtKmhY8VsY-O)
- [] Convert project to use ES modules and Typescript
  - [] Finish [Get 11ty 3.0 and ESM](https://www.jetbrains.com/guide/javascript/tutorials/eleventy-tsx/setup/)
  - [] Read [Eleventy Use ES modules](https://chameth.com/snippets/eleventy-use-esm/)
- Read [The What, Why and How of JavaScript bundlers](https://dev.to/sayanide/the-what-why-and-how-of-javascript-bundlers-4po9)
- [] Implement 11ty code bundling
  - [] Read [Bundling JS in Eleventy with ESBuild](https://medium.com/@brettdewoody/bundling-js-in-eleventy-with-esbuild-76f7059c2f3e)
  - [] Read [Even Better JS Bundling in Eleventy](https://medium.com/@brettdewoody/even-better-js-bundling-in-eleventy-5309d4e7109f)
  - [] Watch [Bundle JavaScript for 11ty with esbuild](https://youtu.be/K3ymW_2oRL8?si=g4rmRUnHA-SLBoBK)
  - [] Add "favorite things page" ie. fav video game, fave online course, fave movies, etc..
  - [] - Make a free clawberta clone
  