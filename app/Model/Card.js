'use strict'

const Lucid = use('Lucid')

class Card extends Lucid {
    category () {
        return this.belongsTo('App/Model/Category')
    }

    user () {
        return this.belongsTo('App/Model/User')
    }
}

module.exports = Card
