import {
    makeStyles
} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import React from "react";
import { ProcessContent } from "../helpers";
import './Mission.css';

var ImagePadding = 75;


const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: '#F5F5F5'
    },
    textCenter: {
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 35,
        paddingTop: 15,
        fontFamily: 'system-ui',
        fontSize: 18,
        // backgroundColor: '#e6e6e6',
        textAlign: 'justify',
        'ul li:before': {
            'list-style-type': '+'
        }
    },
    mission: {
        fontSize: 28,
        paddingTop: 15,
        paddingLeft: 35,
        fontFamily: 'system-ui',
        fontWeight: '600',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 30,
        color: 'coral'
    },
    submission: {
        fontSize: 20,
        paddingTop: -5,
        paddingLeft: 35,
        fontFamily: 'system-ui',
        fontWeight: '600',
        // textAlign: 'center',
        // textAlignVertical: 'center',
        borderRadius: 30,
        color: 'coral'
    },
    image: {
        paddingTop: ImagePadding,
        paddingBottom: ImagePadding
    },
    children:{
        padding: 35,
        paddingTop: 15
    }
}));

export default function ShowContent(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12} container className={[classes.container, 'contentBox']}>
            <Grid item xs={props.image ? 8 : 12}>
                {props.header ? <Grid item xs={12} className={classes.mission}>
                    {props.header}
                </Grid> : ""}
                {
                    props.subheader ? <Grid item xs={12} className={classes.submission}>
                        {props.subheader}
                    </Grid> : ""
                }
                {props.message ? <Grid item xs={12} className={classes.textCenter}>
                    {ProcessContent(props.message)}
                    {/*  */}
                </Grid> : ""}
            </Grid>
            {props.image ? <Grid item xs={4} className={classes.image}>
                <img src={props.image} border="0" alt="Link" />
            </Grid> : ""}
            {props.children ? <Grid item xs={12} className={classes.children}>
                {props.children}
            </Grid> : ""}
        </Grid>
    );
}

// function ProcessContent(content) {
//     return (<ol>

//         {
//             content.split('.').map((element, index) => {
//                 return <li>{element}<li>
//                     })
//                 }
//                 </ol>);



// }

