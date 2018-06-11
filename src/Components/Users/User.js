import React from 'react';

const User = (props) => {
    return(
        <div>
            <p>name: {props.name} and age:{props.age}</p>
            <button onClick={props.deleteHandler}>Delete</button>
        </div>
    )
}

export default User;