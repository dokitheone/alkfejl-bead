'use strict'

const Lucid = use('Lucid')

class Category extends Lucid {
  recipes () {
    return this.hasMany('App/Model/Recipe')
  }
  cards () {
    return this.hasMany('App/Model/Card')
  }
}

module.exports = Category
