/* Make clean, readable, SEO-friendly URLs. Slugify Unicode strings.
 * Copyright (c) 2016 Mark Vasilkov (https://github.com/mvasilkov)
 * License: MIT */
(function () {
    'use strict'

    function permalink(input, options) {
        if (typeof input != 'string')
            return ''

        var separator = '-',
            beforeNext = false,
            result = ''

        if (typeof options == 'string') {
            separator = options
        }
        else if (typeof options == 'object') {
            if (options.hasOwnProperty('separator'))
                separator = options.separator
        }

        for (var i = 0; i < input.length; ++i) {
            var c = input[i]

            if (/[a-zA-Z0-9]/.test(c)) {
                if (beforeNext) {
                    result += separator
                    beforeNext = false
                }
                result += c
            }
            else if (charMap.hasOwnProperty(c)) {
                if (beforeNext) {
                    result += separator
                    beforeNext = false
                }
                result += charMap[c]
            }
            else if (symbolMap.hasOwnProperty(c)) {
                result += separator
                beforeNext = true
                result += symbolMap[c]
            }
            else beforeNext = result.length !== 0
        }

        return result.toLowerCase()
    }

    if (typeof module == 'object' && module.exports)
        module.exports = permalink

    else if (typeof define == 'function' && define.amd)
        define(function () { return permalink })

    else if (typeof window == 'object') {
        window.permalink = permalink

        window.urlfmt = function () {
            if (typeof console == 'object' && typeof console.warn == 'function')
                console.warn('urlfmt() is deprecated, use permalink() instead.')

            permalink.apply(null, arguments)
        }
    }

    var charMap = {
        /* German */
        'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'ß': 'ss',
        'Ä': 'Ae', 'Ö': 'Oe', 'Ü': 'Ue', 'ẞ': 'SS',
        /* Russian */
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
        'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm',
        'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
        'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh', 'ъ': '',
        'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'Yo',
        'Ж': 'Zh', 'З': 'Z', 'И': 'I', 'Й': 'J', 'К': 'K', 'Л': 'L', 'М': 'M',
        'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U',
        'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sh', 'Ъ': '',
        'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya',
        /* Greek monotonic */
        'α': 'a', 'β': 'b', 'γ': 'g', 'δ': 'd', 'ε': 'e', 'ζ': 'z', 'η': 'i',
        'θ': 'th', 'ι': 'i', 'κ': 'k', 'λ': 'l', 'μ': 'm', 'ν': 'n', 'ξ': 'ks',
        'ο': 'o', 'π': 'p', 'ρ': 'r', 'σ': 's', 'τ': 't', 'υ': 'u', 'φ': 'f',
        'χ': 'x', 'ψ': 'ps', 'ω': 'o', 'ς': 's',
        'ά': 'a', 'έ': 'e', 'ή': 'i', 'ί': 'i', 'ϊ': 'i', 'ΐ': 'i', 'ό': 'o',
        'ύ': 'u', 'ϋ': 'u', 'ΰ': 'u', 'ώ': 'o',
        'Α': 'A', 'Β': 'B', 'Γ': 'G', 'Δ': 'D', 'Ε': 'E', 'Ζ': 'Z', 'Η': 'I',
        'Θ': 'TH', 'Ι': 'I', 'Κ': 'K', 'Λ': 'L', 'Μ': 'M', 'Ν': 'N', 'Ξ': 'KS',
        'Ο': 'O', 'Π': 'P', 'Ρ': 'R', 'Σ': 'S', 'Τ': 'T', 'Υ': 'U', 'Φ': 'F',
        'Χ': 'X', 'Ψ': 'PS', 'Ω': 'O',
        'Ά': 'A', 'Έ': 'E', 'Ή': 'I', 'Ί': 'I', 'Ϊ': 'I', 'Ό': 'O',
        'Ύ': 'U', 'Ϋ': 'U', 'Ώ': 'O'
    }

    var symbolMap = {
        '★': 'star',
        '☆': 'star'
    }
}())
