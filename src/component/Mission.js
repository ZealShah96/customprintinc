import {
    makeStyles
} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import React from "react";
import bg2 from './../images/4.png';

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: '#F5F5F5'
    },
    textCenter: {
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 35,
        fontFamily: 'system-ui',
        fontSize: 18,
        color: 'black',
        textAlign: 'justify'
    },
    mission: {
        fontSize: 24,
        padding:35,
        fontFamily: 'system-ui'
    },
    image: {
        paddingTop: 20,
        paddingBottom: 20
    }
}));

export default function Mission(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12} container className={classes.container}>
            <Grid item xs={12} className={classes.mission}>
                Our Mission
            </Grid>
            <Grid item xs={8} className={classes.textCenter}>
                CUSTOM PAINT is one stop shop for Custom Powder Coating,
                Liquid Spray Painting, Silk Screening. Our key suppliers Prism Power, Tiger Drylac, Erie Powder, Protech Powder and TCI enables us to provide our clients with superior durable finish with unmatched timing to get the job done right every time. Custom Paint & Silk Screen Inc was established in 2001.  Our service and facility provide customers with the flexibility to meet just about any of your requirements. We are able to efficiently provide services which include powder coating, silk screening and spray painting.  We can match colors to your specifications in powder or wet paint.  Your parts are monitored throughout the production process from receiving to coating and finally, packaging.  At Custom Paint, our trained professional ensure that your parts are carefully inspected and counted to ensure the highest quality results within the customers’ demanding schedule.  Our emphasis is on producing the highest quality work possible.  The bottom line is superior finish, competitive pricing and best of all our consistent quick turn around time, which enables us to meet our customer’s demanding time schedule.  Custom is truly your one stop coating shop as we have powder coating, liquid (wet) painting, and state of the art silk screening in house.
            </Grid>
            <Grid item xs={4} className={classes.image}>
                <img src={bg2} border="0" alt="Link" />
            </Grid>
        </Grid>
    );
}
