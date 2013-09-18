var assert = require('assert'),
    urlfmt = require('../permalink')

function eql(a, b) { assert.strictEqual(urlfmt(a), b) }

describe('utf8', function () {
    it('should downcode German', function () {
        eql('Namibia löscht sein historisches Gedächtnis',
            'namibia-loescht-sein-historisches-gedaechtnis')
        eql('Russischer Warnschuss für Kiews EU-Träume',
            'russischer-warnschuss-fuer-kiews-eu-traeume')
        eql('Stöber: "Pressefreiheit ist ein großes Gut"',
            'stoeber-pressefreiheit-ist-ein-grosses-gut')
        eql('PÖßNECK', 'poessneck')
    })

    it('should downcode Russian', function () {
        eql('«Белгородский стрелок» попросил для себя 25 лет колонии',
            'belgorodskij-strelok-poprosil-dlya-sebya-25-let-kolonii')
        eql('Бундестаг признал «позорный провал» охоты спецслужб на неонацистов',
            'bundestag-priznal-pozornyj-proval-ohoty-specsluzhb-na-neonacistov')
        eql('В Петербурге изъяли из продажи роман Геббельса',
            'v-peterburge-izyali-iz-prodazhi-roman-gebbelsa')
        eql('Путин пообещал защитные меры в случае евроинтеграции Украины',
            'putin-poobeshal-zashitnye-mery-v-sluchae-evrointegracii-ukrainy')
    })

    it('should replace pictographs', function () {
        eql('BLACK★ROCK SHOOTER', 'black-star-rock-shooter')
        eql('Lucky ☆ Star', 'lucky-star-star')
    })
})
