# unchanged-file-sourcemap-generator

generate sourcemap from an unchanged js file.

## why

Sometimes we just want to combine some js files into one, and generate a sourcemap. In this situation, some js file may not need to be compiled by babel or some other compiler. Sourcemaps for these files need to be generated on our own.

Fortunately, this module can do this for you.

## quick start

```javascript
const generate = require('unchanged-file-sourcemap-generator');

const map = generate(sourceString, {
    filename: 'index.js',
    sourceRoot: ''
});
```

## options

options are same as [https://github.com/mozilla/source-map#new-sourcemapgeneratorstartofsourcemap](https://github.com/mozilla/source-map#new-sourcemapgeneratorstartofsourcemap).

- file

The filename of the generated source that this source map is associated with.

- sourceRoot

A root for all relative URLs in this source map.