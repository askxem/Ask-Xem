import styles from './CardBack.css'
import { Link } from 'react-router-dom'

export default function CardBack({ card }) {
    return (
        <figure>
            <h3>{card.title}</h3>
            <figcaption className={styles.definition}>
            {card.definition}
            </figcaption>
            <a href={card.source}>Source</a>
            <img
                src={`/icons/${card.animal}.png`}
                alt={card.animal}
                className={styles.image}
            />
      </figure>
    )
}
