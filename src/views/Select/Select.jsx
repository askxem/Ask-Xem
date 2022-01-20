// this view will give the user a chance to select their guide, and then select which board to 'play'
import { Link, useParams } from "react-router-dom" 
import lion from '../../assets/Icons/lion.png'
import axolotl from '../../assets/Icons/axolotl.png'
import bunny from '../../assets/Icons/bunny.png'
import { useAuth } from "../../context/AuthContext"
import styles from './Select.css'
import { useGuide } from "../../context/GuideContext/GuideContext.jsx"


export default function Select() {
  const { user } = useAuth();
  const { guide, setGuideGlobal } = useGuide();

  return (
    <>
    <section>
      <h1>Choose Your Guide</h1>
      {
      !user.id ? (
      <p>
      <label>
      <input type="radio" value={lion} name="guide"/>
      <img src={lion} alt="lion" />
      </label>
      <input className="locked" disabled type="radio" value={axolotl} name="guide" />
      <img className={styles.locked} src={axolotl} alt="axolotl" />
      <input className="locked" disabled type="radio" value={bunny} name="guide" />
      <img className={styles.locked} src={bunny} alt="bunny" />
      </p>
  ) : ( 
        <p>
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
       </p>
  )
    }
    </section>
    <h1>Choose Your Deck</h1>
    <Link to="/pronouns"><button>Pronouns Deck</button></Link>
    <Link to="/gender"><button>Gender Deck</button></Link>

    </>
  )
}
