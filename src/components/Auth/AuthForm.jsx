import PropTypes from "prop-types"

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
    <div>
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
          <p aria-label='Password contraints'>Password must be a at least 8 characters long.</p>

          <div 
          id="toggle-password"
          aria-label={`Show password as plain text. Warning: this will display your password on the screen. Password is currently ${isPasswordVisible ? 'visible' : 'hidden'}`}
          onClick={() => setIsPasswordVisible(prevState => !prevState)}>
            { isPasswordVisible ? 'Hide Password' : 'Show Password'}
          </div>
          
          <button>{isSigningUp ? 'Create Account' : 'Login'}</button>

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