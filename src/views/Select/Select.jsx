import { Link } from "react-router-dom" 
import lion from '../../assets/Icons/lion.png'
import axolotl from '../../assets/Icons/axolotl.png'
import bunny from '../../assets/Icons/bunny.png'
import { useAuth } from "../../context/AuthContext"
import styles from './Select.css'
import { useGuide } from "../../context/GuideContext/GuideContext.jsx"


export default function Select() {
  const { user } = useAuth();
  const { setGuideGlobal } = useGuide();

  return (
    <main className={styles.main}>
    <section className={styles.section}>
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
    </section>
    <div className={styles.deckchoice}>
        <h2>Choose Your Deck</h2>
        <div className={styles.deckbuttons}>
        <Link to="/pronouns">Pronouns Deck</Link>
        <Link to="/gender">Gender Deck</Link>
        </div>
      </div>

    </main>
  )
}
