import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import Journal from '../Journal/Journal.jsx';

export default function Nav() {
    const [showJournal, setShowJournal] = useState(false);
    const {user} = useAuth();

  return (
        //Nav links here!
        <article>
            <button onClick={() => setShowJournal(true)} disabled={!user.id}>Journal</button>
            <Journal showJournal={showJournal} setShowJournal={setShowJournal}/>
        </article>
  );
}
