const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const exphbs = require('express-handlebars')
var handlebars = require('handlebars')
var layouts = require('handlebars-layouts')
const morgan = require('morgan')
const path = require('path')
const dotenv = require('dotenv')
// const { auth } = require('./middleware/webservices')
dotenv.config()

exphbs.create({
  helpers: {

    bar: function () { return 'BAR!' }
  }
})

handlebars.registerHelper(layouts(handlebars))

// const proxy = axios({
//   host: 'localhost', // TODO or env.process.API_HOST
//   port: 3010 // TODO or env.process.API_PORT
// })
/**
 * Server
 * @Class
 */
class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
  }

  /**
   * middleware
   */
  middleware () {
    this.app.use(morgan('combined'))
    this.app.set('view engine', '.hbs')
    this.app.use('/public' || process.env.public, express.static(path.join(__dirname, '../assets')))
    this.app.set('views', path.join(__dirname, '../views'))
    this.app.engine('.hbs', exphbs({
      helpers: {
        dateFormat: require('handlebars-dateformat')
      },
      extname: '.hbs',
      defaultLayout: 'main',
      layoutsDir: path.join(__dirname, '../views/layouts/'),
      partialsDir: path.join(__dirname, '../views/partials/')
    }))

    this.app.use(bodyParser.urlencoded({ 'extended': true }))
    this.app.use(bodyParser.json())
    this.app.use(cors())

    this.app.get('/', (_, res) => {
      res.redirect('/home')
    })

    this.app.get('/home', async (_, res) => {
      // const articles = await this.fecthArticle()
      const title = 'Bienvenue !'
      res.render('index', { title: title })
    })

    this.app.get('/certification', async (_, res) => {
      // const articles = await this.fecthArticle()
      const title = 'Bienvenue !'
      res.render('certification', { title: title })
    })

    this.app.get('/certifications', async (_, res) => {
      // const articles = await this.fecthArticle()
      const title = 'certifications'
      res.render('certifications', { title: title })
    })

    this.app.get('/offres', async (_, res) => {
      // const articles = await this.fecthArticle()
      const title = 'Offres d’emploi !'
      res.render('offres', {
        title: title,
        jobOffers: [
          {
            title: 'Développeur PHP'
          }
        ]
      })
    })

    this.app.get('/inscription', async (_, res) => {
      res.render('inscription', {
        title: 'inscription '
      })
    })

    this.app.get('/conversations', async (_, res) => {
      // const articles = await this.fecthArticle()
      const title = 'Conversations privées'
      res.render('conversations', { title: title })
    })

    this.app.use(bodyParser.urlencoded({ 'extended': true }))
    this.app.use(bodyParser.json())
  }

  /**
   * run
   */
  run () {
    try {
      this.middleware()
      this.app.listen(this.port, () => console.log(`Server is listening on port ${this.port} and dirname is ${__dirname}`))
    } catch (err) {
      console.error(`[ERROR] Server -> ${err}`)
    }
  }
}

module.exports = Server
