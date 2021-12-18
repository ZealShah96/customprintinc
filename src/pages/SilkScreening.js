import React from "react";
import { ProcessContentList } from "../helpers";
import image1 from './../images/SS_1.jpg';

const content={
    pageName:"Silk Screening",
    contentList:[
        {
            header:'Silk Screening',
            message:'Custom has superior Screening process which is unmatched by any of our competitor’s printing process. We have state of the art Screening exposing equipment to ensure screens are developed to produce thicker ink film thickness for sharper and more durable finish resulting in rich color. Our in house Custom screen making is compatible for variety of complicated screening which includes inside fitted screening, close to the edge screening and screening on curved surface. This in house process give us the upper edge as it allows us for better turn around time for our clients as we save time on subcontracting and transportation. To ensure precision screen printing we use one of the finest silk, smooth flowing inks and emulsion which results is finest image delivery on the end product. Our oven temperature is closely monitored from job to job ensuring proper curing for durability is maintained.'
        },
        {
            subheader:'Accuracy',
            message:'At custom we are able do multi color screening with the accuracy required in the set up to ensure all the lines and overlapping color matches up to customers standards. This is normally done when a client need to have their logo or different colored text is used in their end products.We have customized racks for storing customer’s permanent screens and artwork which we keep a detailed record to reduce turnaround times for repeat jobs.'
        },
        {
            subheader:'Areas Covered:',
            image:image1,
            message:'Control panels. Front panels. Back panels. Switch overlays. Machine components. Instrument panels. Medical, instrument chassis. Kiosks. Electronic enclosures and much more.',
        }
    ]
}

export default function SilkScreening(props) {
    return <ProcessContentList {...content}/>;
}