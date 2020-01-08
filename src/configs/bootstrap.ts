import HomeController from '../api/controllers/home-controller'
import LoginController from '../api/controllers/login-controller'
import ErrorController from '../api/controllers/error-controller'

export let controllers = [
  new HomeController(),
  new LoginController(),
  new ErrorController(),
]