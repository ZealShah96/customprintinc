import ReactDOM from 'react-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
} from "@material-ui/core";
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles(() => ({
    textCenter: {
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: '10px'
    }
}));

export default function Block() {
    const classes = useStyles();

    return (
        <Carousel showThumbs={false} showStatus={false}>
            <div>
                <img src="http://custompaintinc.com/wp-content/uploads/2014/12/slider1_02.jpg" />
               
            </div>
            <div>
                <img src="http://custompaintinc.com/wp-content/uploads/2014/12/slider1_04.jpg" />
              
            </div>
            <div>
                <img src="http://custompaintinc.com/wp-content/uploads/2014/12/slider1_01.jpg" />
                
            </div>
        </Carousel>
    );
}