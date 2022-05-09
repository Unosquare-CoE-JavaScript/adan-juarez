import apiKey from './apiKey'
import { Task } from './types'
import { map, compose } from 'ramda'

// pure function
const makeWeatherUrl = ({zip, apiKey}) =>
    `http://api.openweathermap.org/data/2.5.forecast?zip=${zip},us&APPID=${apiKey}`

    //private function
const fetchIt = url =>
    Task((rej, res) =>
        fetch(url)
            .then(res)
            .then(x => x.json())
            .catch(rej)
    )

const toJSON = x => x.json()
const OpenWeather = {
    fetch: compose(map(toJSON), fetchIt, makeWeatherUrl)
}

export {OpenWeather}