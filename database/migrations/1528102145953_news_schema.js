'use strict'

const Schema = use('Schema')

class NewsSchema extends Schema {
  up () {
    this.create('news', (table) => {
      table.increments()
      table.string('title',20).notNullable()
      table.string('image',40).notNullable()
      table.string('post').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('news')
  }
}

export default NewsSchema;
