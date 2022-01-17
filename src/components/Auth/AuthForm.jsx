import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useForm from "../../hooks/useForm.js";



/**
 * Called within the home form on click of the login/signup button
 * @param {Boolean} isSigningUp Optional parameter. Tells component how to manage the data. 
 * @returns a form that can handle signing up and logging in.
 */
export default function AuthForm({isSigningUp=false}) {
  const [{email, password}, handleChange] = useForm({
    email: '',
    password: ''
  });
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
          <input name='email' type="email" id="email" value={email} onChange={handleChange} />

          <label htmlFor="password">Password</label>
          <input name='password' type="password" id="password" value={password} onChange={handleChange} />

          <button>{isSigningUp ? 'Create Account' : 'Login'}</button>
        </form>
      </fieldset>
    </div>
  )
}
