import {
    makeStyles
} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import React from "react";
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
        color: 'coral'
    },
  suppliersData:{
    justifyContent:'center'
  }
}));

export default function Links(props) {
    const classes = useStyles();


    return (
        <Grid container xs={12} className={classes.block}>
            <Grid item xs={12} className={classes.textCenter}>
                {props.header}
            </Grid>
            <Grid item xs={12} container className={[classes.textCenter,classes.suppliersData]}>
                {/* {JSON.stringify(props.linkObject[0])} */}
                {
                    props.linkObject.map((element, index) => {
                        return <Grid item xs={2}><a href={element.image_link} target='_blank' rel="noreferrer">
                            <img src={element.image} border="0" height="80px" alt="Link"/>
                        </a>
                        </Grid>
                    })
                }
            </Grid>
        </Grid>
    );
}
