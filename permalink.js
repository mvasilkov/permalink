(function () {
    function fmt(input, options) {
        if (typeof input != 'string')
            return ''

        var separator = typeof options == 'string'? options: '-',
            beforeNext = false,
            result = ''

        if (typeof options == 'object') {
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
            else beforeNext = result.length !== 0
        }

        return result.toLowerCase()
    }

    if (typeof module != 'undefined' && module.exports)
        module.exports = fmt
}())
