import React from 'react'
import AuthForm from '../../components/Auth/AuthForm.jsx'
import useForm from '../../hooks/useForm.js';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import styles from './AuthView.css'

export default function Signup() {
    const history = useHistory();
    const location = useLocation();
    const {signUp, user} = useAuth();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [{email, password}, handleChange] = useForm({
        email: '',
        password: ''
    });

    async function handleSubmit (e){
        e.preventDefault();
        await signUp(email, password);
        history.push('/select');
    }

    return (
        <div className={styles.authview}>
        {!user.id && <section>
            <AuthForm 
            isSigningUp={true}
            email={email}
            password={password}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isPasswordVisible={isPasswordVisible}
            setIsPasswordVisible={setIsPasswordVisible}
            />
            
        </section>}

        {user.id && <p>You're already signed up! If you're ready to log out, there's a handy button for that up top!</p>}
        </div>
    )
}
