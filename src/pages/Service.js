import {
    makeStyles
} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import * as React from "react";
import Layout from "../component/Layout";



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
    contentBackground: {
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
    mainContent: '<style>.Profile:hover {background-color:floralwhite !important;}.Profile.ezcol-one-half {width: 48% !important;}.Profile.ezcol-one-quarter, .ezcol-one-half, .ezcol-three-quarter, .ezcol-one-third, .ezcol-two-third, .ezcol-one-fifth, .ezcol-two-fifth, .ezcol-three-fifth, .ezcol-four-fifth {float: left !important;margin-right: 4% !important;position: relative !important;word-wrap: break-word !important; hyphens: auto !important; -moz-box-sizing: border-box !important; -webkit-box-sizing: border-box !important; box-sizing: border-box !important; text-rendering: optimizedLegibility !important; } .Profile.ezcol-last { float: right !important; clear: right !important; margin-right: 0 !important; } .Profile.ezcol-divider { clear: both !important; display: block !important; margin-bottom: 0px !important; padding-top: 0px !important; width: 100% !important; background: none !important; } </style><div class="entry"><p>Custom Paint &amp; Silk Screen Inc. offers the following services to it’s customers:</p><div class="ezcol ezcol-one-half"><a title="Washing" href="/washing/"><strong>Washing</strong></a><p></p> <ul> <li>Automated 360 degree tunnel cleansing system</li> <li>Manual pressure washing</li> </ul> <p><strong><a title="Masking" href="/masking/">Masking</a><br></strong></p> <ul> <li>Precision part masking as per design specifications</li> </ul> <p><strong><a title="Liquid Paint Coating" href="/liquid-paint-coating/">Liquid Paint Coating</a><br></strong></p> <ul> <li>Electrostatic spray (wet) paint coating</li> <li>Various types of paints available</li> <li>Custom colors and textures accomodated</li> </ul> </div> <div class="ezcol ezcol-one-half ezcol-last"> <p><strong><a title="Powder Coating" href="/powder-coating/">Powder Coating</a></strong></p> <ul> <li>Manual electrostatic powder coating</li> <li>Various types of powder paints available</li> <li>Custom colors and textures accomodated</li> </ul> <p><strong><a title="Silk Screening" href="/silk-screening/">Silk Screening</a></strong></p> <ul> <li>Precision silk screening</li></ul></div><div class="ezcol-divider"></div><a title="Contact us" href="/contact-us/">Contact us</a> for Prototypes and special work.',
    title: "Profile"
}


// markup
const Services = () => {
    const classes = useStyles();
    return (
        <Layout>
            <Grid item sm={12} className={classes.background}>
                <Grid item sm={12} className={classes.text}>
                    {Content.title}
                </Grid>
                <Grid item sm={12} className={classes.content}>
                    <div dangerouslySetInnerHTML={{ __html: Content.mainContent }} />
                </Grid>
            </Grid>
        </Layout>
    )
}

export default Services
