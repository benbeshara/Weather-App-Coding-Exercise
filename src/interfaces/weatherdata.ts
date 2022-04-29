interface Condition {
  id: number
  main: string
  description: string
  icon: string
  isNight?: boolean
}

interface WeatherDataFromApi {
  coord: { long: number; lat: number }
  weather: [Condition]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    type: number
    id: number
    message: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

export enum CityCode {
  ADELAIDE = 2078025,
  CANBERRA = 2172517,
  DARWIN = 2073124,
  HOBART = 2163355,
  MELBOURNE = 2158177,
  PERTH = 2063523,
  SYDNEY = 2147714,
}

export interface WeatherData {
  city: string
  temp: number
  temp_max: number
  temp_min: number
  temp_feels: number
  condition: Condition
  updated_at: number
}

export const WeatherDataFactory = (data: WeatherDataFromApi): WeatherData => {
  return {
    city: data.name,
    temp: Math.round(data.main.temp),
    temp_min: Math.round(data.main.temp_min),
    temp_max: Math.round(data.main.temp_max),
    temp_feels: Math.round(data.main.feels_like),
    condition: {
      ...data.weather[0], // Why does the API return this as an array?
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      isNight: data.weather[0].icon.includes('n'),
    },
    updated_at: new Date().getTime(),
  }
}

// Sane defaults, will know very quickly if something is wrong
export const DefaultWeatherData: WeatherData = {
  city: '',
  temp: -1,
  temp_max: -1,
  temp_min: -1,
  temp_feels: -1,
  condition: {
    id: -1,
    main: '',
    description: '',
    icon: '',
  },
  updated_at: -1,
}
