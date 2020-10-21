import React from 'react';

const person = (props) => {
    return (
    <div>
        <p>Umur Paijem {Math.floor(Math.random() * 30)} dan hobinya adalah {props.hobbies} {props.children}</p>
    {/* <p>{props.children}</p> */}
    </div>
    )
}

export default person;