var should = require('should'),
    urlfmt = require('../permalink')

describe('urlfmt', function () {
    it('should be a function', function () { urlfmt.should.be.a('function') })

    it('should return an empty string for bad inputs', function () {
        urlfmt().should.equal('')
        urlfmt({bad: 'wrong'}).should.equal('')
        urlfmt(null).should.equal('')
    })

    it('should return an empty string for blank inputs', function () {
        urlfmt('').should.equal('')
        urlfmt('    ').should.equal('')
        urlfmt('\t\n').should.equal('')
        urlfmt('----').should.equal('')
    })

    it('should return readable urls', function () {
        urlfmt('hello, world').should.equal('hello-world')
        urlfmt('hello, world', '_').should.equal('hello_world')
        urlfmt('Visual Basic .NET').should.equal('visual-basic-net')
        urlfmt('Visual Basic .NET', '_').should.equal('visual_basic_net')
    })

    it('should ignore leading and trailing spaces', function () {
        urlfmt('  Simple   API', '~').should.equal('simple~api')
        urlfmt('Simple  API   ', '~').should.equal('simple~api')
        urlfmt('\tSimple API\n', '~').should.equal('simple~api')
    })

    it('should take options object as an argument', function () {
        urlfmt('Eat flaming death', {}).should.equal('eat-flaming-death')
        urlfmt('Eat flaming death', {foo: 'bar'}).should.equal('eat-flaming-death')
        urlfmt('Eat flaming death', {separator: '_'}).should.equal('eat_flaming_death')
        urlfmt('Eat flaming death', {separator: '~~~'}).should.equal('eat~~~flaming~~~death')
    })
})
