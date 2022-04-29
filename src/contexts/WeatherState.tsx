import { useCallback, useState } from 'react'
import { getWeatherByCity } from '../api'
import { CityCode, DefaultWeatherData, WeatherDataFactory } from '../interfaces'

export const WeatherState = () => {
  const [weather, setWeather] = useState(DefaultWeatherData)

  const getWeather = useCallback(async (city: CityCode) => {
    try {
      const ret = await getWeatherByCity(city)
      const json = await ret.json()
      setWeather(WeatherDataFactory(json))
    } catch (e) {
      setWeather({
        ...DefaultWeatherData,
        city: 'Error',
        updated_at: new Date().getTime(),
      })
    }
  }, [])

  return { weather, getWeather }
}
