const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const path = require('path')
// const fetch = require('node-fetch')

/**
 * Server
 * @Class
 */
class Server {
  constructor () {
    this.app = express()
    this.port = 3000
  }

  // fecthArticle () {
  //   const article = fetch('http://localhost:3000/article/list/')
  //     .then(response => response.json())
  //     .then(data => {
  //       return data
  //     })
  //   return article
  // }

  // showArtice (id) {
  //   const article = fetch(`http://localhost:3000/article/show/${id}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       return data
  //     })
  //   return article
  // }

  /**
   * middleware
   */
  middleware () {
    this.app.set('view engine', '.hbs')
    this.app.use('/public', express.static(path.join(__dirname, '../assets')))
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

    this.app.get('/home', async (_, res) => {
      // const articles = await this.fecthArticle()
      const title = 'Bienvenue !'
      res.render('home', { title: title })
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
