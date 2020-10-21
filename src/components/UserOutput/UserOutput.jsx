import { div } from 'prelude-ls';
import React from 'react';
import { Card, Grid, TextField, Input, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
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

            height: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop : 50
            
        },
    }))
    const classes = useStyles()
    return (
        <div className={classes.alignItemsAndJustifyContent}>
            <Card  style={style} >
                <p>{props.teks == 'Risma ihik kuy!' || props.teks == '' ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquam nesciunt voluptatibus nulla obcaecati aliquid molestiae ipsa id, voluptatem tempora a harum deleniti officia unde nisi corporis nemo omnis ipsum.' : props.teks}</p>
            </Card>
        </div>
    );
}

export default userOutput;