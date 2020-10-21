import React from 'react';
import './Person.css'
const person = (props) => {
    return (
    <div className="Person">
        <p onClick={props.click}>Umur Paijem {Math.floor(Math.random() * 30)} dan hobinya adalah {props.hobbies} {props.children}</p>
        <input type="text" onChange={props.hobi} defaultValue={props.hobbies}/>
    {/* <p>{props.children}</p> */}
    </div>
    )
}

export default person;