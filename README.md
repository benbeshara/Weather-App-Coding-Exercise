# React weather app coding exercise

Ben Beshara, 2022

## Before running or building!

- Run `npm i` to install dependancies
- Supply an OpenWeatherMap API key to the `.env` file. One can be obtained
  from https://openweathermap.org

## .env options

### REACT_APP_API_KEY

Your key for the openweathermap API

### REACT_APP_FLOOD_TIMEOUT

Limits the frequency of API updates; not used as there is no refresh button

### REACT_APP_USE_TESTDATA

Uses JSON files in the `public` directory insetad of making API calls

## Commands

### npm start

Runs the dev server on localhost:3000

### npm run build

Bundles a deployable version of the app to `build` directory
