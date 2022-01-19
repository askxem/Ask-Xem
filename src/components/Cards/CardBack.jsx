import styles from './CardBack.css'

export default function CardBack({ card }) {
    return (
        <div className={styles.container}>
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
      </div>
    )
}
