import * as React from 'react'
import { CityCode } from '../../interfaces'
import { WeatherState } from '../../contexts'
import { CityWeatherDisplayView } from './view'
import { CityWeatherLoadingView } from './loadingview'

interface CityWeatherDisplayProps {
  city: CityCode
}

export const CityWeatherDisplay: React.FunctionComponent<
  CityWeatherDisplayProps
> = (props: CityWeatherDisplayProps) => {
  const { weather, getWeather } = WeatherState()

  // Don't flood the API - if we have recent data, don't re-fetch it
  if (
    new Date().getTime() -
      parseInt(process.env.REACT_APP_FLOOD_TIMEOUT || '120000') >
    weather.updated_at
  )
    getWeather(props.city)

  // If we don't have data yeat, show the loading
  if (weather.city === '' || weather.city === 'Error') {
    return <CityWeatherLoadingView hasError={weather.city === 'Error'} />
  }

  // We base our styling on the weatehr condition and time of day
  const workingNumber = Math.floor(weather.condition.id / 100) * 100
  let ConditionColourTag =
    workingNumber === 800 && weather.condition.id !== 800
      ? `${weather.condition.isNight ? 'n' : 'd'}801`
      : `${weather.condition.isNight ? 'n' : 'd'}${workingNumber}`

  return (
    <CityWeatherDisplayView
      {...weather}
      ConditionColourTag={ConditionColourTag}
    />
  )
}
