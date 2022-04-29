import React, { useState } from 'react'
import { getWeatherByCity } from '../api'
import {
  CityCode,
  DefaultWeatherData,
  WeatherData,
  WeatherDataFactory,
} from '../interfaces'

// Was using contexts for a single component, but switched to
// States when I realised I'd need multiple cities displayed
// at once
export const WeatherContext = React.createContext({
  weather: DefaultWeatherData,
  getWeather: async (city: CityCode) => {},
})

export const WeatherProvider = (props: any): React.ReactElement => {
  const [weather, setWeather] = useState<WeatherData>(DefaultWeatherData)

  const getWeather = async (city: CityCode) => {
    const ret = await getWeatherByCity(city)
    const json = await ret.json()
    setWeather(WeatherDataFactory(json))
  }

  return (
    <WeatherContext.Provider value={{ weather, getWeather }}>
      {props.children}
    </WeatherContext.Provider>
  )
}
