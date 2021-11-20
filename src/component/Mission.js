import {
    makeStyles
} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import React from "react";

const useStyles = makeStyles(() => ({
    textCenter: {
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: '10px',
        fontSize: 25,
        color: 'black'
    }
}));

export default function Links(props) {
    const classes = useStyles();


    return (
        <Grid container xs={12} className={classes.block}>
            <Grid item xs={12} className={classes.textCenter}>
                {props.header}
            </Grid>
            <Grid item xs={12} className={classes.textCenter}>
                {
                    props.linkObject.map((element, index) => {
                        return <Grid item xs={12}><a href={element.image_link} target='_blank' rel="noreferrer">
                            <img src={element.image} border="0" height="80px" alt="Link"/>
                        </a>
                        </Grid>
                    })
                }
            </Grid>
        </Grid>
    );
}
