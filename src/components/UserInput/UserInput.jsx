import { div } from 'prelude-ls';
import React from 'react';
import { Grid, Button, Card, TextField, Input, InputLabel } from '@material-ui/core';
import { palette, spacing, typography, positions, top, right } from '@material-ui/system';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
const userInput = (props) => {
    const useStyles = makeStyles(theme => ({
        spaceInBox: {
            display: 'block'
        },
    }))
    const classes = useStyles()
    return (
        <div>
            {/* <p>User Input</p> */}
            {/* <InputLabel style={style} className="">Username</InputLabel> */}
            {/* <Input className="" placeholder="Username"></Input> */}
            {/* <Grid direction="row" className=""> */}
            <Box display="flex" justifyContent="center" m={1} p={1}>
                <Box className="" pr={3}><Button onClick={props.switch} variant="contained" className="">Switch</Button></Box>
                <Button onClick={props.reset} variant="contained" className="">Reset</Button>
            </Box>
            <Box className="" display="flex " justifyContent="center">
                <TextField id="standard-basic" label="Username" onChange={props.replaceTeks} />
            </Box>


            {/* </Grid> */}
        </div>
    );
}

export default userInput;