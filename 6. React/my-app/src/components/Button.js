import React, { useState } from 'react'
import styles from './Button.module.css'

export default function Button(props) {
  const [isOn, setIsOn] = useState();
  return (
    <div className={styles.main}>
      <div
        className={isOn ? styles.isOn : styles.isOff}
        onClick={() => {
          setIsOn(!isOn);
        }}>{props.name} is {props.age} years old and is {isOn ? "On" : "Off"}</div>
    </div>
  )
}
