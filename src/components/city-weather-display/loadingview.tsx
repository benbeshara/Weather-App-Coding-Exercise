import * as React from 'react'
import styles from './styles.module.css'

export const CityWeatherLoadingView: React.FunctionComponent<{
  hasError: boolean
}> = (props: { hasError: boolean }) => {
  return (
    <div
      className={`${
        props.hasError
          ? styles.weatherDisplayError
          : styles.weatherDisplayLoading
      }`}
    >
      <div className={styles.weatherIconLoading} />
      <span className={styles.temperature}>--&deg;</span>
      <span className={styles.cityName}>
        {props.hasError ? `Couldn't update weather` : `-`}
      </span>
      <div className={styles.auxtemperature}>
        --&deg; {'>'} --&deg;
        <br />
        Feels like --&deg;
      </div>
    </div>
  )
}
