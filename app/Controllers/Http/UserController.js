'use strict'

const Database = use('Database')
const User = use('App/Models/User')
class UserController {

  async login ({ request, auth }) {
    const { email, password } = request.all()
    await auth.attempt(email, password)

    return 'Logged in successfully'
  }

  async registration ({}) {
    
  }
   
  }

module.exports =  UserController;
