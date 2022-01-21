import React from 'react'
import AuthForm from '../../components/Auth/AuthForm.jsx'
import useForm from '../../hooks/useForm.js';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import styles from './AuthView.css'


export default function Login() {
    const history = useHistory();
    const location = useLocation();
    const {signIn, user} = useAuth();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [{email, password}, handleChange] = useForm({
        email: '',
        password: ''
    });

    const {from} = location.state || { from: { pathname: '/select'}};

    async function handleSubmit (e){
        e.preventDefault();
        await signIn(email, password);
        history.replace(from);
    }

    return (
        <div className={styles.authview}>
        {!user.id && <section>
            <AuthForm 
            email={email}
            password={password}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isPasswordVisible={isPasswordVisible}
            setIsPasswordVisible={setIsPasswordVisible}
            />
        </section>}

        {user.id && <p>You're already logged in! If you're ready to log out, there's a handy button for that up top!</p>}
        </div>
    )
}
