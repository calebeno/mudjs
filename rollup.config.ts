import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
// import sourceMaps from 'rollup-plugin-sourcemaps'
import camelCase from 'lodash.camelcase'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
// import builtins from 'rollup-plugin-node-builtins'

import pkg from './package.json';
// const pkg = require('./package.json');

const libraryName = 'mudjs';

export default {
    input: `src/${libraryName}.ts`,
    output: [
        { file: `dist/${pkg.main}`, name: camelCase(libraryName), format: 'umd', sourcemap: true, globals: { crypto: 'crypto' } },
        { file: `dist/${pkg.module}`, format: 'es', sourcemap: true, globals: { crypto: 'crypto' } }
    ],
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: [],
    watch: {
        include: 'src/**'
    },
    plugins: [
        // builtins(),
        // Allow json resolution
        json(),
        // Compile TypeScript files
        typescript({ tsconfig: './tsconfig.json' }),
        // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
        commonjs(),
        // Allow node_modules resolution, so you can use 'external' to control
        // which external modules to include in the bundle
        // https://github.com/rollup/rollup-plugin-node-resolve#usage
        resolve(),

        // Resolve source maps to the original source
        // sourceMaps()
    ]
}
