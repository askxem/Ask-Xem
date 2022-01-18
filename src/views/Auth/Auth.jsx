import React from 'react'
import AuthForm from '../../components/Auth/AuthForm.jsx'
import useForm from '../../hooks/useForm.js';
import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Auth() {
    const history = useHistory();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [{email, password}, handleChange] = useForm({
        email: '',
        password: ''
    });

    const {from} = location.state || { from: { pathname: '/select'}};


    function handleSubmit (e){
        e.preventDefault();
        // throw an error that reads to user on form.
        if (password.length < 8) return;
        // Later: 
        // Update user in context
        // Make appropriate call to backend
          // isSigningUp ? /* sign up user */ : /* sign in user*/
        history.replace(from);
    }


    return (
        <section>
            <AuthForm 
            email={email}
            password={password}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            isSigningUp={isSigningUp}
            />
            <button onClick={() => setIsSigningUp(prevState => !prevState)}>{isSigningUp ? 'Already have an account?' : 'Need to signup?'}</button>
        </section>
    )
}
