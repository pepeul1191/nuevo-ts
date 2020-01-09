import * as express from 'express'
import { Request, Response } from 'express'
import sessionTrueMiddleware from '../middlewares/session-true'
import IControllerBase from '../interfaces/controller-base'
import { loadCss, loadJs } from '../helpers/view'
import { constants } from '../../configs/constants'
import {createConnection} from 'typeorm'
import { Department } from '../models/departament'

class HomeController implements IControllerBase {
  public path = '/'
  public router = express.Router()

  constructor() {
    this.initRoutes()
  }

  public initRoutes() {
    this.router.get('/', sessionTrueMiddleware, this.index)
    this.router.get('/rest', sessionTrueMiddleware,  this.rest)
  }

  index = (req: Request, res: Response) => {
    let locals = {
      title: 'Inicio',
      constants: constants,
      csss: loadCss([
        'assets/css/styles',
      ]), 
      jss: loadJs([
        'assets/js/app',
      ]), 
    }
    res.status(200).render('home/index', locals)
  }

  rest = async (req: Request, res: Response) => {
    let resp:any
    let respStatus:number
    try {
      let con = await createConnection()
      let departmentRepository = con.getRepository(Department)
      resp = await departmentRepository.findOne({name: 'Ancash'})
      respStatus = 200
    } catch (err) {
      respStatus = 500
      resp = err
    }
    res.status(respStatus).send(resp)
  }
}

export default HomeController