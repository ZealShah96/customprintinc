import React from "react";
import Layout from "../component/Layout";
import ShowContent from "../component/Mission";

export default function LiquidCoating(props) {
    return <Layout pageName={"Liquid Paint"}>
        <ShowContent header={'Liquid Paint'}
            message={'Spray Painting provides the customer with an option to select various other colours and textures. Majority of these paints are either Water Bourne or Polyurethane. At Custom Paint, we apply paint with Electrostatic spray technology, which conserves paint usage, and pollution. We are able to spray paint on various types of metals and plastics to meet customer requirements.'} />

        <ShowContent subheader={"Spray Painting Process:"}
            message={'We apply air dry paints which require the use of catalyst and thinner. Once applied, we then place the parts in the oven for accelerated drying for 20 minutes at a lower temperature. When applying bake enamel, we are required to use thinner only. Once applied, these paints must be baked at 300’F for the paint to cure and harden.'} />
    </Layout>
}