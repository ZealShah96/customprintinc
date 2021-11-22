import React from "react";
import Layout from "../component/Layout";
import ShowContent from "../component/Mission";
import MissionImage from './../images/4.png';

export default function Masking(props) {
    return <Layout pageName={"Masking"}>
        <ShowContent header={'Masking'}
            message={'At Custom we have all variety of plugs, caps, dots and tapes for power and paint to take care of all of our customers masking needs.  Often, customers require certain areas of a part that do not require painting.  In this case various types of masking is required to ensure that when the part gets painted, those certain areas that were masked, are not covered in powder or paint.'} />

        <ShowContent subheader={"Knowledge"}
            image={MissionImage}
            message={'Our management team has a diverse knowledge of the industry, and is able to solve your most difficult painting and masking needs. Their knowledge has transferred to the rest of the staff, who are always ready to service as per customer’s requirements.   If our staff comes across a problem or notices a problem like hardware missing, plating coming off then management will be notified and in turn customer will be contacted to ensure quality from the metal fabricator’s side.  This is something our customer really appreciates as their mistakes are sometimes realized and fixed without going into any time delay or rework cost.'} />

        <ShowContent subheader={"Exprience"}
            message={'Our experienced and trained staff has good attention to detail to ensure the parts are properly counted; threaded holes and studs are properly masked especially when the part is to be powder coated.  Threaded holes are plugged with special silicone plugs and threaded studs are covered with silicone caps.  masking2Caps and plugs are available in all different shapes and sizes for maximum compatibility to the part.'} />

        <ShowContent subheader={"Process"}
            message={'Masking is done with special heat resistant tape which can withstand high temperatures of 400f so when the part is baked ensuring the tape does not melt. We use silicone high temperature tape for powder applications and masking high temperature tape for paint applications.'} />

        <ShowContent subheader={"Client Improtance"}
            message={'Masking is done as per customer requirements. Some parts require custom masking which is done manually in our masking department. Trained personal precisely mask the required areas of the part to meet specifications as per customer supplied drawings.'} />
    </Layout>
}
