import { makeStyles } from "@material-ui/core";
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // requires a loader
/**
 * <img src="https://i.ibb.co/wLrQQg9/1.jpg" alt="1" border="0">
<img src="https://i.ibb.co/r3zBHJ4/2.jpg" alt="2" border="0">
<img src="https://i.ibb.co/CmnxSzg/4.jpg" alt="4" border="0">
<img src="https://i.ibb.co/mSZQqYk/logo.jpg" alt="logo" border="0">
 */
const useStyles = makeStyles(() => ({
    img: {
        width:'100%'
      }
    }));



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function Block() {
    const {
        img
      } = useStyles();
    return (
        <Carousel responsive={responsive} showDots={false} autoPlay={true} infinite={true} autoPlaySpeed={3000} arrows={false}>
            <div>
                <img src="https://i.ibb.co/wLrQQg9/1.jpg" alt="slider1" className={img}/>
            </div>
            <div>
                <img src="https://i.ibb.co/r3zBHJ4/2.jpg" alt="slider2" className={img}/>
            </div>
            <div>
                <img src="https://i.ibb.co/CmnxSzg/4.jpg" alt="slider3" className={img}/>
            </div>
        </Carousel>
    );
}
