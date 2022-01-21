import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDeck } from '../../context/DeckContext/DeckContext.jsx'
import styles from './DeckComplete.css'

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
                <p>Now would be a great time to open the journal to keep track of what you learned or how you feel.</p>
                <div className={styles.buttonDiv}>
                <button>Journal</button>
                <button>Favorites</button>
                </div>
              </div>
            </motion.div>
        </motion.div>

    </AnimatePresence>
)
}
