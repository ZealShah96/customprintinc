import {
  makeStyles
} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import * as React from "react";
import { Parallax } from "react-parallax";
import Faqs from "../component/Faqs";
import Layout from "../component/Layout";
import Mission from "../component/Mission";
import Links from './../component/Links';
import image from './../images/1.png';
import bg1 from './../images/2.png';
import bg2 from './../images/3.png';

/**
 * <img src="https://i.ibb.co/wLrQQg9/1.jpg" alt="1" border="0">
<img src="https://i.ibb.co/r3zBHJ4/2.jpg" alt="2" border="0">
<img src="https://i.ibb.co/CmnxSzg/4.jpg" alt="4" border="0">
<img src="https://i.ibb.co/mSZQqYk/logo.jpg" alt="logo" border="0">
 */
const suppliers = [
  {
    "image_link": "http://www.prismpowder.com/",
    "image": 'https://i.ibb.co/x6ScctB/p1.jpg',
    "alt": "Prism powder coatings ltd."
  },
  {
    "image_link": "http://www.tiger-coatings.us/",
    "image": 'https://i.ibb.co/df039gW/tiger-drylac-powder-coatings.jpg',
    "alt": "Tiger Drylac Powder Coatings"
  },
  {
    "image_link": "http://www.sherwin-williams.com/",
    "image": 'https://i.ibb.co/yS78Cd2/sherwin-williams.jpg',
    "alt": "Sherwin-Williams"
  },
  {
    "image_link": "http://www.protechpowder.com/",
    "image": 'https://i.ibb.co/NtXwxfv/the-protech-group.jpg',
    "alt": "Protech Oxyplast"
  },
  {
    "image_link": "http://www.tcipowder.com/",
    "image": 'https://i.ibb.co/84J66qJ/tci-powder-coatings.jpg',
    "alt": "TCI Powder Coatings"
  }
]

// styles
const textStyles = {
  color: "#FFFEFE",
  paddingTop: 76,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  height: 500
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
    img: {
      opacity: 0.6
    }
    // sbackgroundColor: "#d6d6d4",
  },
  suppliers: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center'
  }
}));



const image1 = image;
const image2 = bg1;
const image3 = bg2;


// markup
const IndexPage = () => {
  const classes = useStyles();
  return (
    <Layout pageName={"Home Page"}>
      <Grid item sm={12} className={classes.background}>
        <title>Home Page</title>
      </Grid>
      <Grid item sm={12} className={classes.background}>
          <Mission />
          {/* <Block header={'Our Mission'} message={'CUSTOM PAINT is one stop shop for Custom Powder Coating, Liquid Spray Painting, Silk Screening. Our key suppliers Prism Power, Tiger Drylac, Erie Powder, Protech Powder and TCI enables us to provide our clients with superior durable finish with unmatched timing to get the job done right every time. Custom Paint & Silk Screen Inc was established in 2001.  Our service and facility provide customers with the flexibility to meet just about any of your requirements. We are able to efficiently provide services which include powder coating, silk screening and spray painting.  We can match colors to your specifications in powder or wet paint.  Your parts are monitored throughout the production process from receiving to coating and finally, packaging.  At Custom Paint, our trained professional ensure that your parts are carefully inspected and counted to ensure the highest quality results within the customers’ demanding schedule.  Our emphasis is on producing the highest quality work possible.  The bottom line is superior finish, competitive pricing and best of all our consistent quick turn around time, which enables us to meet our customer’s demanding time schedule.  Custom is truly your one stop coating shop as we have powder coating, liquid (wet) painting, and state of the art silk screening in house.'} /> */}
      </Grid>
      <Grid item sm={12} className={classes.background}>
        <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
          <div style={{ height: 500 }}>
            <div style={textStyles}>Needed to decide what you want here.</div>
          </div>
        </Parallax>
      </Grid>
      <Grid item sm={12} className={classes.background}>
        <Parallax bgImage={image2} strength={300} className={classes.suppliers}>
          <div style={textStyles}>
            <Links header={'Our Suppliers'} linkObject={suppliers} className={[classes.suppliersData, 'suppliersData']} />
          </div>
        </Parallax>
      </Grid>
      <Grid item sm={12} className={classes.background}>
        <Faqs />
      </Grid>
    </Layout>
  )
}

export default IndexPage
