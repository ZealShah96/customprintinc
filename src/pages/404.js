import React from "react";
import { ProcessContentList, RedirectToHomeDiv } from "../helpers";
import image1 from './../images/inProgress.gif';


const content={
  pageName:"Work Under Process",
  contentList:[
      {
        subheader:'Work Under Process',
          image:image1,
          message:'"A work-in-progress generates its own energy field You, the artist or entrepreneur, are pouring love into the work; you are suffusing it with passion and intention and hope" -Steven Pressfield'
      },
      {
          childrens:RedirectToHomeDiv
      }
  ]
}


export default function ContactUs(props) {
  return <ProcessContentList {...content}/>
}

