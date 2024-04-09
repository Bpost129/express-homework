import express from 'express'

const app = express()

app.get('/', function(req, res) {
  res.send('<h1>hello, friend</h1>')
})

app.listen(3000, function() {
  console.log('Listening on port 300')
})