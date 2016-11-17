'use strict'

const Schema = use('Schema')

class CardsSchema extends Schema {

  up () {
    this.create('cards', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('cell').notNullable()
      table.string('email').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.timestamps()
    })
  }

  down () {
    this.drop('cards')
  }

}

module.exports = CardsSchema
