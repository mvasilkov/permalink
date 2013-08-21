var should = require('should'),
    fmt = require('../permalink')

describe('fmt', function () {
    it('should be a function', function () {
        fmt.should.be.a('function')
    })

    it('should return an empty string for bad inputs', function () {
        fmt().should.equal('')
        fmt({bad: 'wrong'}).should.equal('')
        fmt(null).should.equal('')
    })

    it('should return an empty string for blank inputs', function () {
        fmt('').should.equal('')
        fmt('    ').should.equal('')
        fmt('\t\n').should.equal('')
        fmt('----').should.equal('')
    })

    it('should return readable urls', function () {
        fmt('hello, world').should.equal('hello-world')
        fmt('hello, world', '_').should.equal('hello_world')
        fmt('Visual Basic .NET').should.equal('visual-basic-net')
        fmt('Visual Basic .NET', '_').should.equal('visual_basic_net')
    })

    it('should ignore leading and trailing spaces', function () {
        fmt('  Simple   API', '~').should.equal('simple~api')
        fmt('Simple  API   ', '~').should.equal('simple~api')
        fmt('\tSimple API\n', '~').should.equal('simple~api')
    })

    it('should take options object as an argument', function () {
        fmt('Eat flaming death', {}).should.equal('eat-flaming-death')
        fmt('Eat flaming death', {foo: 'bar'}).should.equal('eat-flaming-death')
        fmt('Eat flaming death', {separator: '_'}).should.equal('eat_flaming_death')
        fmt('Eat flaming death', {separator: '~~~'}).should.equal('eat~~~flaming~~~death')
    })
})
