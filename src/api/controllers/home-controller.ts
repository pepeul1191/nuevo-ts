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
    this.router.get('/rest', sessionTrueMiddleware, this.rest)
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

  rest = (req: Request, res: Response) => {
    let resp:any
    createConnection().then(async connection => {
      //console.log(connection)
      let departmentRepository = connection.getRepository(Department)
      resp = await departmentRepository.find();
      res.status(200).send(JSON.stringify(resp))
    }).catch(error => {
      console.log("Error: ", error)
      res.status(400).send(error)
    });
    
  }
}

export default HomeController