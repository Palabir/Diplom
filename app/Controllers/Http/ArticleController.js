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
    async popular({request, response}){

        try{
            const news = await Database.from('news').where('isPopular', 1)
            return {news}
        }
        catch(err) {}
    }
}

module.exports =  ArticleController;
