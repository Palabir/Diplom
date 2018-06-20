'use strict'

const Database = use('Database')
const Article = use('App/Models/Article')
class ArticleController {
    async index({request, response}){
        try {
            const article = await Database.from('news')
            return  {article}
        }
        catch (err) {}
        
    }
    async article({request,params, response}){
        const {id} = params
        const article = await Database.from('news').where('id', id)
        return {article}
    }
    async popular({request, response}){
        const news = await Database.from('news').where('isPopular', 1)
        return {news}
    }
}

module.exports =  ArticleController;
