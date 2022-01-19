import { Link } from "react-router-dom"
import CardFront from "./CardFront"
import styles from './CardList.css'

export default function CardList({ cards }) {
  return (
    <ul aria-label="cards" className={styles.list}>
      {cards && cards.map((card) => (
        <li key={card.title} className={styles.item}>
          <Link to={`/${card.category}/${card.id}`}>
            <CardFront card={card} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
