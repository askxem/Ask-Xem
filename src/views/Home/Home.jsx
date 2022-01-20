import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from './Home.css'
import { useAuth } from "../../context/AuthContext";

export default function Home() {
  const user = useAuth()

  const mainVariants = {
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

  return (
    <main className={styles.main}>
      <motion.article className={styles.welcome} variants={mainVariants} initial={'initial'} animate={'animate'}> 
        <h2>Welcome to Ask Xem</h2>
        <p>Ask Xem is a place where you and your family can learn more about pronouns (how we refer to ourselves) and gender (how we see and express our genders).</p> 
        <p>If you sign in, you get to choose your guide, take notes in your journal, and keep track of your favorites as you explore the site. These are your guides! Xyr pronouns are xe/xem/xyr. Look to xem for helpful tips!</p> 
      </motion.article>
      <div className={styles.authbuttons}>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to='/select'>Continue as Guest</Link>
      </div>
    </main>
  )
}
