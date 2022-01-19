// this view will give the user a chance to select their guide, and then select which board to 'play'
import { Link, useParams } from "react-router-dom" 
import lion from '../../assets/Icons/lion.png'
import axolotl from '../../assets/Icons/axolotl.png'
import bunny from '../../assets/Icons/bunny.png'
import { useAuth } from "../../context/AuthContext/AuthContext"
import styles from './Select.css'


export default function Select() {
const { user } = useAuth();

//will need to set the value of the guide
// const { guide } = useGuide();


//when I click "sign in as guest" my console is still going my email...is it reading a user?
//which wouldnt make sense
//but, it seems as though the turnary is not working
//but, it HAS worked this exact same way on other projects
//is there something I am not setting?
//I am grabbing the user from useAuth, which the useAuth context is what is setting the email...
//GRAB BY ID GODDAMMIT!

// if(user){
//   return{
//     <p>
//     <input type="radio" value={lion} name="guide" />
//     <img src={lion} alt="lion" />
//     <input type="radio" value={axolotl} name="guide" />
//     <img src={axolotl} alt="axolotl" />
//     <input type="radio" value={bunny} name="guide" />
//     <img src={bunny} alt="bunny" />
//   } else {
//     <input type="radio" value={lion} name="guide"/>
//       <img src={lion} alt="lion" />
//       <input className="locked" disabled type="radio" value={axolotl} name="guide" />
//       <img className={styles.locked} src={axolotl} alt="axolotl" />
//       <input className="locked" disabled type="radio" value={bunny} name="guide" />
//       <img className={styles.locked} src={bunny} alt="bunny" />
//   }
// }

  return (
    <>
    <section>
      <h1>Choose Your Guide</h1>
      {
      !user.id ? (
      <p>
      <input type="radio" value={lion} name="guide"/>
      <img src={lion} alt="lion" />
      <input className="locked" disabled type="radio" value={axolotl} name="guide" />
      <img className={styles.locked} src={axolotl} alt="axolotl" />
      <input className="locked" disabled type="radio" value={bunny} name="guide" />
      <img className={styles.locked} src={bunny} alt="bunny" />
      </p>
  ) : ( 
        <p>
       <input type="radio" value={lion} name="guide" />
       <img src={lion} alt="lion" />
       <input type="radio" value={axolotl} name="guide" />
       <img src={axolotl} alt="axolotl" />
       <input type="radio" value={bunny} name="guide" />
       <img src={bunny} alt="bunny" />
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
