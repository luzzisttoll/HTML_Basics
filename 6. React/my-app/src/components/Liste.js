import styles from './Liste.module.css'

export default function Liste(props) {
  return (
    <div className={styles.main}>{props.name}</div>
  )
}
