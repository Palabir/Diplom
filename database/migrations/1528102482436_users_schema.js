'use strict'

const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('login',20).notNullable().unique()
      table.string('password',40).notNullable()
      table.string('email',30).notNullable().unique()
      table.string('permissions',1).notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema
