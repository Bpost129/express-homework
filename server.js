import express from 'express'
import { footballTeams } from './data/football-teams.js'

const app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.redirect('/home')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/teams', function(req, res) {
  res.render('teams/index', {
    footballTeams: footballTeams
  })
})

app.get('/teams/afc', function(req, res) {
  res.render('teams/afc', {
    footballTeams: footballTeams
  })
})

app.get('/teams/nfc', function(req, res) {
  res.render('teams/nfc', {
    footballTeams: footballTeams
  })
})

app.listen(3000, function() {
  console.log('Listening on port 3000')
})