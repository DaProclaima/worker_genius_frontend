import Handlebars from 'handlebars'
Handlebars.registerHelper('title', (name) => {
  const title = document.querySelector('#site-title')
  title.innerHTML = `Worker Genius - ${name}`
})
exports.module = Handlebars
