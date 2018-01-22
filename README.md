JS Like It's 2017
-----------------

This repository contains example code to help learn about some of the significant changes in JavaScript, as well as an example webpack configuration for Drupal 8.

#### How To

- Install [node](https://nodejs.org/en/) (recommend 8+).
- Run examples: `node 01-arrows/ES5/01-squares.js`

#### Compiling

Node.js and browser do not yet support the ES2015 modules. In order to run example `08-modules` you will need to compile using babel. Included are the npm files you'll need. To compile:

1. `cd js-like-2017/08-modules/ES6`
2. `npm install`
3. `npm run build`