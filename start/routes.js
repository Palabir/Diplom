'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.group(() =>
    {  
        Route.get("popular", "ArticleController.popular")
        Route.get("news", "ArticleController.index")
        Route.get("article/:id", "ArticleController.article")

        Route.post("register", 'UserController.register')
  
        Route.post("login", 'UserController.login')

        Route.post("logout", 'UserController.logout')

        Route.post("checkuser", "UserController.checkUser")

    }).prefix("api")


Route.any('*', 'NuxtController.render')