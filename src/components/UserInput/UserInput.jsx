import { div } from 'prelude-ls';
import React from 'react';
import { Card, TextField, Input, InputLabel } from '@material-ui/core';

const userInput = (props) => {
    return (
        <div>
            {/* <p>User Input</p> */}
            {/* <InputLabel style={style} className="">Username</InputLabel> */}
            {/* <Input className="" placeholder="Username"></Input> */}
            <TextField id="standard-basic" label="Username" onChange={props.replaceTeks}/>
        </div>
    );
}

export default userInput;