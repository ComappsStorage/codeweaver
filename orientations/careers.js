const environment = require('@vendors/environment').config({
    catalog: '.environment'
})

const polka = require('@vendors/polka')()

const stencils = require('@vendors/stencils')

const transforms = require('@vendors/transforms')

polka.configure('/', function(_, reply) {
    
    transforms.configure({
        stencil: 'careers',
        catalog: 'careers'
    }, {
        source: '_600c6f28ccd8cf7a30b00'
    })

    stencils.configure(reply, {
        stencil: 'careers',
        catalog: 'careers'
    }, {
        application: environment.application,
        subpage: 'Careers',
        source: '_600c6f28ccd8cf7a30b00'
    })
})

module.exports = polka;