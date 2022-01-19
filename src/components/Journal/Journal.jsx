// Is going to be a modal. 
// https://www.youtube.com/watch?v=RF78mP1AMQ0


// need to implement a switch state which is true/false within the parent components to manage wether or not this is displayed.

import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Journal.css'
import { useAuth } from '../../context/AuthContext.jsx';
import { getJournal, insertJournal, updateJournal } from '../../services/journal.js';

const backdropVariants = {
    visible: {opacity: 1},
    hidden: {opacity: 0 }
}

export default function Journal({ showJournal, setShowJournal }) {
    const [journalInput, setJournalInput] = useState('')
    const {user} = useAuth();

    useEffect(() => {
        async function fetchJournal(){
            try{
                const resp = await getJournal(user.id);
                setJournalInput(resp.journal);
            } catch(e) {
                console.log(e);
                if (e.details === 'Results contain 0 rows, application/vnd.pgrst.object+json requires 1 row'){
                    const resp = await insertJournal(user.id, 'Welcome to your journal!');
                    setJournalInput(resp[0].journal);
                }
            }
        }
        
        fetchJournal();
    }, [])
    
    async function handleSubmit(e){
        e.preventDefault();
        await updateJournal(user.id, journalInput);
        setShowJournal(false);
    }

  return (
    //   allows us to animate the mounting and dismounting of nested components. 
    //  exitBeforeEnter allows all animations within the component to complete before it executes it's own.
      <AnimatePresence exitBeforeEnter>
          {
              showJournal && (
                <motion.div className={styles.backdrop} variants={backdropVariants} initial='hidden' animate='visible'>
                    {/* represents backdrop of modal. Will create the semi-transparent sheet that fades out background view.*/}
                    <motion.div className={styles.modal}>
                        <form onSubmit={handleSubmit}> 

                            <label htmlFor="journal">Journal</label>
                            <textarea 
                            id='journal' 
                            name='journal' 
                            value={journalInput} 
                            onChange={(e) => setJournalInput(e.target.value)} />

                            <button>Submit and Return to page.</button>
                        </form>
                    </motion.div>
                </motion.div>
              )}
      </AnimatePresence>
  )
}
