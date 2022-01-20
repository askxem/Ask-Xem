import React from 'react'
import AuthForm from '../../components/Auth/AuthForm.jsx'
import useForm from '../../hooks/useForm.js';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';


export default function Signup() {
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
        await signUp(email, password);
        history.replace(from);
    }

    return (
        <section>
            <AuthForm 
            isSigningUp={true}
            email={email}
            password={password}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isPasswordVisible={isPasswordVisible}
            setIsPasswordVisible={setIsPasswordVisible}
            />
            <Link to='/login'>Alright have an account?</Link>
        </section>
    )
}
