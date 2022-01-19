import React from 'react'
import AuthForm from '../../components/Auth/AuthForm.jsx'
import useForm from '../../hooks/useForm.js';
import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { signInUser, signUpUser } from '../../services/users.js';


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
        if (password.length <= 12) return;
        // Later: 
        // Update user in context

        // Should this be in try catch?
        // Should we handle specific errors?
        isSigningUp 
        ? signUpUser(email, password)
        : signInUser(email, password)

        history.replace(from);
    }

    function handleFormSwitch(){
        setIsSigningUp(prevState => !prevState);
        setIsPasswordVisible(false);
        const resetPassword = {
            preventDefault: () => null,
            target: {
                name: 'password',
                value: ''
            }
        }
        handleChange(resetPassword);
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
            <button onClick={handleFormSwitch}>{isSigningUp ? 'Already have an account?' : 'Need to signup?'}</button>
        </section>
    )
}
