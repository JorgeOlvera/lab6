
const credentials = require('./credentials.js')
const request = require('request')

//      https://api.darksky.net/forecast/[key]/[latitude],[longitude]


toCelsius = function(f){
    return Math.round((f-32) * (5/9))
}

const getWeather = function(lat, long, callback) { 

        const url = 'https://api.darksky.net/forecast/' + credentials.DarkSkyapikey +
            '/' + lat + ',' + long + "?lang=es";
        console.log(url)
        request({ url, json: true }, function(error, response) {
            if (error) {
            callback(error, undefined)
            } else {
            const data = response.body

            if (data.Response == 'False') {
                callback(error, undefined)
            } else {
                setTimeout(function(){
                    const info = {
                        timezone: data.timezone,
                        latitude : data.latitude,
                        longitude : data.longitude,
                        temperature: toCelsius(data.currently.temperature),
                        summary: data.currently.summary,
                        precipProbability: data.currently.precipProbability
                    }
                    callback(info)
                }), 2000             
            }

        }

    })

}

    



    

module.exports = {
    getWeather: getWeather
}
