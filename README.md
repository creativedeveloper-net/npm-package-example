# npm package example
This is a simple npm package example based on [How to Write an Open Source JavaScript Library](https://egghead.io/courses/how-to-write-an-open-source-javascript-library) course from [egghead.io](https://egghead.io/)

## Configuring npm and creating a package.json

```
npm set init-author-name 'Your Name'
npm set init-author-email 'your.email@yourdomain.com'
npm set init-author-url 'yourdomain.com'
npm set init-license 'MIT'
npm set save-exact true
```

signup for npm account (if you don't have already): [npmjs.com](https://www.npmjs.com/)
```
npm adduser
```
```
npm init
```

## Publishing to npm

```
npm publish
```

## Releasing a version to GitHub
```
git tag 1.0.0
git push --tags
```

## Semantic versioning and npm

Semantic versioning is a standard that a lot of projects use to communicate what kinds of changes are in this release. It's important to communicate what kinds of changes are in a release because sometimes those changes will break the code that depends on the package.

If a project is going to be shared with others, it should start at 1.0.0, though some projects on npm don't follow this rule.

After this, changes should be handled as follows:

* Bug fixes and other minor changes: Patch release, increment the last number, e.g. 1.0.1
* New features which don't break existing features: Minor release, increment the middle number, e.g. 1.1.0
* Changes which break backwards compatibility: Major release, increment the first number, e.g. 2.0.0

## Releasing a new version to npm

 Update version number in package.json file, commit your changes to github and add new tag and then run:
 ```
 npm publish
 ```

 ## Publishing a beta version

 Update version number to for example: 1.1.0-beta.0, commit your changes to github and add new tag and then run:
  ```
  npm publish --tag beta
  ```

To install this beta verion you can run:
```
npm install your-package-name@beta
```

## Unit Testing with Mocha and Chai
Install mocha and chai:
```
npm i -D mocha chai
```
To package.json add:
```
"scripts": {
    "test": "mocha src/index.test.js"
  },
```
To run test:
```
npm run test
```

## Automating Releases with semantic-release
```
npm install -g semantic-release-cli
semantic-release-cli setup
```
in .travis.yml add:
```
script:
  - npm run test
```

## Writing conventional commits with commitizen
```
npm install -D commitizen cz-conventional-changelog
```
Add following lines to package.json:
```
"scripts": {
    "commit": "git-cz",
```
```
"czConfig": {
    "path": "node_modules/cz-conventional-changelog"
}
```
Now you can commit yourchanges using:
```
npm run commit
```
In "List any breaking changes or issues closed by this change:" step you can use:
```
closes #1
```
if your update closes any existing issue

## Automatically running tests before commits with ghooks
```
npm i -D ghooks
```
Update package.json to include:
```
"config": {
    "ghooks": {
        "pre-commit": "npm run test"
    }
}
```

## Adding code coverage recording with Istanbul
```
npm install -D istanbul
```
update package.json to include:
```
"scripts": {
    "test": "istanbul cover -x *.test.js ./node_modules/mocha/bin/_mocha -- -R spec src/index.test.js",
```

## Adding code coverage checking
update package.json to include:
```
  "scripts": {
    "check-coverage": "istanbul check-coverage --statements 100 --branches 100 --functions 100 --lines 100",
```
and
```
  "config": {
    "ghooks": {
      "pre-commit": "npm run test && npm run check-coverage"
```
update .travis.yml to include:
```
script:
  - npm run test
  - npm run check-coverage
```

## Add code coverage reporting
signup for [codecov.io](https://codecov.io/) account (if you don't have already)
```
npm install -D codecov.io
```
update package.json to include:
```
 "scripts": {
    "report-coverage": "cat ./coverage/lcov.info | codecov",
```
update .travis.yml to include:
```
after_success:
  - npm run report-coverage
```
## Adding badges to your README
You can go to [shields.io](https://shields.io/) and use their banges for example to create something like this:

[![travis build](https://img.shields.io/travis/creativedeveloper-net/npm-package-example.svg?style=flat-square)](https://travis-ci.org/creativedeveloper-net/npm-package-example)
[![codecov coverage](https://img.shields.io/codecov/c/github/creativedeveloper-net/npm-package-example.svg?style=flat-square)](https://codecov.io/github/creativedeveloper-net/npm-package-example)
[![version](https://img.shields.io/npm/v/npm-package-example.svg?style=flat-square)](http://npm.im/npm-package-example)
[![downloads](https://img.shields.io/npm/dm/npm-package-example.svg?style=flat-square)](http://npm-stat.com/charts.html?package=npm-package-example&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/npm-package-example.svg?style=flat-square)](http://opensource.org/licenses/MIT)

use this code:
```
[![travis build](https://img.shields.io/travis/creativedeveloper-net/npm-package-example.svg?style=flat-square)](https://travis-ci.org/creativedeveloper-net/npm-package-example)
[![codecov coverage](https://img.shields.io/codecov/c/github/creativedeveloper-net/npm-package-example.svg?style=flat-square)](https://codecov.io/github/creativedeveloper-net/npm-package-example)
[![version](https://img.shields.io/npm/v/npm-package-example.svg?style=flat-square)](http://npm.im/npm-package-example)
[![downloads](https://img.shields.io/npm/dm/npm-package-example.svg?style=flat-square)](http://npm-stat.com/charts.html?package=npm-package-example&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/npm-package-example.svg?style=flat-square)](http://opensource.org/licenses/MIT)
```

## Adding ES6 Support
```
npm i -D babel-cli
npm i -D rimraf
npm i -D babel-preset-es2015 babel-preset-stage-2
```
update package.json to include:
```
 "scripts": {
    "prebuild": "rimraf dist",
    "build": "babel --copy-files --out-dir dist --ignore *.test.js src",
 ```
 and
 ```
   "babel": {
     "presets": ["es2015", "stage-2"]
   }
 ```
 and also update "main" section to use dist folder instead of src:
 ```
 "main": "dist/index.js",
 ```
 update .travis.yml to include:
 ```
 script:
   - npm run test
   - npm run check-coverage
   - npm run build
```
add "files" section to package.json to include only necessary files:
```
  "files": [
    "dist",
    "README.md"
  ],
```

## Adding ES6 Support to Tests using Mocha and Babel
```
npm i -D nyc
```
update package.json "script" section:
```
"check-coverage": "nyc check-coverage --statements 100 --branches 100 --functions 100 --lines 100",
 "report-coverage": "cat ./coverage/lcov.info | codecov",
 "watch:test": "npm t -- --watch",
 "test": "mocha src/index.test.js --compilers js:babel-core/register",
 "cover": "nyc npm t",
```
and "ghooks" section:
```
    "ghooks": {
      "pre-commit": "npm run cover && npm run check-coverage"
    },
```
update .travis.yml "script" section:
```
script:
  - npm run cover
  - npm run check-coverage
  - npm run build
```

## Limit Built Branches on Travis
update .travis.yml to include:
```
branches:
  only:
    - master
```

## Add a browser build to an npm module
```
npm i -D webpack
```
Add new file C:\Users\sciurkat\Desktop\My files\webpack.config.babel.js with this code:
```
import {join} from 'path'

const include = join(__dirname, 'src')

export default {
  entry: './src/index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'npmPackageExample',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', include},
      {test: /\.json$/, 'loader': 'json', include},
    ]
  }
}
```
install
```
npm i -D babel-loader json-loader
npm install npm-run-all --save-dev
```

update package.json "script" section:
```
    "build": "npm-run-all --parallel build:*",
    "build:main": "babel --copy-files --out-dir dist --ignore *.test.js src",
    "build:umd": "webpack --output-filename index.umd.js",
    "build:umd.min": "webpack --output-filename index.umd.min.js -p",
 ```
 You can now access your package via url like this:
[ https://unpkg.com/npm-package-example/dist/index.umd.js]( https://unpkg.com/npm-package-example/dist/index.umd.js)

 ## Integrating SonarQube
 [https://docs.travis-ci.com/user/sonarqube/](https://docs.travis-ci.com/user/sonarqube/)










