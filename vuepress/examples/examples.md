# examples

# The readme files

## this header (h2) is listen in the menu

### this is just a sub header

simple example package

## install:

`npm i -g dasdeck/doctools`

## cli / bin:

`doctools [./bin/doctools.js]`

## commands:

`npm run dev [./bin/doctools.js]`

launches the examples of this package

## trigger:

### elementHover:

triggered when an element in the layout editor is hovered

#### elementHover( )

#### arguments

### elementLeave:

triggered when the mouse leaves a layout editor element

#### elementLeave( )

#### arguments

### saveElement:

triggered when the save save button is clicked

#### saveElement( )

#### arguments

## code:

~~~javascript
{
  "name": "yootheme-doctools-example-package",
  "version": "1.0.0",
  "description": "simple example package",
  "main": "parser.js",
  "bin": {
    "doctools": "./bin/doctools.js"
  },
  "scripts": {
    "dev": "./bin/doctools.js"
  },
  "extra": {
      "scriptDocs": {
        "dev": "launches the examples of this package"
      }
  },
  "repository": {
    "type": "git",
    "url": "dasdeck/doctools",
    "workspace": "examples"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "glob": "^7.1.2",
    "jsdoc-api": "^4.0.3",
    "jsdom": "^11.7.0",
    "lodash": "^4.17.5",
    "minimist": "^1.2.0",
    "vue-router": "^3.0.1",
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.4",
    "babel-preset-env": "^1.6.1",
    "babel-preset-stage-2": "^6.24.1",
    "css-loader": "^0.28.11",
    "marked": "^0.3.19",
    "uikit": "^3.0.0-beta.42",
    "vue": "^2.5.16",
    "vue-loader": "^14.2.2",
    "vue-template-compiler": "^2.5.16",
    "webpack": "^4.5.0",
    "webpack-cli": "^2.0.14",
    "webpack-dev-server": "^3.1.3"
  }
}

~~~

* * *

_source: [test](https://github.com/dasdeck/doctools/tree/master/examples/./)_