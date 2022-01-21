import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './DeckComplete.css'
import { Link } from 'react-router-dom'

// initial state of the backdrop
const backdropVariants = {
  visible: {opacity: 1},
  hidden: {opacity: 0 }
}

export default function DeckComplete() {


return (
    <AnimatePresence>
        <motion.div
          className={styles.backdrop}
          variants={backdropVariants}
          initial='hidden'
          animate='visible'        
          >
            <motion.div className={styles.completeModal}>
              <div className={styles.completedContent}>
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
