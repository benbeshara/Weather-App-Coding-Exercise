import { CityCode } from './interfaces'
import './App.css'
import { CityWeatherDisplay, Scaffold } from './components'

function App() {
  const widgets = []

  // We want to show all of the cities, so loop through the enum
  // The parseInt is just for type-checking - we can't cast it
  // because the enum could be a string OR number internally and
  // they're incompatible
  for (let city in CityCode) {
    if (!isNaN(parseInt(city))) {
      widgets.push(
        <CityWeatherDisplay city={parseInt(city)} key={parseInt(city)} />
      )
    }
  }

  return <Scaffold>{widgets}</Scaffold>
}

export default App
