import React from "react";
import Layout from "../component/Layout";
import ShowContent from "../component/Mission";
import image1 from './../images/inProgress.gif';

export default function ContactUs(props) {
    return <Layout pageName={"Gallary"}>
    
        <ShowContent subheader={"Gallary"}
            image={image1}
            message={"\"A work-in-progress generates its own energy field You, the artist or entrepreneur, are pouring love into the work; you are suffusing it with passion and intention and hope \" -Steven Pressfield"}/>

    </Layout>
}