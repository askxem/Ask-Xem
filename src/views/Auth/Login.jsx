import React from 'react'
import AuthForm from '../../components/Auth/AuthForm.jsx'
import useForm from '../../hooks/useForm.js';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';

export default function Login() {
    const history = useHistory();
    const location = useLocation();
    const {signUp, signIn} = useAuth();
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
        <section>
            <AuthForm 
            email={email}
            password={password}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isPasswordVisible={isPasswordVisible}
            setIsPasswordVisible={setIsPasswordVisible}
            />
            <Link to='/signup'>Need an account?</Link>
        </section>
    )
}