const environment = require('@vendors/environment').config({
    catalog: '.environment'
})

const polka = require('@vendors/polka')()

const stencils = require('@vendors/stencils')

const transforms = require('@vendors/transforms')

polka.configure('/app-modernization', function(_, reply) {
      
    transforms.configure({
        stencil: 'app-modernization',
        catalog: 'services'
    }, {
        source: '_376c7314e1c902b9b3500'
    })
    
    stencils.configure(reply, {
        stencil: 'app-modernization',
        catalog: 'services'
    }, {
        application: environment.application,
        subpage: 'App Modernization',
        source: '_376c7314e1c902b9b3500'
    })
})

polka.configure('/custom-workflow-managment-system', function(_, reply) {
          
    transforms.configure({
        stencil: 'custom-workflow-managment-system',
        catalog: 'services'
    }, {
        source: '_650d163e3859d28374b00'
    })
    
    stencils.configure(reply, {
        stencil: 'custom-workflow-managment-system',
        catalog: 'services'
    }, {
        application: environment.application,
        subpage: 'Custom Workflow Managment System',
        source: '_650d163e3859d28374b00'
    })
})

polka.configure('/marketing-software-development', function(_, reply) {
          
    transforms.configure({
        stencil: 'marketing-software-development',
        catalog: 'services'
    }, {
        source: '_8dfd06e588be110891f00'
    })
    
    stencils.configure(reply, {
        stencil: 'marketing-software-development',
        catalog: 'services'
    }, {
        application: environment.application,
        subpage: 'Marketing Software Development',
        source: '_8dfd06e588be110891f00'
    })
})

polka.configure('/custom-fintech-software', function(_, reply) {
          
    transforms.configure({
        stencil: 'custom-fintech-software',
        catalog: 'services'
    }, {
        source: '_ba06a615f0f111376ec00'
    })
    
    stencils.configure(reply, {
        stencil: 'custom-fintech-software',
        catalog: 'services'
    }, {
        application: environment.application,
        subpage: 'Custom Fintech Software',
        source: '_ba06a615f0f111376ec00'
    })
})

polka.configure('/data-and-business-intelligance', function(_, reply) {
          
    transforms.configure({
        stencil: 'data-and-business-intelligance',
        catalog: 'services'
    }, {
        source: '_f85a85a717cc4202e5700'
    })
    
    stencils.configure(reply, {
        stencil: 'data-and-business-intelligance',
        catalog: 'services'
    }, {
        application: environment.application,
        subpage: 'Data and Business Intelligance',
        source: '_f85a85a717cc4202e5700'
    })
})

polka.configure('/enterprise-software-engineering', function(_, reply) {
          
    transforms.configure({
        stencil: 'enterprise-software-engineering',
        catalog: 'services'
    }, {
        source: '_82c62d890e88319b7d200'
    })
    
    stencils.configure(reply, {
        stencil: 'enterprise-software-engineering',
        catalog: 'services'
    }, {
        application: environment.application,
        subpage: 'Enterprise Software Engineering',
        source: '_82c62d890e88319b7d200'
    })
})

polka.configure('/iot-data-flow-engineering', function(_, reply) {
          
    transforms.configure({
        stencil: 'iot-data-flow-engineering',
        catalog: 'services'
    }, {
        source: '_81060675baf386ee76f00'
    })
    
    stencils.configure(reply, {
        stencil: 'iot-data-flow-engineering',
        catalog: 'services'
    }, {
        application: environment.application,
        subpage: 'IoT Data Flow Engineering',
        source: '_81060675baf386ee76f00'
    })
})

polka.configure('/managed-services', function(_, reply) {
          
    transforms.configure({
        stencil: 'managed-services',
        catalog: 'services'
    }, {
        source: '_9fb703b7cb9ef61f64500'
    })
    
    stencils.configure(reply, {
        stencil: 'managed-services',
        catalog: 'services'
    }, {
        application: environment.application,
        subpage: 'Managed Services',
        source: '_9fb703b7cb9ef61f64500'
    })
})

polka.configure('/product-development', function(_, reply) {
      
    transforms.configure({
        stencil: 'product-development',
        catalog: 'services'
    }, {
        source: '_73d323ca593a31af8aa00'
    })
    
    stencils.configure(reply, {
        stencil: 'product-development',
        catalog: 'services'
    }, {
        application: environment.application,
        subpage: 'Product Development',
        source: '_73d323ca593a31af8aa00'
    })
})

polka.configure('/team-augmentation', function(_, reply) {
      
    transforms.configure({
        stencil: 'team-augmentation',
        catalog: 'services'
    }, {
        source: '_18fd046385ab35fc49700'
    })
    
    stencils.configure(reply, {
        stencil: 'team-augmentation',
        catalog: 'services'
    }, {
        application: environment.application,
        subpage: 'Team Augmentation',
        source: '_18fd046385ab35fc49700'
    })
})

polka.configure('/build-operate-transfer', function(_, reply) {
      
    transforms.configure({
        stencil: 'build-operate-transfer',
        catalog: 'services'
    }, {
        source: '_3771c583808cf3b68c100'
    })

    stencils.configure(reply, {
        stencil: 'build-operate-transfer',
        catalog: 'services'
    }, {
        application: environment.application,
        subpage: 'Build-Operate-Transfer',
        source: '_3771c583808cf3b68c100'
    })
})

module.exports = polka;