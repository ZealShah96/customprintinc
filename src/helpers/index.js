import { makeStyles } from "@material-ui/core";
import React from "react";
import CountUp from "react-countup";
import Layout from "../component/Layout";
import ShowContent from "../component/Mission";

var padding = 30;

const useStyles = makeStyles(() => ({
  content: {
    backgroundColor: "#EEEEEE",
    paddingTop: padding,
    paddingRight: padding,
    paddingBottom: padding,
    borderRadius: 30,
    // padding:10
  },
}));

let keywords = [
  "powder",
  "coating",
  "silk",
  "screening",
  "custom",
  "painting",
  "Quality",
  "service",
  "business",
  "paint",
];

export function ProcessContent(content) {
  const classes = useStyles();
  return (
    <ul className={classes.content}>
      {content.split(".").map((element, index) => {
        if (element !== "") {
          return <li>{ColorChangeOfNo(element.trim())}</li>;
        } else {
          return "";
        }
      })}
    </ul>
  );
}

export function ProcessContentWithOutStyle(content) {
  return (
    <ul>
      {content.split(".").map((element, index) => {
        if (element !== "") {
          return <li>{`${element.trim()}.`}</li>;
        } else {
          return "";
        }
      })}
    </ul>
  );
}

export function ProcessContentList(content) {
  return (
    <Layout pageName={content.pageName}>
      {content.contentList.map((element, index) => {
        return <ShowContent {...element}>{element.childrens}</ShowContent>;
      })}
    </Layout>
  );
}

export function ColorChangeOfNo(content) {

   const hoverWieght=window.innerWidth<900?11:22; 
  const useStyles = makeStyles(() => ({
    number: {
      color: "coral",
      paddingLeft: "5px",
    },
    keywords: {
      color: "coral",
      padding: "5px",
      fontWeight: "bold",

      "&:hover": {
        //   fontSize:'20px',
        //   backgroundColor:'#FDBDB0',
        transition: "all 0.5s ease-in-out",
        fontSize: hoverWieght
      },
    },
    keywordsHover: {
      color: "coral",
      padding: "5px",
      fontWeight: "bold",
      fontSize: "15px",
    },
  }));

  const classes = useStyles();
  let words = content.split(" ");
  return (
    <React.Fragment key={"WordList"}>
      {words.map((element, i) => {
        if (parseInt(element) > 50) {
          return (
            <b>
              <CountUp
                className={classes.number}
                end={parseInt(element)}
                duration={5}
                key={i}
              />
            </b>
          );
        } else if (keywords.indexOf(element.toLowerCase()) > -1) {
          return (
            <span className={classes.keywords} key={i}>{`${element
              .substring(0, 1)
              .toUpperCase()}${element.substring(1, element.length)}`}</span>
          );
        } else {
          return <React.Fragment key={i}>{" " + element}</React.Fragment>;
        }
      })}
      .
    </React.Fragment>
  );
}

export function RedirectToHomeDiv() {
  return (
    <ShowContent id="RedirectToHomeDiv">
      <a href="/"> Click Here </a> to go to Home Page again as we are developing
      this page.
    </ShowContent>
  );
}
