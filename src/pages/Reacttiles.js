import React, { useState } from "react"
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid';
import Header from "./../component/Header";
import {
    makeStyles
} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Carousel from "./../component/Carousel";
import ReactCardFlip from 'react-card-flip';

// styles
const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

const paragraphStyles = {
    marginBottom: 48,
}
const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
}

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

const Content = {
    image: "",
    mainContent: 'Zeal',
    title: "React Tile Title"
}


// markup
const ReactTile = () => {
    const classes = useStyles();
    const [isFlipped, SetFlipped] = useState(false);

    return (
        <Grid item sm={12} className={classes.background} container className={'Tile'}>
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
