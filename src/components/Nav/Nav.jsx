import React, { useState } from 'react';
import Journal from '../Journal/Journal.jsx';

export default function Nav() {
    const [showJournal, setShowJournal] = useState(false);
  return (
        //Nav links here!
        <article>
            <button onClick={() => setShowJournal(true)}>Journal</button>
            <Journal showJournal={showJournal} setShowJournal={setShowJournal}/>
        </article>
  );
}
