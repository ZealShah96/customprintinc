import {
    makeStyles
} from "@material-ui/core";
import React from "react";

var padding=30;

const useStyles = makeStyles(() => ({
    content: {
        backgroundColor: '#EEEEEE',
        paddingTop:padding,
        paddingRight:padding,
        paddingBottom:padding,
        borderRadius:30
       // padding:10
    }
}));



export function ProcessContent(content) {
    const classes = useStyles();
    return (
        <ul className={classes.content}>
            {
                content.split('.').map((element, index) => {
                    if(element!=''){
                        return <li>{`${element.trim()}.`}</li>
                    }
                    else{
                        return ''
                    }
                   
                })
            }
        </ul>
    );
}

export function ProcessContentWithOutStyle(content) {
    const classes = useStyles();
    return (
        <ul>
            {
                content.split('.').map((element, index) => {
                    if(element!=''){
                        return <li>{`${element.trim()}.`}</li>
                    }
                    else{
                        return ''
                    }
                   
                })
            }
        </ul>
    );
}

export function colorChangeOfNo(content) {
    return content;
}