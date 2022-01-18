import { useHistory, useLocation } from "react-router-dom";
import useForm from "../../hooks/useForm.js";
import { useState } from "react";



/**
 * Called within the home form on click of the login/signup button
 * @param {Boolean} isSigningUp Optional parameter, defeaults to false. Tells component how to manage the data. 
 * @returns a form that can handle signing up and logging in.
 */
export default function AuthForm({isSigningUp=false}) {
  const [{email, password}, handleChange] = useForm({
    email: '',
    password: ''
  });
  const [formSwitch, setFormSwitch] = useState(isSigningUp);
  const location = useLocation();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);


  const {from} = location.state || { from: { pathname: '/select'}};


  function handleSubmit (e){
    e.preventDefault();
    // Later: 
    // Update user in context
    // Make appropriate call to backend
      // isSigningUp ? /* sign up user */ : /* sign in user*/
    history.replace(from);
  }


  function switchForm(){
    setFormSwitch(prevState => !prevState);
  }

  function handleShowPassword(){
    setShowPassword(prevState => !prevState);
  }


  return (
    <div>
      <fieldset>
        <legend>{formSwitch ? 'Sign Up' : 'Login'}</legend>
        <form onSubmit={handleSubmit}>

          <label htmlFor="email">Email</label>
          <input name='email' type="email" id="email" value={email} onChange={handleChange} required />

          <label htmlFor="password">Password</label>
          <input name='password' type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={handleChange} required />
          <div 
          id="toggle-password"
          aria-label={`Show password as plain text. Warning: this will display your password on the screen. Password is currently ${showPassword ? 'visible.' : 'hidden.'}`}
          onClick={handleShowPassword}>
            { showPassword ? 'Hide Password' : 'Show Password'}
          </div>
          

          <button>{formSwitch ? 'Create Account' : 'Login'}</button>

        </form>
      </fieldset>

      <button onClick={switchForm}>{formSwitch ? 'Already have an account?' : 'Need to signup?'}</button>
    </div>
  )
}
