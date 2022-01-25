import React, { useState } from 'react'

/**
 * Called within AuthForm component. Can be used with any form component. 
 * @param {object} intialValue properties must correspond with input name attributes. 
 * @returns an array containing current form state object, a handleChange fn for inputs, an error message, and a setError message fn.
 */
export default function useForm(intialValue) {
    const [formState, setFormState] = useState({ ...intialValue });
    const [error, setError] = useState('');

    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setFormState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    return [formState, handleChange, error, setError];
}
