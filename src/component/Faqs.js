import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Accordion, AccordionDetails, AccordionSummary, Grid, makeStyles } from '@material-ui/core';
import React from "react";

const data = [
    { question: "What is powder coating?", description: "Powder coating is a modern paint application consisting of fine dry powder pigment and resin. It is applied electro-statically to metal parts by charging the substrate and power. It then heated to a temperature of about 400°F which will cure and adhere the power to the surface. Once it is baked, it is solid as a rock and flexible at same time resulting in a beautifully smooth, highly durable finish." },
    { question: "How quick is your turn-around?", description: "In many cases our turn-around is same-day, depending on the volume, color and masking requirements. However, in general, coating may take about three to four days after the product arrives. If you are in a bind and have small job that you need to turn around in required time then we do work with our clients as we understand the importance of deadlines." },
    { question: "Are there different choice of color and powder available?", description: "At Custom Paint there are endless possibilities of colors you can get it formulated. We can match thousands of colors using our powder suppliers ranging from high, medium, and low gloss, metallic, textured, and clear powders, there is no limitation on the selection of powder. Most common and universal system we work with is RAL and PAN chart. We can also get a custom match powder from a sample chip in variety of finishes. We can match any color of your choice in 3-5 business days as we work with our suppliers very closely to achieve the best turnaround time.\n The two main types of powder are polyester and epoxy. Epoxy is best for indoor applications because, while it provides a highly durable, shiny finish, it eventually forms a dull film in reaction to direct sunlight. However, polyester does not have this problem, so is well suited to outdoor applications." },
    { question: "What is the maximum size and weight that you can powder coat?", description: "The maximum size that we can coat is 60 inches wide (centered) by 72 inches high, by 12 feet long." },
    { question: "What advantages does powder coating have over wet painting methods?", description: "Powder coating has many advantages over liquid paint applications. This includes producing a more durable and corrosion resistant finish as you can apply as thick layer of power you want unlike wet paint. Powder coating is also a more environmentally-friendly choice as it eliminates the need for an evaporating liquid paint and cleaning solvents for cleaning guns and lines. Powder coating material is free of both flammable and vaporizing components, so they do not pose a danger to us or to our environment. Also, powder coating offers many kind of finish e.g. Smooth, textured, and pebble finish. It also last much longer than liquid paint applications, and with only a single application." },
    { question: "What are some examples of powder coated items?", description: "We are surrounded by powder coated parts. Patio furniture, store shelves, fencing, automobiles, light fixtures, appliances, and bridge materials are all items that are commonly powder coated for superior corrosion resistance and durability." },
    { question: "What does your powder base consist of?", description: "We coat with polyester, polyurethane, epoxy and hybrid powders. Our process requires powder to be electro-statically applied and cured in an oven with temperatures reaching 400°F." },
    { question: "I am looking for a very specific color, how large is your selection?", description: "As custom powder coaters, we can match thousands of colors using our many powder suppliers, and our large in-stock selection. With high, medium, and low gloss, metallic, textured, and clear powders, there is no limitation on the selection of powder coating finishes available." },
    { question: "Do you do any wet painting?", description: "Yes, at Custom paint we also offer wet painting application as lot of our client still requires wet painting due to the spec or type of material being painted they are binded by the spec on the drawing. We can get any color required from a sample chip. We can spray bake enamel or air dry paint in our facility." },
    { question: "What temperature does the wet paint bake?", description: "Different paint back at different temperature. Bake enamel 300f, air dry paint can surely air dry or can be force dried at 150f." },
    { question: "What are your requirements to do the silk screening?", description: "We require 1:1 PDF file for artwork generation for silk screening application. It is customer’s responsibilities to make sure the artwork file supplied matches the part 1:1 as we can not or will not manipulate with the file. The logos and the text must be sharp and filled in as distorted images will be silk screened distorted and hollow letters will be hollow in the process. WHAT YOU SEE IS WHAT YOU GET. The silk Screening is exact copy of the artwork. We will not go ahead with silk screening or send the artwork out for artwork generation if we see a problem. We will have to go back and forth and timing will be the costing factor." },
    { question: "Can you match different types of ink for silk screening?", description: "Yes, we can get the inks matched from the PAN color chart as long as we know what substrate or color of the substrate as ink will apply on as the ink will look different from substrate to substrate." },
    { question: "Do you create the artwork in you facility and what type of file do you require?", description: "No, we have to send the art work file out to our supplier who gets the artwork generated for us. They also do not do any editing within the art work as they will print straight 1:1 output. We require corner marks or hole reference on the artwork file so we can match and line up the artwork with the part being screened. The types of files we can work from are 1:1 PDF, eps, coral draw and illustrator. Please just print the artwork file on regular printer and place it on of the part to ensure it is 1:1." }
]

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: '#F5F5F5'
    },
    questionWrapper: {
        borderRadius: "5px",
        marginBottom: "5px"
    },
    question: {
        // fontSize: "14px"
    },
    description: {
        // fontSize: "12px"
    }

}));

export default function Faqs(props) {
    const classes = useStyles();
    const filterData=props.small?data.filter((element,i)=>{if(i<4){return element}}):data;

    return (
        <>
            <Grid className={classes.container} container xs={12}>
                <Grid item xs={12}>
                    <>
                        {
                            filterData.map((x, i) => {
                                return (
                                    <Accordion key={i} className={classes.questionWrapper}>
                                        <AccordionSummary className={classes.question} expandIcon={<FontAwesomeIcon icon={faChevronDown} />}>
                                            <b>Question {i+1}:{x.question}</b>
                                        </AccordionSummary>
                                        <AccordionDetails className={classes.description}>
                                            Answer: {x.description}
                                        </AccordionDetails>
                                    </Accordion>
                                )
                            })
                        }
                    </>
                </Grid>
                <Grid item xs={12}>
                {props.small?<div><a href='/faqs'> Click Here </a> to check all other faqs.</div>:""}
                </Grid>
            </Grid>

        </>
    )
}