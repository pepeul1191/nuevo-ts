import App from './configs/app'

import * as bodyParser from 'body-parser'
import loggerMiddleware from './api/middlewares/logger'
// import PostsController from './controllers/posts/posts.controller'
import HomeController from './api/controllers/home-controller'

const app = new App({
  port: 5000,
  controllers: [
    new HomeController(),
    //new PostsController()
  ],
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ 
      extended: true 
    }),
    loggerMiddleware
  ]
})

app.listen()