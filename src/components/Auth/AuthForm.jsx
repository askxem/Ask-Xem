import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";



/**
 * Called within the home form on click of the login/signup button
 * @param {Boolean} isSigningUp Optional parameter. Tells component how to manage the data. 
 * @returns a form that can handle signing up and logging in.
 */
export default function AuthForm({isSigningUp=false}) {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const location = useLocation();
  const history = useHistory();

  // Pulls from obj from the private route state if it exists, otherwise use the /select path.
  const {from} = location.state || { from: { pathname: '/select'}};

  function handleSubmit (e){
    e.preventDefault();

    // Later: 
    // Update user in context
    // Make appropriate call to backend
      // isSigningUp ? /* sign up user */ : /* sign in user*/

    history.replace(from);
  }

  return (
    <div>
      <fieldset>
        <legend>{isSigningUp ? 'Sign Up' : 'Login'}</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} />

          <button>{isSigningUp ? 'Create Account' : 'Login'}</button>
        </form>
      </fieldset>
    </div>
  )
}
