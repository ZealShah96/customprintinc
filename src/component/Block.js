import {
    makeStyles,
} from "@material-ui/core";
import React from "react";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(() => ({
    textCenter: {
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: '10px',
        fontSize: 25,
        color:'black'
    }
}));

export default function Block(props) {
    const classes = useStyles();
    const {header,message}=props;
    return (
        <Grid container xs={12} className={classes.block}>
            <Grid item xs={12} className={classes.textCenter}>
              {header}
            </Grid>
            <Grid item xs={12} className={classes.textCenter}>
             {message}
            </Grid>
        </Grid>
    );
}
