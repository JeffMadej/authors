import React from 'react';
import axios from 'axios';

const DeleteButton = ({authorId, successCallback}) => {
    // const {authorId, successCallback} = props;
    const deleteAuthor = () => {
        axios.delete(`http://localhost:8000/api/author/${authorId}`)
            .then( res => {
                successCallback();
            })
    }
    return (
        <button className="btn btn-danger" onClick={deleteAuthor}>
            Delete
        </button>
    )
}

export default DeleteButton;