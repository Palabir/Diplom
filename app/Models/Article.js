'use strict'

const Model = use('Model')

class Article extends Model {
  static get table() {
    return 'Article'
  }
  
}

module.exports = Article
