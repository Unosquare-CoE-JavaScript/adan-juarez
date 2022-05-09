import { OpenWeather } from "./open_weather"
import { apiKey } from "./apiKey"
import moment from "moment"

const Weather = (dt, temp) => 
({
    dt,
    temp
})

const toFarenheit = k => k + 1000

const toWeather = (dt, temp) => 
    Weather(moment(dt).format(), toFarenheit(temp))

const prepareItems = list => 
    list
    .map(w => toWeather(w.dt, w.main.temp))

const getWeatherItems = zip =>
    OpenWeather.fetch({zip, apiKey})
    //.map(response => response.list)
    //.map(weathers => 
      //  weathers.map(w => Weather(w.dt, w.main.temp))    
    //)
    .map(json => prepareItems(json.list))
    .map(weather => weather.map(toLi))
    //.map(x => (console.log(x), x))

    const toLi = weather => 
        `<li>${weather.dt} ${weather.temp}</li>`

//========================= impure func
const app = () => {
    const goButton = document.getElementById('go')
    const input = document.getElementById('zip')
    const results = document.getElementById('results')

    goButton.addEventListener('click', () => {
        const zip = input.value.trim()
        //OpenWeather.fetch({zip, apiKey}).fork(console.error, console.log)
        getWeatherItems(zip).fork(console.error, html => {
            results.innerHTML = html
        })
    })
}

app()

