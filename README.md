# MUDJS

[![Build Status](https://travis-ci.org/calebeno/mudjs.svg?branch=master)](https://travis-ci.org/calebeno/mudjs)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/calebeno/mudjs.svg)](https://greenkeeper.io/)
[![Travis](https://img.shields.io/travis/calebeno/mudjs.svg)](https://travis-ci.org/calebeno/mudjs)
[![Coveralls](https://img.shields.io/coveralls/calebeno/mudjs.svg)](https://coveralls.io/github/calebeno/mudjs)

A library for creating old-school dungeon crawlers.

### Importing library

You can import the generated bundle to use the whole library generated by this starter:

```javascript
import myLib from 'mylib'
```

Additionally, you can import the transpiled modules from `dist/lib` in case you have a modular library:

```javascript
import something from 'mylib/dist/lib/something'
```

### NPM scripts

 - `npm t`: Run test suite
 - `npm start`: Run `npm run build` in watch mode
 - `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
 - `npm run test:prod`: Run linting and generate coverage
 - `npm run build`: Generate bundles and typings, create docs
 - `npm run lint`: Lints code
 - `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)

### Excluding peerDependencies

On library development, one might want to set some peer dependencies, and thus remove those from the final bundle. You can see in [Rollup docs](https://rollupjs.org/#peer-dependencies) how to do that.

Good news: the setup is here for you, you must only include the dependency name in `external` property within `rollup.config.ts`. For example, if you want to exclude `lodash`, just write there `external: ['lodash']`.

### FAQ

#### `Array.prototype.from`, `Promise`, `Map`... is undefined?

TypeScript or Babel only provides down-emits on syntactical features (`class`, `let`, `async/await`...), but not on functional features (`Array.prototype.find`, `Set`, `Promise`...), . For that, you need Polyfills, such as [`core-js`](https://github.com/zloirock/core-js) or [`babel-polyfill`](https://babeljs.io/docs/usage/polyfill/) (which extends `core-js`).

For a library, `core-js` plays very nicely, since you can import just the polyfills you need:

```javascript
import "core-js/fn/array/find"
import "core-js/fn/string/includes"
import "core-js/fn/promise"
```
