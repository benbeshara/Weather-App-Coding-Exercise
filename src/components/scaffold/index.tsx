import * as React from 'react'
import styles from './styles.module.css'

interface ScaffoldProps {
  children: React.ReactNode[]
}

export const Scaffold: React.FunctionComponent<ScaffoldProps> = (
  props: ScaffoldProps
) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.scaffold}>
          <span className={styles.title}>AusWeather</span>
          {props.children.map((child) => child)}
          <div className={styles.signature}>Ben Beshara, 2022</div>
        </div>
      </div>
    </>
  )
}
