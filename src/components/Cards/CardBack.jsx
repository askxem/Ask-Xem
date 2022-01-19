import styles from './CardBack.css'

export default function CardBack({ card }) {
    return (
        <figure>
            <h3>{card.title}</h3>
            <figcaption className={styles.definition}>
            {card.definition}
            </figcaption>
            <Link to={card.source}><p>Source</p></Link>
            <img
                src={`../../assets/Icons/${card.animal}`}
                alt={card.animal}
                className={styles.image}
            />
      </figure>
    )
}
