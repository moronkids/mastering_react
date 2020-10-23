import { div } from 'prelude-ls';
import React from 'react';
import { Card, Grid, TextField, Input, InputLabel } from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
const userOutput = (props) => {
    console.log(props)
    const style = {
        'width' : '300px',
        'padding' : '8px',
    }
    const useStyles = makeStyles(theme => ({
        marginAutoContainer: {
            width: 500,
            height: 80,
            display: 'flex',
            backgroundColor: 'gold',
        },
        marginAutoItem: {
            margin: 'auto'
        },
        alignItemsAndJustifyContent: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop : 5

        },
    }))
    const classes = useStyles()
    return (
        <div className={classes.alignItemsAndJustifyContent}>
            <Card  style={style} >
                {props.teks}
            </Card>
        </div>
    );
}

export default userOutput;