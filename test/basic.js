var assert = require('assert'),
    pl = require('../permalink.js')

describe('permalink', function () {
    function eq(a, b) { assert.strictEqual(a, b) }

    String.prototype.equal = function (arg) { eq('' + this, arg) }

    it('should be a function', function () { eq(typeof pl, 'function') })

    it('should return an empty string for bad inputs', function () {
        pl().equal('')
        pl({bad: 'wrong'}).equal('')
        pl(null).equal('')
    })

    it('should return an empty string for blank inputs', function () {
        pl('').equal('')
        pl('    ').equal('')
        pl('\t\n').equal('')
        pl('----').equal('')
    })

    it('should return readable urls', function () {
        pl('hello, world').equal('hello-world')
        pl('hello, world', '_').equal('hello_world')
        pl('Visual Basic .NET').equal('visual-basic-net')
        pl('Visual Basic .NET', '_').equal('visual_basic_net')
    })

    it('should ignore leading and trailing spaces', function () {
        pl('  Simple   API', '~').equal('simple~api')
        pl('Simple  API   ', '~').equal('simple~api')
        pl('\tSimple API\n', '~').equal('simple~api')
    })

    it('should take options object as an argument', function () {
        pl('Eat flaming death', {}).equal('eat-flaming-death')
        pl('Eat flaming death', {foo: 'bar'}).equal('eat-flaming-death')
        pl('Eat flaming death', {separator: '_'}).equal('eat_flaming_death')
        pl('Eat flaming death', {separator: '~~~'}).equal('eat~~~flaming~~~death')
    })
})
