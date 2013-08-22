var should = require('should'),
    fmt = require('../permalink')

function eql(a, b) { fmt(a).should.equal(b) }

describe('utf8', function () {
    it('should downcode German', function () {
        eql('Namibia löscht sein historisches Gedächtnis',
            'namibia-loescht-sein-historisches-gedaechtnis')
        eql('Russischer Warnschuss für Kiews EU-Träume',
            'russischer-warnschuss-fuer-kiews-eu-traeume')
        eql('Stöber: "Pressefreiheit ist ein großes Gut"',
            'stoeber-pressefreiheit-ist-ein-grosses-gut')
    })
})
