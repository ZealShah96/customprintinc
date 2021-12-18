import React from "react";
import { ProcessContentList } from "../helpers";
import image1 from './../images/inProgress.gif';

const content={
    pageName:"Gallary",
    contentList:[
        {
            header:'Gallary',
            image:image1,
            message:'"A work-in-progress generates its own energy field You, the artist or entrepreneur, are pouring love into the work; you are suffusing it with passion and intention and hope " -Steven Pressfield'
        }
    ]
}

export default function Gallery(props) {
    return <ProcessContentList {...content}/>
}