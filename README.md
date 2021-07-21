     ____________________________________
    |    _____ _____ ____     __ _____   |
    |   |     |  |  |    \ __|  |   __|  |
    |   | | | |  |  |  |  |  |  |__   |  |
    |   |_|_|_|_____|____/|_____|_____|  |
    |        ADVENTURE IF YOU DARE!      |
    | An API For Building MUD-like Games |
    |        by Caleb Eno ©2021          |
    |____________________________________|

[![npm version](https://badge.fury.io/js/mudjs.svg)](https://badge.fury.io/js/mudjs)
[![Build Status](https://travis-ci.com/calebeno/mudjs.svg?branch=master)](https://travis-ci.com/calebeno/mudjs)
[![Known Vulnerabilities](https://snyk.io/test/github/calebeno/mudjs/badge.svg)](https://snyk.io/test/github/calebeno/mudjs)
[![Coveralls](https://img.shields.io/coveralls/calebeno/mudjs.svg)](https://coveralls.io/github/calebeno/mudjs)
<br />
[![Maintained By](https://img.shields.io/badge/Maintained%20by-Caleb%20Eno-blue.svg)](https://github.com/calebeno)
[![License](https://img.shields.io/badge/License-MIT-black.svg)](https://github.com/calebeno/mudjs/blob/master/LICENSE)
<br />
[![TypeDoc](https://img.shields.io/badge/Docs-TypeDoc-blue.svg)](https://calebeno.github.io/mudjs/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Current Phase: Early Development

Hello!  Thank you for your interest in MudJS. This project is currently undergoing its first phase of early development. MudJS is intended to be an engine of
sorts for building old-school style dungeon crawlers.

To be clear: **THIS IS NOT CURRENTLY FEATURE COMPLETE**

It's under active development in my free time, and I will continue to add features as I can.

What MudJS is (will be):

- A collection of Data Structures (levels, rooms, stats, players, enemies, interactables, equipment, etc.)
- Accessor functions to manipulate the data structures (add room, defeat enemy, move player etc.)
- Utility and Engine functions to advance the gameplay (tick callbacks, save/load, etc.)
- Some kind of narrative management component (as yet undetermined)
- Designed with third party plugins in mind (so you can make your own tooling!)

What MudJS is not (won't be):

- A full game experience
- A front-end for building games for the engine
- A front-end for playing games made with the engine

While developing the engine, I am also building a front-end that will demonstrate both how one could build a game with it and what a game made with it would
play like. As development progresses, I will provide a link to the interface side.

I'm really excited about this project!  If you are too, I'd love to hear from you what your favorite dungeon crawlers are.

[comment]: <> ([![Greenkeeper badge]&#40;https://badges.greenkeeper.io/calebeno/mudjs.svg&#41;]&#40;https://greenkeeper.io/&#41;)

A library for creating old-school dungeon crawlers.

*Further documentation to come as development progresses.*

Generated documentation: [https://calebeno.github.io/mudjs/](https://calebeno.github.io/mudjs/)

[comment]: <> (### Importing library)

[comment]: <> (You can import the generated bundle to use the whole library generated by this starter:)

[comment]: <> (```javascript)

[comment]: <> (import mudjs from 'mudjs')

[comment]: <> (```)

[comment]: <> (Additionally, you can import the transpiled modules from `dist/lib` in case you have a modular library:)

[comment]: <> (```javascript)

[comment]: <> (import something from 'mylib/dist/lib/something')

[comment]: <> (```)

## Contributing

### NPM Scripts

#### Development

- `npm start` - Builds project in watch mode

#### Testing

- `npm test` - Run test suite
- `npm run test:watch` - Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
- `npm run test:prod` - Run linting and generate test coverage report
- `npm run lint` - Lints code

#### Building

- `npm run build` - Generate bundles and typings, create docs

#### Committing

- `npm run commit` - Commit using conventional commit style

[comment]: <> (### Excluding peerDependencies)

[comment]: <> (On library development, one might want to set some peer dependencies, and thus remove those from the final bundle. You can see in [Rollup docs]&#40;https://rollupjs.org/#peer-dependencies&#41; how to do that.)

[comment]: <> (Good news: the setup is here for you, you must only include the dependency name in `external` property within `rollup.config.ts`. For example, if you want to exclude `lodash`, just write there `external: ['lodash']`.)

[comment]: <> (### FAQ)

[comment]: <> (#### `Array.prototype.from`, `Promise`, `Map`... is undefined?)

[comment]: <> (TypeScript or Babel only provides down-emits on syntactical features &#40;`class`, `let`, `async/await`...&#41;, but not on functional features &#40;`Array.prototype.find`, `Set`, `Promise`...&#41;, . For that, you need Polyfills, such as [`core-js`]&#40;https://github.com/zloirock/core-js&#41; or [`babel-polyfill`]&#40;https://babeljs.io/docs/usage/polyfill/&#41; &#40;which extends `core-js`&#41;.)

[comment]: <> (For a library, `core-js` plays very nicely, since you can import just the polyfills you need:)

[comment]: <> (```javascript)

[comment]: <> (import "core-js/fn/array/find")

[comment]: <> (import "core-js/fn/string/includes")

[comment]: <> (import "core-js/fn/promise")

[comment]: <> (```)
