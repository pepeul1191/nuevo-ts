import HomeController from '../api/controllers/home-controller'
import LoginController from '../api/controllers/login-controller'

export let controllers = [
  new HomeController(),
  new LoginController(),
]