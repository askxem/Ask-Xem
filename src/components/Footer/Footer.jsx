import styles from './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className={styles.footerDiv}>
      <Link to={'/about'}>meet the Ask Xem team</Link>
    </div>
  )
}
