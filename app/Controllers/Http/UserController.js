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
    const { email, password } = request.all()
    await auth.attempt(email, password)
    const status = true
    return {status}
  }

  async logout({request, response, auth}){
    await auth.logout()
    const status = false
    return {status}
  }
  
  async checkUser({response,auth}){
    const user = await auth.check()
    return {user}
  }
}

module.exports = UserController;
