const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  writing() {
    const pkgJson = {
      name: this.appname,
      version: "1.0.0",
      description: "",
      scripts: {
        start: `parcel src/index.html --out-dir=tmp`,
        build: `parcel build src/index.html --out-dir=dist --public-url='./'`,
      },
      keywords: [],
      author: "",
      devDependencies: {
        "postcss-modules": "latest",
        autoprefixer: "9.8",
        "@babel/preset-env": "latest",
        "parcel-bundler": "latest",
      },
      dependencies: {
        "core-js": "latest",
      },
    };

    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath("package.json"), pkgJson);
  }
  // Determine user configuration
  prompts() {
    return this.prompt([
      {
        type: "confirm",
        name: "sass",
        message: "Use Sass?",
        store: true,
      },
      {
        type: "confirm",
        name: "css-modules",
        message: "Use CSS-Modules?",
        store: true,
      },
    ]).then((answers) => {
      this.answers = answers;
    });
  }

  // Create project structure
  scaffolding() {
    let stylesheetExtension = this.answers.sass ? "scss" : "css";

    // Copy dot files
    this.fs.copyTpl(this.templatePath(".*"), this.destinationRoot(), {
      useModules: this.answers["css-modules"],
    });

    // Copy HTML
    this.fs.copyTpl(
      this.templatePath("src/index.html"),
      this.destinationPath("src/index.html"),
      { title: this.appname }
    );

    // Copy stylesheet
    this.fs.copy(
      this.templatePath("src/assets/styles/index.css"),
      this.destinationPath(`src/assets/styles/index.${stylesheetExtension}`)
    );

    // Copy app script
    this.fs.copy(
      this.templatePath("src/assets/scripts/app.js"),
      this.destinationPath(`src/assets/scripts/app.js`)
    );

    // Copy entry point script
    this.fs.copyTpl(
      this.templatePath("src/assets/scripts/index.js"),
      this.destinationPath(`src/assets/scripts/index.js`),
      { stylesheetExtension }
    );
  }

  // Install dependencies
  install() {
    this.installDependencies({
      npm: true
    })
    
    if (this.answers.sass) this.npmInstall("node-sass", { "save-dev": true });
  }
};
