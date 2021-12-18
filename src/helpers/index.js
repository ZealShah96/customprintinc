import {
    makeStyles
} from "@material-ui/core";
import React from "react";
import Layout from "../component/Layout";
import ShowContent from "../component/Mission";

var padding = 30;

const useStyles = makeStyles(() => ({
    content: {
        backgroundColor: '#EEEEEE',
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        borderRadius: 30
        // padding:10
    }
}));



export function ProcessContent(content) {
    const classes = useStyles();
    return (
        <ul className={classes.content}>
            {
                content.split('.').map((element, index) => {
                    if (element !== '') {
                        return <li>{`${element.trim()}.`}</li>
                    }
                    else {
                        return ''
                    }

                })
            }
        </ul>
    );
}

export function ProcessContentWithOutStyle(content) {
    return (
        <ul>
            {
                content.split('.').map((element, index) => {
                    if (element !== '') {
                        return <li>{`${element.trim()}.`}</li>
                    }
                    else {
                        return ''
                    }

                })
            }
        </ul>
    );
}

export function ProcessContentList(content) {
    debugger;
    return <Layout pageName={content.pageName}>
        {
            
            content.contentList.map((element, index) => {
             debugger;
                return <ShowContent {...element}>{element.childrens}</ShowContent>
            })
        }
    </Layout>
}

export function colorChangeOfNo(content) {
    return content;
}


export function RedirectToHomeDiv(){
    return <ShowContent id='RedirectToHomeDiv'><a href='/'> Click Here </a> to go to Home Page again as we are developing this page.</ShowContent>;
  }