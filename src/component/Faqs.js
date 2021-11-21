import React from "react";
import { makeStyles, Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import { Grid } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const data = [
    {question: "How does paint works?", description: "Just like that"},
    {question: "Why should we use it??", description: "Because it's great."}
]

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: '#F5F5F5'
    },
    questionWrapper : {
        borderRadius: "5px",
        marginBottom: "5px"
    },
    question: {
        fontSize: "14px"
    },
    description: {
        fontSize: "12px"
    }

}));

export default function Faqs() {
    const classes = useStyles();
    return (
        <>
        <Grid className={classes.container} container xs={12}>
            <Grid item xs={3}></Grid>

            <Grid item xs={6}>
                <Typography variant="h5" color="primary" align="center">FAQs </Typography>
                <>
                {
                    data.map((x, i) => {
                        return (
                            <Accordion key={i} className={classes.questionWrapper}>
                                <AccordionSummary className={classes.question} expandIcon={<FontAwesomeIcon icon={faChevronDown} />}>
                                    {x.question}
                                </AccordionSummary>
                                <AccordionDetails className={classes.description}>
                                    {x.description}
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
                </>
            </Grid>

            <Grid item xs={3}></Grid>
        </Grid>
            
        </>
    )
}