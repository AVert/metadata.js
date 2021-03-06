'use strict';

const fs = require('fs');
const rollup = require('rollup').rollup;
const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');
const cleanup = require('rollup-plugin-cleanup');
const babel = require('rollup-plugin-babel');
const path = require('path');
const package_data = require(path.resolve(__dirname, './package.json'));

const external = [];
const plugins = [
  resolve({jsnext: true, main: true}),
  replace({PACKAGE_VERSION: package_data.version}),
  babel({
    exclude: 'node_modules/**'
  }),
  cleanup(),
];
const header = `/*!
 ${package_data.name} v${package_data.version}, built:${new Date().toISOString().split('T')[0]}
 © 2014-2017 Evgeniy Malyarov and the Oknosoft team http://www.oknosoft.ru
 metadata.js may be freely distributed under the MIT
 To obtain commercial license and technical support, contact info@oknosoft.ru
 */\n\n`;

return rollup({
  entry: path.resolve(__dirname, './bandle.js'),
  external,
  plugins,
})
  .then((bundle) => bundle.write({
    format: 'cjs', // output format - 'amd', 'cjs', 'es', 'iife', 'umd'
    moduleName: package_data.name.replace(/-/g, '_'),
    banner: header,
    dest: path.resolve(__dirname, './index.js'),
    sourceMap: true,
  }));

