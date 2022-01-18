import React from 'react'
import AuthForm from '../../components/Auth/AuthForm.jsx'
import useForm from '../../hooks/useForm.js';
import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Auth() {
    const history = useHistory();
    const location = useLocation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
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
            isSigningUp={isSigningUp}
            email={email}
            password={password}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isPasswordVisible={isPasswordVisible}
            setIsPasswordVisible={setIsPasswordVisible}
            />
            <button onClick={() => setIsSigningUp(prevState => !prevState)}>{isSigningUp ? 'Already have an account?' : 'Need to signup?'}</button>
        </section>
    )
}
