"use strict";

const Database = use("Database");
const User = use("App/Models/User");
const Hash = use("Hash");

class UserController {
  async register({ request, response }) {
    const user = new User()
    const { email, password } = request.all()
    user.email = email
    user.password = password
    user.save()
    return "Ты зареган"
  }
  async login({ request, auth, response }) {
    const { login, password } = request.all()
    await auth.attempt(login, password)
    const status = true
    console.log('Залогинен')
    return { status }
  }
  async getUser({request, response}){
    const user = await Database.from('users')
     return {user}
}
  async logout({request, response, auth}){
    await auth.logout()
    const status = false
    return {status}
  }
  
  async checkUser({response,auth}){
    const user = await auth.check()
    if(user){
      return {user}
    }else{
    return console.log('Вы не авторизованы')
    } 
  }
}

module.exports = UserController;
