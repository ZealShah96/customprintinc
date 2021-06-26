import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
} from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
    textCenter: {
        textAlign: 'center',
        textAlignVertical: 'center',
        padding:'10px',
        fontSize:50

    }
}));

export default function Block() {
    const classes = useStyles();

    return (
        <Grid container xs={12} className={classes.block}>
            <Grid item xs={12} className={classes.textCenter}>
                Our Mission
            </Grid>
            <Grid item xs={12} className={classes.textCenter}>
                Creating spaces that are comfortable, memorable and inspiring.
            </Grid>
        </Grid>
    );
}
