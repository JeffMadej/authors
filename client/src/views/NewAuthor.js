import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import AuthorForm from '../components/AuthorForm';

const NewAuthor = () => {
    const [errors, setErrors] = useState(null);
    const createAuthor = author =>{
        axios.post('http://localhost:8000/api/author', author)
            .then(res =>{
                navigate('/');
            })
            .catch(err=>{
                console.log(err);
                const errorResponse = err.response.data.errors;
                // 
                
                setErrors(err.response.data.errors);
            })
    }
    return (
        <div>
            <Link to={`/`}>Home</Link>
            <AuthorForm errors={errors}onSubmitProp={createAuthor} initialName=""/>
            
        </div>
    )
}

export default NewAuthor;