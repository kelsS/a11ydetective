# a11ydetective

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
