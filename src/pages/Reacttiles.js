import {
    makeStyles
} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';



const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
    },
    control: {
        // padding: theme.spacing(2),
    },
    background: {
        padding: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
        // display: 'flex'
        backgroundColor: "#eee"
    },
    contentBackground: {
        backgroundColor: "#eee"
    },
    contentCenter: {
        alignItems: 'center'
    },
    text: {
        color: 'red',
        fontSize: '50px'
    }
}));

// markup
const ReactTile = () => {
    const classes = useStyles();
    const [isFlipped, SetFlipped] = useState(false);

    return (
        <Grid item sm={12} className={classes.background} container>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div>
                    This is the front of the card.
                    <button onClick={(e)=>{e.preventDefault();SetFlipped(false)}}>Click to flip</button>
                </div>
                <div>
                    This is the back of the card.
                    <button onClick={(e)=>{e.preventDefault();SetFlipped(true)}}>Click to flip</button>
                </div>
            </ReactCardFlip>
        </Grid>
    )
}

export default ReactTile
