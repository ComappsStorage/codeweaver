const _ = require('./trails').config({
    '@vendors': '@application',
    '@orientations': '@orientations'
})

const environment = require('@vendors/environment').config({
    catalog: '.environment'
})

const polka = require('@vendors/polka')()

const sirv = require('@vendors/sirv')(environment.source, {
    production: environment.production
})

const orientations = require('@orientations/orientations')

const services = require('@orientations/services')

const industries = require('@orientations/industries')

const careers = require('@orientations/careers')

const contact = require('@orientations/contact')

polka.borrow(sirv)

polka.borrow('/orientations', orientations).borrow('/services', services).borrow('/industries', industries).borrow('/careers', careers).borrow('/contact', contact)

polka.catch(environment.catch)