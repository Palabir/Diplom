'use strict'

const Database = use('Database')
const Article = use('App/Models/Article')
const Quests = 1
const Events = 3
const Web = 2
const Articles = 6

class ArticleController {
    async index({request, response}){
         const article = await Database.from('article').where('category', Articles)
         return  {article}
    }
    async getCategory({request, response}){
        const category = await Database.from('categories')
         return {category}
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
    async quests({request, response}){
        const quests = await Database.from('article').where('category', Quests)
        return  {quests}
    }
    async events({request, response}){
        const events = await Database.from('article').where('category', Events)
        return  {events}
    }
    async web({request, response}){
        const web = await Database.from('article').where('category', Web)
        return  {web}
    }
    async addgood({request,response}){
        const {title,text,isPopular,image,category, created_at} = request.all()
        await Database.from('article').insert({title: title,text: text,isPopular: isPopular, image: image, category: category, created_at: created_at})
        return 'Статья Добавлена'
    }
    async deladmingood({request,response}){
        const {id} = request.all();
        await Database.table('article').where('id', id).delete()
        return 
    }
    async admingoods({response}){
        const goods = await Database.from('article')
        return {goods} 
    }
}

module.exports =  ArticleController;
