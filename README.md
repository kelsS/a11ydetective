# a11ydetective

Hey howdy hey, dear reader. Welcome to a blog all about Web Accessibility. Take note that the word accessibility is often shortened to a11y. A11y is a [numeronym](https://www.a11yproject.com/posts/a11y-and-other-numeronyms/).

What is web a11y you might ask?

Web a11y is all about making sites and applications usable to as many people as possible no matter how they are differently abled. This noble pursuit involves automated testing, manual testing, and lots of collaboration!

In this blog you will find helpful tips, tricks, gotchas, and other examples of how to make a website or web application accessible for all!

## A note concerning `package.json` and `package-lock.json`

Please note that *you must push your `package.json` AND `package-lock.json` files*. If you do not, the deploy will fail.

## A note on Node and 11ty

Please note that [11ty](https://www.11ty.dev/#quick-start) requires [Node version 18 or newer](https://nodejs.org/en/about/previous-releases).

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

- `.nojekyll`: *tells github pages to NOT use jekyll since this project will be using 11ty instead*

```md
/project root/ -> /a11ydetective/
|
|-- /build/ - Build scripts
|  |-- gulpfile.js - The tasks for the main build process
|  |-- util.js - Utilities used by the tasks
|
|-- /src/ - Your code
|  |-- index.template.html - The wrapper around your compiled HTML that includes any external stylesheets and scripts
|  |-- index.partial.(html|pug|haml|...) - The raw HTML input or preprocessor equivalent
|  |-- style.(css|scss|less|...) - The raw CSS input, or preprocessor equivalent
|  |-- script.(js|ts|coffee|...) - The raw JavaScript input, or preprocessor equivalent
|
|-- /dist/ - The compiled output after running `npm run build`
|  |-- index.html
|  |-- script.js
|  |-- style.css
|
|-- .nojekyll
|-- .gitignore
|-- package.json
|-- README.md
```
