/**
 * @file test
 * @author meixg
 */

const expect = require('chai').expect;
const generate = require('../index');
const fs = require('fs');
const path = require('path');
const SourceMapConsumer = require('source-map').SourceMapConsumer;
const esprima = require('esprima');

describe('sourcemap', function () {
    it('position', function () {

        const file = fs.readFileSync(path.resolve(__dirname, '../index.js'), {encoding: 'utf-8'});
        const map = generate(file, {
            file: 'index.js'
        });

        return new SourceMapConsumer(map).then(consumer => {
            const tokens = esprima.tokenize(file, {loc: true});
            tokens.forEach(token => {
                const line = token.loc.start.line;
                const column = token.loc.start.column;
                let pos = consumer.originalPositionFor({
                    line,
                    column
                });
                expect(pos.source.indexOf('index.js') > -1);
                expect(pos.name).to.equal(token.value);
                expect(pos.line).to.equal(line);
                expect(pos.column).to.equal(column);
            });
        });
    });
});
