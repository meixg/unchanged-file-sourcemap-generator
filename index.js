/**
 * @file index.js
 *
 * @author meixg
 */

const esprima = require('esprima');
const SourceMapGenerator = require('source-map').SourceMapGenerator;

/**
 * generate sourecemap from an unchanged js file
 *
 * @param {string} source source code string
 * @param {Object} options options
 * @param {Object} options.file filename
 * @param {Object} options.sourceRoot sourceRoot
 * @return {string}
 */
module.exports = function (source, options) {
    const tokens = esprima.tokenize(source, {loc: true});
    const filename = options.file || 'unknown';
    const generator = new SourceMapGenerator(options);

    generator.setSourceContent(filename, source);
    tokens.forEach(token => {
        generator.addMapping({
            name: token.value,
            source: filename,
            original: token.loc.start,
            generated: token.loc.start
        });
    });
    return generator.toString();
};
