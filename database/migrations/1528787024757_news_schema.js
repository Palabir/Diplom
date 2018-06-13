'use strict'

const Schema = use('Schema')

class NewsSchema extends Schema {
  up () {
    this.create('news', (table) => {
      table.increments()
      table.string('title', 100).notNullable()
      table.string('text').notNullable()
      table.string('category', 40).notNullable()
      table.string('isPopular', 10).notNullable()
      table.string('image')
      table.timestamps()
    })
  }

  down () {
    this.drop('news')
  }
}

module.exports = NewsSchema
