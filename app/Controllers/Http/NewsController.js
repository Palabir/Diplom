'use strict'

const Database = use('Database')
const Article = use('App/Models/News')

class NewsController {
    async index({request, response}){
        const news = await Database.from('news').where('isPopular', 1)
        return  {news}
    }
    async article({request, params, response}){
        const {id} = params
        const article = await Database.from('news').where('id', id)
        return {article}
    }
    async search({request, response, params}){
        
    }
}

export default NewsController;
