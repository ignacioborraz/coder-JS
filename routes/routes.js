const Router = require('express').Router()

const {getWines,getTypeWines,oneWine} = require('../controllers/wineControllers')

Router.route('/wines')
    .get(getWines)
Router.route('/types/:id')
    .get(getTypeWines)
Router.route('/wines/:id')
    .get(oneWine)


module.exports = Router