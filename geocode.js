
const credentials = require('./credentials.js')
const request = require('request')

const getCoordinates = function(citySearch, callback) { 
  
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + 
  citySearch + ".json?access_token=" + credentials.MapboxApikey;
  console.log(url)
  request({ url, json: true }, function(error, response) {
      if (error) {
          callback(error, undefined)
      } else {
          const data = response.body 
          if ( data.Response == 'False' ) {
          callback(data.Error, undefined)
          } else {
            setTimeout(function(){
              const info = {
                latitude : data.features[1].geometry.coordinates[0],
                longitude: data.features[1].geometry.coordinates[1]
              }
              callback(info)
            }), 2000

            }

      }

      })  
}



module.exports = {
  getCoordinates: getCoordinates
}