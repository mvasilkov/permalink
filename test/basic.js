var assert = require('assert'),
    urlfmt = require('../permalink')

function eql(a, b) { assert.strictEqual(a, b) }

String.prototype.equal = function (arg) { eql('' + this, arg) }

describe('urlfmt', function () {
    it('should be a function', function () { eql(typeof urlfmt, 'function') })

    it('should return an empty string for bad inputs', function () {
        urlfmt().equal('')
        urlfmt({bad: 'wrong'}).equal('')
        urlfmt(null).equal('')
    })

    it('should return an empty string for blank inputs', function () {
        urlfmt('').equal('')
        urlfmt('    ').equal('')
        urlfmt('\t\n').equal('')
        urlfmt('----').equal('')
    })

    it('should return readable urls', function () {
        urlfmt('hello, world').equal('hello-world')
        urlfmt('hello, world', '_').equal('hello_world')
        urlfmt('Visual Basic .NET').equal('visual-basic-net')
        urlfmt('Visual Basic .NET', '_').equal('visual_basic_net')
    })

    it('should ignore leading and trailing spaces', function () {
        urlfmt('  Simple   API', '~').equal('simple~api')
        urlfmt('Simple  API   ', '~').equal('simple~api')
        urlfmt('\tSimple API\n', '~').equal('simple~api')
    })

    it('should take options object as an argument', function () {
        urlfmt('Eat flaming death', {}).equal('eat-flaming-death')
        urlfmt('Eat flaming death', {foo: 'bar'}).equal('eat-flaming-death')
        urlfmt('Eat flaming death', {separator: '_'}).equal('eat_flaming_death')
        urlfmt('Eat flaming death', {separator: '~~~'}).equal('eat~~~flaming~~~death')
    })
})
