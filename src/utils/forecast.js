const request = require('request')

const forecast = (latitude, longitude, callback)=>{
    const url='http://api.weatherstack.com/current?access_key=d0d8bac25bd8a55a403d2ad73ad23691&query='+latitude+','+longitude
    
    request({url, json: true}, (error, {body})=>{
        // console.log('forecast: ',body)
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(body.error){
            // console.log('body  error: ', body.error)
            callback('Unable to find location', undefined)
        }else{
            // console.log('--------------------------------');
            callback(undefined, body.current.weather_descriptions + 
                ' it is currently ' +  body.current.temperature + 'degrees out. \n' + 
                'There is ' + body.current.precip + '% chance of rain. \n' +
                'Humiddity in here is :' + body.current.humidity )
            }
    })
}

module.exports = forecast