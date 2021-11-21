import {
    makeStyles
} from "@material-ui/core";
import React from 'react';
import Card from "@material-ui/core/Card";
import { Avatar } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@material-ui/core";

const useStyles = makeStyles(()=>({
    cardWrapper: {
      borderRadius: "10px",
      boxShadow: "2px 2px 5px gray",
      minHeight: "300px",
      maxWidth: "250px",
      margin: 0
    },
    cardContent: {
      marginTop: "10%"
    },
    cardDescription: {
      textAlign: "center"
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
      marginLeft: "24%"
    }
}));

export default function CardItem() {
    const classes = useStyles();
  
    return (
      <Card className={classes.cardWrapper}>
        <CardContent className={classes.cardContent}>
              <Avatar className={classes.cardIcon} sx={{ bgcolor: "red"}} aria-label="recipe">
                  <FontAwesomeIcon icon={faChevronDown}/>
              </Avatar>
              <Typography gutterBottom variant="h5" component="h3" className={classes.cardTitle}>
                Masking
              </Typography>
              <Typography className={classes.cardDescription} variant="body2" color="textSecondary" component="p">
                The CardMedia component sets a background image to cover available
                space.
              </Typography>
          </CardContent>
          <Button className={classes.learnMore} variant="contained">Learn More</Button>
      </Card>
    );
  }