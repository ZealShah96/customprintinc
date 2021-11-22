import { faAirFreshener, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Button, Grid, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from 'react';
import { ProcessContentWithOutStyle as ProcessContent } from "../helpers";
import './CardList.css';
import ShowContent from './Mission';

const useStyles = makeStyles(() => ({
    cardWrapper: {
        borderRadius: "20px",
        // boxShadow: "2px 2px 5px gray",
        minHeight: "350px",
        maxWidth: "250px",
        margin: 10,
        background:'#EEEEEE',
        // '&:hover': {
        //     background: "coral",
        //     color:"#FFFFFF"
        //  },
    },
    cardContent: {
        marginTop: "10%"
    },
    cardDescription: {
        textAlign: "left",
        justifyContent:"center",
        padding:0
    },
    cardTitle: {
        textAlign: "center",
        marginTop: "10px"
    },
    cardIcon: {
        margin: "auto"
    },
    learnMore: {
        alignSelf: "center",
        margin:'3%',
        marginLeft: "24%",
        borderColor:'coral'
        // color:'coral'
        // backgroundColor:'#BDBDBD'
    },
    Link:{
        paddingBottom:10
    }
}));


const cards = [
    {
        icon: faCoffee,
        header: "Washing",
        subTitle: "Automated 360 degree tunnel cleansing system. Manual pressure washing.",
        link: "/Washing",
        buttonTitle: "Read More"
    },
    {
        icon: faAirFreshener,
        header: "Masking",
        subTitle: "Precision part masking as per design specifications.",
        link: "/Masking",
        buttonTitle: "Read More"
    },
    {
        icon: faCoffee,
        header: "Liquid Paint Coating",
        subTitle: "Electrostatic spray (wet) paint coating.Various types of paints available. Custom colors and textures accomodated",
        link: "/LiquidCoating",
        buttonTitle: "Read More"
    },
    {
        icon: faAirFreshener,
        header: "Powder Coating",
        subTitle: "Manual electrostatic powder coating.Various types of powder paints available.Custom colors and textures accomodated.",
        link: "/PowderCoating",
        buttonTitle: "Read More"
    },
    {
        icon: faAirFreshener,
        header: "Silk Screening",
        subTitle: "Precision silk screening.",
        link: "/SilkScreening",
        buttonTitle: "Read More"
    }
];

export default function CardList(props) {
    const classes = useStyles();
    debugger;
    return (
        <ShowContent header={'Services'} >
            <Grid xs={12} container>
                {
                    cards.map(element => {
                        return <Grid item xs={3} >
                            <Card className={[classes.cardWrapper,'cardWrapper']} >
                                <CardContent className={classes.cardContent}>
                                    <Avatar className={classes.cardIcon} sx={{ bgcolor: "red" }} aria-label="recipe">
                                        <FontAwesomeIcon icon={element.icon} />
                                    </Avatar>
                                    <Typography gutterBottom variant="h5" component="h3" className={classes.cardTitle}>
                                        {element.header}
                                    </Typography>
                                    <Typography className={classes.cardDescription} variant="body2" color="textSecondary" component="p">
                                        {ProcessContent(element.subTitle)}
                                    </Typography>
                                    <a href={element.link} className={classes.Link}><Button variant="outlined" className={classes.learnMore}>{element.buttonTitle}</Button></a>
                                </CardContent>
                              
                            </Card>
                        </Grid>
                    })
                }
            </Grid>
        </ShowContent>

    );
}