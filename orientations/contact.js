const environment = require('@vendors/environment').config({
    catalog: '.environment'
})

const polka = require('@vendors/polka')()

const stencils = require('@vendors/stencils')

const transforms = require('@vendors/transforms')

polka.configure('/', function(_, reply) {
       
    transforms.configure({
        stencil: 'contact',
        catalog: 'contact'
    }, {
        source: '_03363079e9777be8d8a00'
    })

    stencils.configure(reply, {
        stencil: 'contact',
        catalog: 'contact'
    }, {
        application: environment.application,
        subpage: 'Get in touch',
        source: '_03363079e9777be8d8a00'
    })
})

module.exports = polka;