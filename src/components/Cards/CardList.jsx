import { Link } from "react-router-dom"
import CardFront from "./CardFront"
import styles from './CardList.css'
import { motion } from 'framer-motion'


export default function CardList({ cards, rainbow }) {

  const cardVariants = {
    initial: { scale: 0 },
    animate: { scale: [0, 1.5, 1] },
    bounce: { y: [0, -10, 0], transition: { yoyo: 10 }}
  }

  return (
    <>
      <ul aria-label="cards" className={styles.list}>
        {cards && cards.map((card) => (
          <motion.li 
            variants={cardVariants}
            initial={'initial'}
            animate={'animate'}
            whileHover={'bounce'}
            whileFocus={'bounce'}
            key={card.title} 
            className={styles.item}>
            <Link to={`/${card.category}/${card.id}`}>
              <CardFront card={card} />
            </Link>
          </motion.li>
        ))}
      </ul>
      {rainbow && (
        <div className={styles.rainbow}>
          {rainbow.map((color) => <img key={color} src={`/rainbow/${color}.png`} alt={color} />)}
        </div>)}
    </>
  )
}
