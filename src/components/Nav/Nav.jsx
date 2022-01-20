import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { NavLink, Router } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import Journal from '../Journal/Journal.jsx';

export default function Nav() {
  const [showJournal, setShowJournal] = useState(false);
  const {user, signOut} = useAuth();

  return (
    <>
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
          ? <div>
            <p>Signed in as {user.email}</p>
            <button onClick={signOut}>Signout</button>
          </div>
          : <div>
            <Link to='/login'>Login</Link>
            <p>Login to unlock a journal, favorites, and more guides!</p>
          </div> 
        }
      </article>
    </>
  );
}
