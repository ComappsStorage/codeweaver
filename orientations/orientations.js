const polka = require('@vendors/polka')()

const stencils = require('@vendors/stencils')

polka.configure('/', function(_, reply) {
    
    stencils.configure(reply, {
        stencil: 'orientations',
        catalog: 'orientations'
    })
})

module.exports = polka;