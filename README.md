# generator-parcel-modern
> Simple Parcel based generator with PostCSS, Babel, Sass

The goal of this generator is to provide a quick way to scaffold an organized front-end project using the latest technologies, powered by Parcel for an easy zero configuration setup. It has optional CSS Modules and Sass support, and comes with Babel and PostCss with Autoprefixer installed and setup.

## Quick Start
Install Yeoman first, then the generator:
```
npm i -g yo
npm i -g generator-parcel-modern
```

Generate your project:
```
yo generator-parcel-modern
```

Run it:
```
npm start
```
Your project will be available locally at [http://localhost:1234](http://localhost:1234)

## Sample output
Here's an example of what the project structure might look like after generation:
```
.
├── .babelrc
├── .gitignore
├── .postcssrc
├── .yo-rc.json
├── package-lock.json
├── package.json
├── node_modules
└── src
    ├── assets
    │   ├── scripts
    │   │   ├── app.js
    │   │   └── index.js
    │   └── styles
    │       └── index.scss | .css
    └── index.html
```

## License
MIT © [Mike Syomin](https://seminioni.github.io/)

## Cudos
Wanna to thank [Chris Anselmo](https://chrisanselmo.com/) that created an [initial version](https://github.com/christopherwk210/generator-parcel) of this Yeoman's generator
