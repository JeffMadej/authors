import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';

const UpdateAuthor = ({id}) => {
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(res => {
            setAuthor(res.data);
            setLoaded(true);
        })
    }, [id])

    const updateAuthor = (author) => {
        axios.put(`http://localhost:8000/api/author/${id}`, author)
            .then( res =>{
                navigate('/')
            })
    }
    return(
        <div>
            <Link to={`/`}>Back</Link>
            {loaded && (
                <>
                <AuthorForm onSubmitProp={updateAuthor} initialName={author.name}/>
                </>
            )}
        </div>
    )
}

export default UpdateAuthor;