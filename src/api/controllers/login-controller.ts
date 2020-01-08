import * as express from 'express'
import { Request, Response } from 'express'
import sessionFalseMiddleware from '../middlewares/session-false'
import IControllerBase from '../interfaces/controller-base'
import { loadCss, loadJs } from '../helpers/view'
import { constants } from '../../configs/constants'

class LoginController implements IControllerBase {
  public path = '/'
  public router = express.Router()

  constructor() {
    this.initRoutes()
  }

  public initRoutes() {
    this.router.get('/login', sessionFalseMiddleware ,this.index)
  }

  index = (req: Request, res: Response) => {
    let locals = {
      title: 'Bienvenido',
      constants: constants,
      message_color: '',
      message: '',
      csss: loadCss([
        'assets/css/styles',
        'assets/css/login',
      ]), 
      jss: loadJs([]), 
    }
    res.status(200).render('login/index', locals)
  }
}

export default LoginController