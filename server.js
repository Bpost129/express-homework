import express from 'express'

const app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.redirect('/home')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.listen(3000, function() {
  console.log('Listening on port 300')
})