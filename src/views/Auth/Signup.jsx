import React from 'react'
import AuthForm from '../../components/Auth/AuthForm.jsx'
import useForm from '../../hooks/useForm.js'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext.jsx'
import styles from './AuthView.css'

export default function Signup() {
  const history = useHistory()
  const { signUp, user } = useAuth()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [{ email, password }, handleChange, error, setError] = useForm({
    email: '',
    password: '',
  })

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await signUp(email, password)
      history.push('/select')
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div className={styles.authview}>
      {!user.id && (
        <section>
          <AuthForm
            isSigningUp={true}
            email={email}
            password={password}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isPasswordVisible={isPasswordVisible}
            setIsPasswordVisible={setIsPasswordVisible}
            error={error}
          />
        </section>
      )}

      {user.id && (
        <p>
          You're already signed up! If you're ready to log out, there's a handy
          button for that up top!
        </p>
      )}
    </div>
  )
}
