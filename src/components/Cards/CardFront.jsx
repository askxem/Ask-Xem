
export default function CardFront({ card }) {
  return (
    <figure>
      <h3>{card.title}</h3>
      <img
          src={`../../assets/Icons/${card.animal}`}
          alt={card.animal}
          className={styles.image}
      />
    </figure>
  )
}
