import { faAirFreshener, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Box, Button, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ShowContent from "../component/Mission";
import { ProcessContentWithOutStyle as ProcessContent } from "../helpers";


const useStyles = makeStyles(() => ({
    cardWrapper: {
        borderRadius: "20px",
        // boxShadow: "2px 2px 5px gray",
        minHeight: "350px",
        // maxWidth: "250px",
        margin: 10,
        background: '#EEEEEE',
        '&:hover': {
            background: "coral",
            color:"#FFFFFF"
         },
    },
    cardContent: {
        marginTop: "10%"
    },
    cardDescription: {
        textAlign: "left",
        justifyContent: "center",
        padding: 0
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
        margin: '3%',
        marginLeft: "24%",
        borderColor: 'coral'
        // color:'coral'
        // backgroundColor:'#BDBDBD'
    },
    Link: {
        paddingBottom: 10
    }
}));

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
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
    
    return (
        <ShowContent header={'Services'} classname={'ServicesComponent'}>
            <Carousel responsive={responsive} showDots={false} autoPlay={true} infinite={true} autoPlaySpeed={3000}>
            {/* <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div> */}
            {
                cards.map((element, i) => {
                    return <Box key={i} item xs={4}>
                        <Card className={[classes.cardWrapper, 'cardWrapper']} key={i}>
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
                    </Box>
                })
            }
        </Carousel>
        </ShowContent>
        // <ShowContent header={'Services'} >
        //     <Grid xs={12} container>
        //         <Carousel responsive={responsive}>
        //             {
        //                 cards.map((element, i) => {

        //                     return <div key={i}>
        //                         <Card className={[classes.cardWrapper, 'cardWrapper']} key={i}>
        //                             <CardContent className={classes.cardContent}>
        //                                 <Avatar className={classes.cardIcon} sx={{ bgcolor: "red" }} aria-label="recipe">
        //                                     <FontAwesomeIcon icon={element.icon} />
        //                                 </Avatar>
        //                                 <Typography gutterBottom variant="h5" component="h3" className={classes.cardTitle}>
        //                                     {element.header}
        //                                 </Typography>
        //                                 <Typography className={classes.cardDescription} variant="body2" color="textSecondary" component="p">
        //                                     {ProcessContent(element.subTitle)}
        //                                 </Typography>
        //                                 <a href={element.link} className={classes.Link}><Button variant="outlined" className={classes.learnMore}>{element.buttonTitle}</Button></a>
        //                             </CardContent>
        //                         </Card>
        //                     </div>
        //                 })
        //             }
        //         </Carousel>
        //     </Grid>
        // </ShowContent>

    );
}