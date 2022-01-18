// this view will give the user a chance to select their guide, and then select which board to 'play'
import { Link } from "react-router-dom" 
import bear from '../../assets/Icons/bear.png'
import axolotl from '../../assets/Icons/axolotl.png'
import bunny from '../../assets/Icons/bunny.png'
import styles from './Select.css'

export default function Select() {
//const { user } = useParams();


// if {!user} render 1 guide else render 3

  return (
    <div>
      <h1>Choose Your Guide</h1>
      
      {/* {!user ? (  <input type="radio" value={bear} name="guide" />
    <img src={bear} alt="bear" /> <input className="locked" disabled type="radio" value={axolotl} name="guide" />
    <img className={styles.locked} src={axolotl} alt="axolotl" />
    <input className="locked" disabled type="radio" value={bunny} name="guide" />
    <img className={styles.locked} src={bunny} alt="bunny" />
        ) : (
       <input type="radio" value={bear} name="guide" />
    <img src={bear} alt="bear" />
    <input type="radio" value={axolotl} name="guide" />
    <img src={axolotl} alt="axolotl" />
    <input type="radio" value={bunny} name="guide" />
    <img src={bunny} alt="bunny" />
    )} */}
  <input disabled type="radio" value={bear} name="guide" />
    <img className={styles.locked} src={bear} alt="bear" />


    <input type="radio" value={axolotl} name="guide" />
    <img src={axolotl} alt="axolotl" />


    <input type="radio" value={bunny} name="guide" />
    <img src={bunny} alt="bunny" />
  

    <h1>Choose Your Deck</h1>
    <Link to="/pronouns"><button>Pronouns Deck</button></Link>
    <Link to="/beyond"><button>Beyond Deck</button></Link>
    </div>
  )
}
