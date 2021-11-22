import React from "react";
import Layout from "../component/Layout";
import ShowContent from "../component/Mission";
import image1 from './../images/inProgress.gif';

export default function ContactUs(props) {
  return <Layout pageName={"Work Under Process"}>

    <ShowContent subheader={"Work Under Process"}
      image={image1}
      message={"\"A work-in-progress generates its own energy field You, the artist or entrepreneur, are pouring love into the work; you are suffusing it with passion and intention and hope \" -Steven Pressfield"} />
    <ShowContent><div><a href='/'> Click Here </a> to go to Home Page again as we are developing this page.</div></ShowContent>
  </Layout>
}