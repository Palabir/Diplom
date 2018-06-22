'use strict'

const Database = use('Database')
const Article = use('App/Models/Article')
const Quests = 6

class ArticleController {
    async index({request, response}){
         const article = await Database.from('article').where('category', Quests)
         const category = await Database.from('categories').where('id', Quests)
         return  {article, category}
    }
    async article({request,params, response}){
        const {id} = params
        const article = await Database.from('article').where('id', id)
        return {article}
    }
    async popular({request, response}){
        const news = await Database.from('article').where('isPopular', 1)
        return {news}
    }
    async eventIndex({request, response}){
        const event = await Database.from('events')
        return  {event}
    }
    async event({request,params, response}){
        const {id} = params
        const event = await Database.from('event').where('id', id)
        return {event}
    }async testIndex({request, response}){
        const test = await Database.from('tests')
        return  {test}
    }
    async test({request,params, response}){
        const {id} = params
        const test = await Database.from('tests').where('id', id)
        return {test}
    }async questIndex({request, response}){
        const quest = await Database.from('quests')
        return  {quest}
    }
    async quest({request,params, response}){
        const {id} = params
        const quest = await Database.from('quests').where('id', id)
        return {quest}
    }
}

module.exports =  ArticleController;
