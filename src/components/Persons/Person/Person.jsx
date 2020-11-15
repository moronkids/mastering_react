import React from 'react';
import Radium from 'radium';

import './Person.css';
const person = (props) => {

    const style = {
        '@media (max-width: 800px)' : {
            width: '300px'
        }
    }

    return (
    <div className="Person" style={style}>
        <p onClick={props.click}>Umur Paijem {Math.floor(Math.random() * 30)} dan hobinya adalah {props.hobbies} {props.children}</p>
        <input type="text" onChange={props.hobi} defaultValue={props.hobbies}/>
    {/* <p>{props.children}</p> */}
    </div>
    )
}

export default Radium(person);