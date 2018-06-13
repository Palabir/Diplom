'use strict'

const Database = use('Database')
const Article = use('App/Models/Article')
class ArticleController {
    async index({request, response}){
        const news = await Database.from('news')
        return  {news}
    }
    async article({request, params, response}){ 
        const article = await Database.from('news')
        return {article}
    }
}

module.exports =  ArticleController;
