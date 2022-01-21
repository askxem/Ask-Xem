import { Link } from "react-router-dom" 
import lion from '../../assets/Icons/lion.png'
import axolotl from '../../assets/Icons/axolotl.png'
import bunny from '../../assets/Icons/bunny.png'
import { useAuth } from "../../context/AuthContext"
import styles from './Select.css'
import { useGuide } from "../../context/GuideContext/GuideContext.jsx"
import { motion } from "framer-motion"

const guideVariants = {
  initial: {
      opacity: 0, 
      x: '-100vw'
  },
  animate: {
      opacity: [0, 1], 
      x: 0,
      transition: { delay: .5, duration: .5 }
  }  
}

const linkVariants = {
  initial: {
      opacity: 0, 
      y: '+100vh'
  },
  animate: {
      opacity: [0, 1], 
      y: 0,
      transition: { delay: .5, duration: .5 }
  }  
}

export default function Select() {
  const { user } = useAuth();
  const { setGuideGlobal } = useGuide();

  return (
    <main className={styles.main}>
    <motion.section className={styles.section} variants={guideVariants} initial={'initial'} animate={'animate'}>
      <h2>Choose Your Guide</h2>
      {
      !user.id ? (
      <div className={styles.guidechoice}>
        <label>
        <input type="radio" value={lion} name="guide"/>
        <img src={lion} alt="lion" />
        </label>
        <input className="locked" disabled type="radio" value={axolotl} name="guide" />
        <img className={styles.locked} src={axolotl} alt="axolotl" />
        <input className="locked" disabled type="radio" value={bunny} name="guide" />
        <img className={styles.locked} src={bunny} alt="bunny" />
      </div>
  ) : ( 
        <div className={styles.guidechoice}>
          <label>
        <input type="radio" value={'lion'} name="guide" onClick={setGuideGlobal} />
        <img src={lion} alt="lion" />
        </label>
        <label>
        <input type="radio" value={'axolotl'} name="guide" onClick={setGuideGlobal} />
        <img src={axolotl} alt="axolotl" />
        </label>
        <label>
        <input type="radio" value={'bunny'} name="guide" onClick={setGuideGlobal} />
        <img src={bunny} alt="bunny" />
        </label>
       </div>
  )
  
    }
    </motion.section>
    <motion.section className={styles.deckchoice} variants={linkVariants} initial={'initial'} animate={'animate'}>
      <h2>Choose Your Deck</h2>
        <div className={styles.deckbuttons}>
          <Link to="/pronouns">Pronouns Deck</Link>
          <Link to="/gender">Gender Deck</Link>        
        </div>
      </motion.section>
    </main>
  )
}
