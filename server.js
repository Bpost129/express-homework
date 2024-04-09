import express from 'express'
import { footballTeams } from './data/football-teams'

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