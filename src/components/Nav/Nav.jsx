import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import Journal from '../Journal/Journal.jsx';
import styles from './Nav.css'
import { motion } from 'framer-motion';

export default function Nav() {
  const [showJournal, setShowJournal] = useState(false);
  const {user, signOut} = useAuth();

  const headerVariants = {
    initial: {
        opacity: 0, 
        y: '-100vh'
    },
    animate: {
        opacity: [0, 1], 
        y: 0,
        transition: { duration: 1.2, ease: 'easeIn', type: 'spring', when: 'beforeChildren' }
    }  
}

const iconVariants = {
  initial: { scale: 0 },
  animate: { scale: [0, 1.2, 1] },
  bounce: { y: [0, -10, 0] }
}

  return (
    <motion.header variants={headerVariants} initial={'initial'} animate={'animate'}>
      <Link to='/'><h1>ask xem</h1></Link>
      {
      user.id &&
      <nav>
        <div className={styles.navicons}>
        <Link to='/select'>
          <motion.img variants={iconVariants}
            initial={'initial'}
            animate={'animate'}
            whileHover={'bounce'}
            whileFocus={'bounce'}
            src='/nav-icons/world-map.png' 
            alt="world map" 
            title='Options'/>
        </Link>
        <Link to='/favorites'>
          <motion.img variants={iconVariants}
            initial={'initial'}
            animate={'animate'}
            whileHover={'bounce'}
            whileFocus={'bounce'}
            src='/nav-icons/backpack.png' 
            alt="backpack"
            title='Favs' />
        </Link>
          <motion.img 
          variants={iconVariants}
          initial={'initial'}
          animate={'animate'}
          whileHover={'bounce'}
          whileFocus={'bounce'}
          src="/nav-icons/notebook.png" 
          alt="notebook" 
          onClick={() => setShowJournal(true)}
          title='Journal' />
        </div>
        {
          showJournal && <Journal setShowJournal={setShowJournal}/>
        }
      </nav>
      }
      
      <article>
        {
          user.id 
          ? <>
            <span>Signed in as {user.email}</span>
            <button onClick={signOut}>Sign out</button>
          </>
          : <Link to='/login'>Login</Link>
        }
      </article>
    </motion.header>
  );
}
