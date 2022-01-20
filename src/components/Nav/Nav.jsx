import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { NavLink, Router } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import Journal from '../Journal/Journal.jsx';

export default function Nav() {
    const [showJournal, setShowJournal] = useState(false);
    const {user} = useAuth();

  return (
        //Nav links here!
        <nav>
          <Link to='/select'>Home Img</Link>
          <Link to='/favorites'>Heart Img</Link>
          <button onClick={() => setShowJournal(true)} disabled={!user.id}>Journal</button>
          <Journal showJournal={showJournal} setShowJournal={setShowJournal}/>
        </nav>
  );
}
