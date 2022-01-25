import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'
import styles from './DeckComplete.css'
import { Link } from 'react-router-dom'

// initial state of the backdrop
const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

export default function DeckComplete({ handleClick }) {


  return (
    <AnimatePresence>
      <motion.div
        className={styles.backdrop}
        variants={backdropVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.div className={styles.completeModal}>
          <Confetti />
          <div className={styles.completedContent}>
            <div className={styles.buttonContainer}>
              <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" className={styles.exitButton} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <p>You completed the rainbow!</p>
            <p>Great job!</p>
            <p>Now would be a great time to open the journal to keep track of what you learned or how you feel. Or you can take a look at the favorites you've been saving along the way!</p>

            <div className={styles.buttonDiv}>
              <Link to={`/favorites`} className={styles.link}>Favorites</Link>
              <Link to={`/select`} className={styles.link}>Choose New Deck</Link>
            </div>
          </div>
        </motion.div>
      </motion.div>

    </AnimatePresence>
  )
}
