import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';


const AuthorTable = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect( ()=> {
        axios.get("http://localhost:8000/api/author")
            .then(res => {
                setAuthors(res.data.sort((a1, a2) =>
                a1.name > a2.name ? 1: -1
                ));
                setLoaded(true);
            })
    }, [])
    const removeFromDom = (authorId) => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    return(
        <div>
            <Link to={`/new`}>Add New Author</Link>
            <table className="table table-dark col-5 mx-auto">
                <thead className="mx-auto">
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, idx) =>{
                        return(
                                <tr key={idx}>
                                <td>{author.name}</td>
                                <td>
                                    <Link index={author._id} to={`/update/${author._id}`}>
                                        <button className="btn btn-primary">Edit</button>
                                    </Link>
                                </td>
                                <td>
                                    <DeleteButton authorId={author._id} successCallback={()=> removeFromDom(author._id)}/>
                                </td>
                                </tr>
                        )})
                    }
                </tbody>
            </table>
        </div>
    )
}
export default AuthorTable;