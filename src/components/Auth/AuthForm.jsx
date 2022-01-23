import PropTypes from "prop-types"
import CoppaDisclaimer from "./CoppaDisclaimer.jsx"
import { Link } from "react-router-dom"
import styles from './AuthForm.css'

/**
 * Called within the auth view/container component
 * @param {Boolean} isSigningUp Optional parameter, defeaults to false. Tells component how to manage the data. 
 * @returns a form that can handle signing up and logging in.
 */
export default function AuthForm({
  isSigningUp=false,
  email,
  password, 
  handleChange, 
  handleSubmit,
  isPasswordVisible,
  setIsPasswordVisible}) {

  return (
    <div className={styles.formcontainer}>
      <fieldset>
        <legend>{isSigningUp ? 'Sign Up' : 'Login'}</legend>
        <form onSubmit={handleSubmit}>

          <label htmlFor="email">Email</label>
          <input 
          name='email' 
          type="email" 
          id="email" 
          value={email} 
          onChange={handleChange} 
          autoComplete="email" 
          required 
          />

          <label htmlFor="password">Password</label>
          <input 
          name='password'
          id="password"
          value={password}
          onChange={handleChange} 
          type={isPasswordVisible ? 'text' : 'password'} 
          autoComplete={isSigningUp ? 'new-password' : 'current-password'} 
          required 
          />
          
          <div className={styles.pwtoggle}
          id="toggle-password"
          aria-label={`Show password as plain text. Warning: this will display your password on the screen. Password is currently ${isPasswordVisible ? 'visible' : 'hidden'}`}
          onClick={() => setIsPasswordVisible(prevState => !prevState)}>
            { isPasswordVisible ? 'Hide Password' : 'Show Password'}
          </div>

          {
            isSigningUp && <p aria-label='Password contraints'>{password.length >= 12 ? '🟢 Password must be at least 12 characters long.' : '🔴 Password must be at least 12 characters long.'}</p>
          }
          
          {
            isSigningUp
            ? (<>
              <CoppaDisclaimer />
              <button disabled={password.length < 12}>Create Account</button>
              <Link to='/login'>Already have an account?</Link>
            </>)
            : 
            <>
              <button>Login</button>
              <Link to='/signup'>Need an account?</Link>
            </>
          }
          
        </form>
      </fieldset>


    </div>
  )
}

AuthForm.propTypes = {
  isSigningUp: PropTypes.bool,
  email: PropTypes.string,
  password: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  isPasswordVisible: PropTypes.bool,
  setIsPasswordVisible: PropTypes.func
}