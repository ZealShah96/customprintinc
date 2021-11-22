import React from "react";
import Faqs from "../component/Faqs";
import Layout from "../component/Layout";
import ShowContent from "../component/Mission";

export default function SilkScreening(props) {
    return <Layout pageName={"FAQs"}>
        <ShowContent header={'FAQs'} />
        <ShowContent><Faqs /></ShowContent>
    </Layout>
}