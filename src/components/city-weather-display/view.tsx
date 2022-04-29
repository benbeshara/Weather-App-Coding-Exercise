import * as React from 'react'
import styles from './styles.module.css'
import { WeatherData } from '../../interfaces'

export const CityWeatherDisplayView: React.FunctionComponent<
  WeatherData & { ConditionColourTag: string }
> = (props: WeatherData & { ConditionColourTag: string }) => {
  return (
    <div
      className={`${styles.weatherDisplay} ${styles[props.ConditionColourTag]}`}
    >
      <img
        className={styles.weatherIcon}
        src={props.condition.icon}
        alt={props.condition.description}
      />
      <span className={styles.temperature}>{props.temp}&deg;</span>
      <span className={styles.cityName}>{props.city}</span>
      <div className={styles.auxtemperature}>
        {props.temp_min}&deg; {'>'} {props.temp_max}&deg;
        <br />
        Feels like {props.temp_feels}&deg;
      </div>
    </div>
  )
}
