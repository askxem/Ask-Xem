import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { NavLink, Router } from 'react-router-dom';
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

  return (
    <motion.header variants={headerVariants} initial={'initial'} animate={'animate'}>
      <Link to='/'><h1>ask xem</h1></Link>
      {
      user.id &&
      <nav>
        <Link to='/select'>
          <img src='/nav-icons/world-map.png' alt="world map" />
        </Link>
        <Link to='/favorites'>
          <img src='/nav-icons/backpack.png' alt="backpack" />
        </Link>
        <img src="/nav-icons/notebook.png" alt="notebook" onClick={() => setShowJournal(true)} />
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
            <button onClick={signOut}>Signout</button>
          </>
          : <Link to='/login'>Login</Link>
        }
      </article>
    </motion.header>
  );
}
