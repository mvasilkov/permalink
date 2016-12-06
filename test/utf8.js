var assert = require('assert'),
    pl = require('../permalink.js')

describe('utf8', function () {
    function eql(a, b) { assert.strictEqual(pl(a), b) }

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

    it('should downcode Greek monotonic', function () {
        eql('Τη γλώσσα μου έδωσαν ελληνική',
            'ti-glossa-mou-edosan-elliniki')
        eql('το σπίτι φτωχικό στις αμμουδιές του Ομήρου.',
            'to-spiti-ftoxiko-stis-ammoudies-tou-omirou')
        eql('Μονάχη έγνοια η γλώσσα μου στις αμμουδιές',
            'monaxi-egnoia-i-glossa-mou-stis-ammoudies')
        eql('Άξιον Εστί, Οδυσσέας Ελύτης ',
            'aksion-esti-odusseas-elutis')
    })

    it('should replace pictographs', function () {
        eql('BLACK★ROCK SHOOTER', 'black-star-rock-shooter')
        eql('Lucky ☆ Star', 'lucky-star-star')
    })
})
