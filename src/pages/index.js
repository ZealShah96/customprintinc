import * as React from "react"
import Header from "./../component/Header";
import Block from "./../component/Block";
import Grid from '@material-ui/core/Grid';
import Carousel from "./../component/Carousel";
import ParallaxView from "./../component/Parallax";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Parallax } from "react-parallax";

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

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

// markup
const IndexPage = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} style={pageStyles}>
      <Grid item sm={12} className={classes.background}>
        <Header />
      </Grid>
      {/* <Grid item sm={12} >
        <Carousel />
      </Grid> */}
      <Grid item sm={12} className={classes.background}>
        <title>Home Page</title>
      </Grid>
      {/* <Grid item sm={12} className={classes.background}>
        <Block />
      </Grid> */}
      <Grid item sm={12} className={classes.background}>
        <Parallax bgImage={image1} strength={500}>
          <div style={textStyles}>
            <Block />
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
          <div style={{ height: 500 }}>
            <div style={textStyles}>Reverse direction</div>
          </div>
        </Parallax>
      </Grid>
    </Grid>
  )
}

export default IndexPage
