import {
    makeStyles
} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import React from "react";
import { ProcessContent } from "../helpers";

var ImagePadding = 75;


const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: '#F5F5F5',
        "&.contentBox ul li::before": {
            content: '"\\2022"',
            color: "coral",
            fontWeight: "bold",
            display: "inline-block",
            width: "1em",
            marginLeft: "-1em"
        },
        "&.cardWrapper ul li::before": {
            content: '"\\2022"',
            color: "coral",
            fontWeight: "bold",
            display: "inline-block",
            width: "1em",
            marginLeft: "-1em"
        },
        "&.cardWrapper ul": { listStyle: "none" },
        "& a":{
            textDecoration: 'none'
        },
       "&.contentBox ul": { listStyle: "none" }
    },
    textCenter: {
        // textAlign: 'center',
        textAlignVertical: 'center',
        padding: 35,
        paddingTop: 15,
        fontFamily: 'system-ui',
        fontSize: 18,
        // backgroundColor: '#e6e6e6',
        textAlign: 'justify',
        'ul li:before': {
            'list-style-type': '+'
        },
        "@media (max-width: 900px)": {
            padding: 2,
            fontSize:9
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
        color: 'coral',
        "@media (max-width: 900px)": {
            fontSize: 14,
            borderRadius: 15
        }
    },
    submission: {
        fontSize: 20,
        paddingTop: -5,
        paddingLeft: 35,
        fontFamily: 'system-ui',
        fontWeight: '600',
        borderRadius: 30,
        color: 'coral',
        "@media (max-width: 900px)": {
            fontSize: 10,
            borderRadius: 15,
            textAlign: 'center',
            textAlignVertical: 'center'
        }
    },
    image: {
        paddingTop: ImagePadding,
        paddingBottom: ImagePadding,
        height:'auto',
        width:'100%'
    },
    children: {
        padding: 35,
        paddingTop: 15,
        "@media (max-width: 900px)": {
            padding: 10,
        }
    }
}));

export default function ShowContent(props) {
    const classes = useStyles();
    const gridimage=window.innerWidth < 900?12:8;
    return (
        <Grid item xs={12} container className={[classes.container, (props.classname !== undefined ? props.classname : 'contentBox')]}>
            <Grid item xs={props.image ? gridimage : 12}>
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
            {props.image ? <Grid item xs={12-gridimage} className={classes.image}>
                <img src={props.image} border="0" alt="Link" height={'auto'} width={'100%'}/>
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

