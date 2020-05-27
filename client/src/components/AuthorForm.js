import React, {useState} from 'react';
import { navigate } from '@reach/router';

const AuthorForm = (props) => {
    const {initialName, onSubmitProp, errors} = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        onSubmitProp({name})
    }

    const onClickHandler = (e) => {
        navigate('/');
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form-group mx-auto">
            <label>Author's Name:</label>
            <input type="text" className="form-control col-5 mx-auto" placeholder={initialName}
            onChange= {(e) =>setName(e.target.value)}/><br></br>
            <span>
                {
                    errors ? errors.name.properties.message :""
                }
            </span>
            <button 
            className="btn btn-danger"onClick={onClickHandler}>Cancel</button>
            <button type="submit" className="btn btn-dark">Submit</button>
            </div>
        </form>
    )
}

export default AuthorForm;