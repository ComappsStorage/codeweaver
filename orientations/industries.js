const environment = require('@vendors/environment').config({
    catalog: '.environment'
})

const polka = require('@vendors/polka')()

const stencils = require('@vendors/stencils')

const transforms = require('@vendors/transforms')

polka.configure('/energy-and-utilities', function(_, reply) {
       
    transforms.configure({
        stencil: 'energy-and-utilities',
        catalog: 'industries'
    }, {
        source: '_31404cf93b255673f8e00'
    })

    stencils.configure(reply, {
        stencil: 'energy-and-utilities',
        catalog: 'industries'
    }, {
        application: environment.application,
        subpage: 'Energy and Utilities',
        source: '_31404cf93b255673f8e00'
    })
})

polka.configure('/finance-and-banking', function(_, reply) {
    
    transforms.configure({
        stencil: 'finance-and-banking',
        catalog: 'industries'
    }, {
        source: '_71d8e75f8d3300a560200'
    })

    stencils.configure(reply, {
        stencil: 'finance-and-banking',
        catalog: 'industries'
    }, {
        application: environment.application,
        subpage: 'Finance and Banking',
        source: '_71d8e75f8d3300a560200'
    })
})

polka.configure('/retail-and-logistics', function(_, reply) {
    
    transforms.configure({
        stencil: 'retail-and-logistics',
        catalog: 'industries'
    }, {
        source: '_90a083f542a98c9938d00'
    })

    stencils.configure(reply, {
        stencil: 'retail-and-logistics',
        catalog: 'industries'
    }, {
        application: environment.application,
        subpage: 'Retail and Logistics',
        source: '_90a083f542a98c9938d00'
    })
})

polka.configure('/insurance', function(_, reply) {
    
    transforms.configure({
        stencil: 'insurance',
        catalog: 'industries'
    }, {
        source: '_7794dada097e41cc0d100'
    })

    stencils.configure(reply, {
        stencil: 'insurance',
        catalog: 'industries'
    }, {
        application: environment.application,
        subpage: 'Insurance',
        source: '_7794dada097e41cc0d100'
    })
})

polka.configure('/marketing', function(_, reply) {
    
    transforms.configure({
        stencil: 'marketing',
        catalog: 'industries'
    }, {
        source: '_5b939f5ce6751dbd53c00'
    })

    stencils.configure(reply, {
        stencil: 'marketing',
        catalog: 'industries'
    }, {
        application: environment.application,
        subpage: 'Marketing',
        source: '_5b939f5ce6751dbd53c00'
    })
})

polka.configure('/telecommunications', function(_, reply) {

    transforms.configure({
        stencil: 'telecommunications',
        catalog: 'industries'
    }, {
        source: '_39a5ae5e552d005ca4100'
    })
    
    stencils.configure(reply, {
        stencil: 'telecommunications',
        catalog: 'industries'
    }, {
        application: environment.application,
        subpage: 'Telecommunications',
        source: '_39a5ae5e552d005ca4100'
    })
})

module.exports = polka;