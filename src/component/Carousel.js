import {
    makeStyles
} from "@material-ui/core";
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles(() => ({
    textCenter: {
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: '10px'
    }
}));


/**
 * <img src="https://i.ibb.co/wLrQQg9/1.jpg" alt="1" border="0">
<img src="https://i.ibb.co/r3zBHJ4/2.jpg" alt="2" border="0">
<img src="https://i.ibb.co/CmnxSzg/4.jpg" alt="4" border="0">
<img src="https://i.ibb.co/mSZQqYk/logo.jpg" alt="logo" border="0">
 */

export default function Block() {
    const classes = useStyles();

    return (
        <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
            <div>
                <img src="https://i.ibb.co/wLrQQg9/1.jpg" alt="slider1"/>
               
            </div>
            <div>
                <img src="https://i.ibb.co/r3zBHJ4/2.jpg" alt="slider2"/>
              
            </div>
            <div>
                <img src="https://i.ibb.co/CmnxSzg/4.jpg" alt="slider3"/>
                
            </div>
        </Carousel>
    );
}
