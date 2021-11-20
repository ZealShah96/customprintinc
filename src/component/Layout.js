import {
    makeStyles
} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import * as React from "react";
import Carousel from "./../component/Carousel";
import Header from "./../component/Header";
import FooterComponent from "./Footer";

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
    },
    control: {
        // padding: theme.spacing(2),
    },
    background: {
        // padding: 10,
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


// markup
const Layout = ({ children, pageName }) => {
    debugger;
    const classes = useStyles();
    return (
        <Grid container className={classes.root}  className={'Header'}>
            <Grid item sm={12} className={classes.background}>
                <Header />
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
        </Grid>)
}

export default Layout
