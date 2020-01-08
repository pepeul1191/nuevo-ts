import * as express from 'express'
import { Request, Response } from 'express'
import sessionTrueMiddleware from '../middlewares/session-true'
import IControllerBase from '../interfaces/controller-base'
import { loadCss, loadJs } from '../helpers/view'

class HomeController implements IControllerBase {
  public path = '/'
  public router = express.Router()

  constructor() {
    this.initRoutes()
  }

  public initRoutes() {
    this.router.get('/', sessionTrueMiddleware ,this.index)
  }

  index = (req: Request, res: Response) => {
    const users = [
      {
        id: 1,
        name: 'Ali'
      },
      {
        id: 2,
        name: 'Can'
      },
      {
        id: 3,
        name: 'Ahmet'
      }
    ]
    let locals = {
      title: 'Inicio',
      csss: loadCss([
        'assets/css/styles',
      ]), 
      jss: loadJs([
        'assets/js/app',
      ]), 
    }
    res.render('home/index', locals)
  }
}

export default HomeController