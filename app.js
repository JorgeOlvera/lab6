//v1.1
const express = require('express')
const path = require('path')
const weather = require ('./weather.js')
const geocode = require('./geocode.js')
const app = express()

const port = process.env.PORT || 3000


app.use(express.static('public'))

app.get('/about', function(req, res) { 
  res.send('absssout aboasdasdut smn sdsd')
})

app.get('/weather', function(req, res) {
  res.send('<h1>El clima es...</h1>')
})

app.get('*', function(req, res) {
  res.send({
    error: 'Ruta no valida'
  })
})

// APLICACIÓN 
//test values
const city = "Monterrey"

geocode.getCoordinates(city, function(data){
    const cityLat = data.latitude
    const cityLong = data.longitude
    console.log(cityLat, cityLong)
})

cityLat = 25.68
cityLong = -100.31


weather.getWeather(cityLat, cityLong, function(data){
    console.log("En " + data.timezone + " está " + data.summary + 
    ". Actualmente está a " + data.temperature + "°C. Hay " + 
    data.precipProbability + "% de posibilidad de lluvia.")
})



app.listen(port, function() {
  console.log('Up and running!')
})


