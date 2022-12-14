//Adapted from dev.to Form Validation in ReactJs by CodeBucks

import React, { useState } from "react"
import {omit} from 'lodash'

const useForm = (callback) => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});



    const handleChange = (event) => {
        event.persist();
        
        let name = event.target.name;
        let val = event.target.value;

        validate(event, name, val)

        setValues({
            ...values,
            [name]:val,
        })

    }

    const handleSubmit = (event) => {
        if(event) {
            event.preventDefault();
        }

        if(Object.keys(errors).length === 0 && Object.keys(values).length !== 0){
            callback();

        }
        else{

            alert("An Error Occured");
        }


    }

    const validate = (event, name, value) => {

        switch(name){
            case 'user_search':
                if(
                    !value.match(/^[a-zA-Z0-9]+$/)
                    //!new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])$/).test(value)
                    ){
                    
                    setErrors({
                        ...errors,
                        user_search: 'Search Submission not Valid'
                    })
                }
                else{
                    let newObj = omit(errors, "user_search");
                    setErrors(newObj);
                }
                break;
            default:
                break;
        }

    }
    return{

        values,
        errors,
        handleChange,
        handleSubmit
    }
}
export default useForm
