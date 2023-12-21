const folders = require('node:fs')

const locate = require('@locate')

const regex = require('@regex')

const strings = require('@strings')

function configure(preferences, helpers) {

    const structure = locate('./stencils/' + preferences.catalog + '/' + preferences.stencil + '.handlebars', {
        encoding: 'UTF8'
    })
    
    const sentences = regex.configure({
        structure: structure,
        regex: /class=".*/gi
    })

    const code = strings.configure({
        group: sentences.group
    })
    
    folders.writeFile('./source/' + helpers.source + '.css', code, function() {

        console.log(helpers.source + '.css has been generated and saved, congratulations')

    })
}

module.exports = { configure };