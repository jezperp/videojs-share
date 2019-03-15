/**
 * Rollup configuration for packaging the plugin in a module that is consumable
 * as the `src` of a `script` tag or via AMD or similar client-side loading.
 *
 * This module DOES include its dependencies.
 */
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import string from 'rollup-plugin-string';
import resolve from 'rollup-plugin-node-resolve';

export default {
  moduleName: 'videojsShare',
  entry: 'src/plugin.js',
  dest: 'dist/videojs-share.js',
  format: 'umd',
  external: ['video.js'],
  globals: {
    'video.js': 'videojs'
  },
  legacy: true,
  plugins: [
    commonjs({
      sourceMap: false
    }),
    resolve({
      browser: true,
      main: true,
      jsnext: true
    }),
    string({
      include: 'src/icons/*.svg'
    }),
    json(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        ['es2015', {
          loose: true,
          modules: false
        }]
      ],
      plugins: [
        'external-helpers',
        'transform-object-assign'
      ]
    })
  ]
};
