import {
    makeStyles
} from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Img from "gatsby-image"
import { bounce } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
// https://ibb.co/HqDMMfb
// https://ibb.co/8ctjwNk
// https://ibb.co/x8yJJWy
// https://ibb.co/VJdXVb1
// https://ibb.co/rQGLPs7

const useStyles = makeStyles(() => ({
    textCenter: {
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: '10px',
        fontSize: 25,
        color: 'black'
    }
}));

const styles = StyleSheet.create({
    bounce: {
      animationName: bounce,
      animationDuration: '1s'
    }
  })

export default function Links(props) {
    const classes = useStyles();


    return (
        <Grid container xs={12} className={classes.block}>
            <Grid item xs={12} className={classes.textCenter}>
                {props.header}
            </Grid>
            <Grid item xs={12} className={classes.textCenter}>
                {/* {JSON.stringify(props.linkObject[0])} */}
                {
                    props.linkObject.map((element, index) => {
                        return <Grid item xs={12}><a href={element.image_link} target='_blank'>
                            <img src={element.image} border="0" height="80px" />
                        </a>
                        </Grid>
                    })
                }
            </Grid>
        </Grid>
    );
}
