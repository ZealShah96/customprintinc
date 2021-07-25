import * as React from "react"
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid';
import Header from "./../component/Header";
import {
    makeStyles
} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Carousel from "./../component/Carousel";
import './profile.scss';

// styles
const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

const paragraphStyles = {
    marginBottom: 48,
}
const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
}

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
    },
    control: {
        // padding: theme.spacing(2),
    },
    background: {
        padding: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
        // display: 'flex'
        backgroundColor: "#eee"
    },
    contentBackground:{
        backgroundColor: "#eee"
    },
    contentCenter: {
        alignItems: 'center'
    },
    text: {
        color: 'red',
        fontSize: '50px'
    }
}));

const Content = {
    image: "",
    mainContent: '<div class="entry"><p>Custom Paint &amp; Silk Screen Inc. offers the following services to it’s customers:</p><div class="ezcol ezcol-one-half"><a title="Washing" href="http://www.custompaintinc.com/washing/"><strong>Washing</strong></a><p></p> <ul> <li>Automated 360 degree tunnel cleansing system</li> <li>Manual pressure washing</li> </ul> <p><strong><a title="Masking" href="http://www.custompaintinc.com/masking/">Masking</a><br></strong></p> <ul> <li>Precision part masking as per design specifications</li> </ul> <p><strong><a title="Liquid Paint Coating" href="http://www.custompaintinc.com/liquid-paint-coating/">Liquid Paint Coating</a><br></strong></p> <ul> <li>Electrostatic spray (wet) paint coating</li> <li>Various types of paints available</li> <li>Custom colors and textures accomodated</li> </ul> </div> <div class="ezcol ezcol-one-half ezcol-last"> <p><strong><a title="Powder Coating" href="http://www.custompaintinc.com/powder-coating/">Powder Coating</a></strong></p> <ul> <li>Manual electrostatic powder coating</li> <li>Various types of powder paints available</li> <li>Custom colors and textures accomodated</li> </ul> <p><strong><a title="Silk Screening" href="http://www.custompaintinc.com/silk-screening/">Silk Screening</a></strong></p> <ul> <li>Precision silk screening</li></ul></div><div class="ezcol-divider"></div><a title="Contact us" href="http://www.custompaintinc.com/contact-us/">Contact us</a> for Prototypes and special work.',
    title: "Profile"
}


// markup
const Services = () => {
    const classes = useStyles();
    return (
        <Grid item sm={12} className={classes.background} container className={'Profile'}>
            <head>
                <title>Profile</title>
            </head>
            <Grid item sm={12} className={classes.background}>
                <Header />
                <Carousel />
            </Grid>
            <Grid item sm={12} className={classes.background}>
                <Grid item sm={12} className={classes.text}>
                    {Content.title}
                </Grid>
                <Grid item sm={12} className={classes.content}>
                <div dangerouslySetInnerHTML={{ __html: Content.mainContent}} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Services
