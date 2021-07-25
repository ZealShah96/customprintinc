import * as React from "react"
import Header from "./../component/Header";
import Block from "./../component/Block";
import Grid from '@material-ui/core/Grid';
import Carousel from "./../component/Carousel";
import {
  makeStyles
} from "@material-ui/core";
import { Parallax } from "react-parallax";
import image from './../images/1.jpg';
import bg1 from './../images/2.jpg';
import Links from './../component/Links';
import './index.scss';

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
const pageStyles = {
  color: "#232129",
  paddingTop: 76,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const textStyles = {
  color: "#FFFEFE",
  paddingTop: 76,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  height: 500
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
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
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  control: {
    // padding: theme.spacing(2),
  },
  background: {
    padding: 10
    // sbackgroundColor: "#d6d6d4",
  }
}));



const image1 = image;
const image2 = bg1;

const image3 = "https://i.ibb.co/Zzc0Yc8/markus-spiske-k0r-Vud-Bo-B4c-unsplash.jpg";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

// markup
const IndexPage = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} style={pageStyles} className={'Header'}>
      <Grid item sm={12} className={classes.background}>
        <Header />
        <Carousel />
      </Grid>
      <Grid item sm={12} className={classes.background}>
        <title>Home Page</title>
      </Grid>
      {/* <Grid item sm={12} className={classes.background}>
        <Block />
      </Grid> */}
      <Grid item sm={12} className={classes.background}>
        <Parallax bgImage={image1} strength={500}>
          <div style={textStyles}>
            <Block header={'Our Mission'} message={'CUSTOM PAINT is one stop shop for Custom Powder Coating, Liquid Spray Painting, Silk Screening. Our key suppliers Prism Power, Tiger Drylac, Erie Powder, Protech Powder and TCI enables us to provide our clients with superior durable finish with unmatched timing to get the job done right every time. Custom Paint & Silk Screen Inc was established in 2001.  Our service and facility provide customers with the flexibility to meet just about any of your requirements. We are able to efficiently provide services which include powder coating, silk screening and spray painting.  We can match colors to your specifications in powder or wet paint.  Your parts are monitored throughout the production process from receiving to coating and finally, packaging.  At Custom Paint, our trained professional ensure that your parts are carefully inspected and counted to ensure the highest quality results within the customers’ demanding schedule.  Our emphasis is on producing the highest quality work possible.  The bottom line is superior finish, competitive pricing and best of all our consistent quick turn around time, which enables us to meet our customer’s demanding time schedule.  Custom is truly your one stop coating shop as we have powder coating, liquid (wet) painting, and state of the art silk screening in house.'} />
          </div>
        </Parallax>
      </Grid>
      <Grid item sm={12} className={classes.background}>
        <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
          <div style={{ height: 500 }}>
            <div style={textStyles}>Dynamic Blur</div>
          </div>
        </Parallax>
      </Grid>
      <Grid item sm={12} className={classes.background}>
        <Parallax bgImage={image2} strength={-100}>
          <div style={textStyles}>
            <Links header={'Our Suppliers'} linkObject={suppliers} />
          </div>
        </Parallax>
      </Grid>
    </Grid>
  )
}

export default IndexPage
