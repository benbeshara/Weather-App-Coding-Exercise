export const getWeatherByCity = async (city: number) => {
  // The API Key really shouldn't be exposed in the front-end like this,
  // but this is just for the purposes of the coding exercise

  // We only make one API call so we don't need to abstract this further
  if (
    process.env.REACT_APP_USE_TESTDATA &&
    process.env.REACT_APP_USE_TESTDATA === 'true'
  ) {
    console.log(`Using Test Data for ${city}`)
    return await fetch(`mockData/${city}.json`)
  }

  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  )
}
