import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from './Home.css'
import { useAuth } from "../../context/AuthContext";
import Footer from "../../components/Footer/Footer.jsx";

export default function Home() {
  const { user } = useAuth()

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

  const guideVariants = {
    bounce: { y: [0, -10, 0], transition: { yoyo: 10 }}
  }

  return (
    <main className={styles.main}>
      <motion.article className={styles.welcome} variants={mainVariants} initial={'initial'} animate={'animate'}> 
        <h2>Welcome to Ask Xem</h2>
        <p>Ask Xem is a place where you and your family can learn more about pronouns (how we refer to ourselves) and gender (how we see and express our genders). If you sign in, you get to choose your guide, take notes in your journal, and keep track of your favorites as you explore the site.</p>
        <div className={styles.guidecontent}>
        <motion.img         
            variants={guideVariants}
            animate={'bounce'}
            src='/icons/guide-posse.png' 
            alt='guide animals' 
            title='First tip! Can you find the rainbow!?' />
        <p>These are your guides! Xyr pronouns are xe/xem/xyr. Look to xem for helpful tips!</p> 

        </div>
      </motion.article>
      {!user.id ? <motion.div className={styles.authbuttons} variants={linkVariants} initial={'initial'} animate={'animate'}>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to='/select'>Continue as Guest</Link>
      </motion.div>
      :
      <motion.div className={styles.authbuttons} variants={linkVariants} initial={'initial'} animate={'animate'}>
      <Link to='/select'>Let's Go!</Link>
      </motion.div>}
      <Footer />
    </main>
  )
}
