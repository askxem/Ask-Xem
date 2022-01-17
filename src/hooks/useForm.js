import React, { useState } from 'react'

/**
 * Called within any form component. 
 * @param {object} intialValue properties must correspond with input name attributes. 
 * @returns a current form state and handleChange fn for the input onChange attributes.
 */
export default function useForm(intialValue) {
    const [formState, setFormState] = useState({...intialValue});

    function handleChange(e){
        e.preventDefault();

        const {name, value} = e.target;

        setFormState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    return {formState, handleChange};
}
