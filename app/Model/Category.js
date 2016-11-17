'use strict'

const Lucid = use('Lucid')

class Category extends Lucid {
  cards () {
    return this.hasMany('App/Model/Card')
  }
}

module.exports = Category
