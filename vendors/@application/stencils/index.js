const tempura = require('@tempura')

const locate = require('@locate')

function configure(reply, preferences, helpers) {

    const draft = locate('./stencils/' + preferences.catalog + '/' + preferences.stencil + '.handlebars', {
        encoding: 'UTF8'
    })
    
    const compile = tempura.compile(draft)

    const stencil = compile(helpers)
    
    reply.end(stencil)

}

module.exports = { configure };