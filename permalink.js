/* Make clean, readable, SEO-friendly URLs. Slugify Unicode strings.
 * Copyright (c) 2014 Mark Vasilkov (https://github.com/mvasilkov)
 * License: MIT */
(function () {
    function urlfmt(input, options) {
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

        for (var r = 0; r < input.length; ++r) {
            var c = input[r]

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

    if (typeof module == 'object' && module.exports) module.exports = urlfmt
    else if (typeof define == 'function' && define.amd) define(function () { return urlfmt })
    else if (typeof window == 'object') window.urlfmt = urlfmt

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
        'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
    }

    var symbolMap = {
        '★': 'star',
        '☆': 'star'
    }
}())
