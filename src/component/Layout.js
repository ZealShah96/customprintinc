import { Grid, makeStyles } from "@material-ui/core";
import * as React from "react";
import { Helmet } from "react-helmet";
import Carousel from "./../component/Carousel";
import Header from "./../component/Header";
import FooterComponent from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    position: "relative",
    display: "block",
    margin: "auto",
  },
  control: {
    // padding: theme.spacing(2),
  },
  background: {
    // padding: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // display: 'flex'
    backgroundColor: "#eee",
    display: "block",
    margin: "auto",
  },
  additionToDiv: {
    paddingTop: 50,
  },
  contentBackground: {
    backgroundColor: "#eee",
  },
  contentCenter: {
    alignItems: "center",
  },
  text: {
    color: "red",
    fontSize: "50px",
  },
}));

// markup
const Layout = ({ children, pageName }) => {
  const classes = useStyles();

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Grid container className={[classes.root, "Header"]}>
        <Helmet>
          <title>{pageName}</title>
        </Helmet>
        <Grid item sm={12} className={classes.background}>
          <Header />
        </Grid>
        <Grid
          item
          sm={12}
          className={
            window.innerWidth > 900
              ? classes.additionToDiv
              : classes.additionToDiv
          }
        >
          <br />
        </Grid>
        <Grid item sm={12} className={classes.background}>
          <Carousel />
        </Grid>
        <Grid item sm={12} className={classes.background}>
          <title>{pageName}</title>
        </Grid>
        <Grid item sm={12} className={classes.background}>
          {children}
        </Grid>
        <Grid item sm={12} className={classes.background}>
          <FooterComponent />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Layout;
