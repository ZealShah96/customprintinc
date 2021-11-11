import {
    makeStyles
} from "@material-ui/core";
import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import waveImg from "../images/1.jpg";

const useStyles = makeStyles(()=>{
    media: {
        height:"100px"
    }
});

export default function ImgCard() {
    const classes = useStyles();
  
    return (
      <Card>
        <CardMedia
          className={classes.media}
          image={waveImg}
          title="Paella dish"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            CardMedia Example
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The CardMedia component sets a background image to cover available
            space.
          </Typography>
        </CardContent>
      </Card>
    );
  }
  