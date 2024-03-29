import React from "react";
import { ProcessContentList } from "../helpers";
import image1 from './../images/PC_1.jpg';
import image2 from './../images/PC_2.jpg';
import image3 from './../images/PC_3.jpg';

const content={
    pageName:"Powder Coating",
    contentList:[
        {
            header:'Powder Coating',
            image:image1,
            message:"Custom Paint specializes in custom powder coating solution, mainly focusing in the following areas: electronic enclosure, kiosks, medical instruments, cabinets, frames and instrumental chassis and panels.  Powder coating is excellent at withstanding exposure to chemicals, inclement weather, humidity, abrasion and other conditions detrimental to performance and appearance. Powder coating decreases the wear and tear of the finish resulting in decreased maintenance cost and greater life cycle of the parts."
        },
        {
            subheader:'Work Ethics',
            image:image2,
            message:'Our management team has a diverse knowledge of the industry, and is able to solve your most difficult painting and masking needs. Their knowledge has transferred to the rest of the staff, who are always ready to service as per customer’s requirements.   If our staff comes across a problem or notices a problem like hardware missing, plating coming off then management will be notified and in turn customer will be contacted to ensure quality from the metal fabricator’s side.  This is something our customer really appreciates as their mistakes are sometimes realized and fixed without going into any time delay or rework cost.',
        },
        {
            subheader:'How Products are Powder Coated:',
            message:'The powder coating is dry finishing process. Finely ground particles of pigment and resin are electro statically charged and sprayed onto a part. The parts to be coated are electrically grounded, so that the charged particles adhere to them until it goes into curing oven. The curing cycle melts the powder, fusing it to the part. The result is a uniform, attractive, durable, high quality finish. The reject rate is minimal as there are no runs, drips, or sags.'
        },
        {
            subheader:'Powder coating Process:',
            image:image3,
            message:'Powder coating looks like paint but acts like shield. It’s tough, fairly scratch resistant, cost-effective and easy on the environment. It’s safer, cleaner coating choice that provides a superior finish in your choice of color and texture. Powders are formulated in a rainbow of colours, textures, and glosses and metallic finishes. Powder coating can stand against corrosion, heat, impact, abrasion, fading from sunlight and extreme weather.Powder coating is compliant with the environment. It means virtually no emissions, no solvent, and no hazardous wastes. Powder coating is totally “Green” (environmentally safe).',
        },
        {
            subheader:'Powder Coating vs. Wet Paint:',
            message:'If you were to powder coat a panel today and another year later, and put them side by side they would be identical, but if you were to do the same thing with wet paint you would not be able to achieve the same result, since there is too many variables involved in wet paint, e.g. painter mixing the paint with the amount of catalyst and thinner, mill thickness (painter to painter it will vary). These are some of the factor that would make a difference in your final finish. Wet paint is not as strong and durable as powder.            Since its introduction in North America almost 40 years ago, powder coating has become the fastest growing finishing technology, currently representing over 10 percent of the total industrial finishing market. More and more finishing engineers for a countless array of products have switched from liquid finishing to powder coating as a way to produce a high quality and durable finish while maximizing production, cutting costs, improving efficiency, and complying with increasingly stringent environmental regulation.',
        }
    ]
}



export default function PowderCoating(props) {
    return <ProcessContentList {...content}/>;
    // <Layout pageName={"Powder Coating"}>
    //     <ShowContent header={'Powder Coating'}
    //         image={image1}
    //         message={'Custom Paint specializes in custom powder coating solution, mainly focusing in the following areas: electronic enclosure, kiosks, medical instruments, cabinets, frames and instrumental chassis and panels.  Powder coating is excellent at withstanding exposure to chemicals, inclement weather, humidity, abrasion and other conditions detrimental to performance and appearance. Powder coating decreases the wear and tear of the finish resulting in decreased maintenance cost and greater life cycle of the parts.'} />

    //     <ShowContent subheader={"Work Ethics"}
    //         image={image2}
    //         message={'Our management team has a diverse knowledge of the industry, and is able to solve your most difficult painting and masking needs. Their knowledge has transferred to the rest of the staff, who are always ready to service as per customer’s requirements.   If our staff comes across a problem or notices a problem like hardware missing, plating coming off then management will be notified and in turn customer will be contacted to ensure quality from the metal fabricator’s side.  This is something our customer really appreciates as their mistakes are sometimes realized and fixed without going into any time delay or rework cost.'} />

    //     <ShowContent subheader={"How Products are Powder Coated:"}
    //         message={'The powder coating is dry finishing process. Finely ground particles of pigment and resin are electro statically charged and sprayed onto a part. The parts to be coated are electrically grounded, so that the charged particles adhere to them until it goes into curing oven. The curing cycle melts the powder, fusing it to the part. The result is a uniform, attractive, durable, high quality finish. The reject rate is minimal as there are no runs, drips, or sags.'} />

    //     <ShowContent subheader={"Powder coating Process:"}
    //      image={image3}
    //         message={'Powder coating looks like paint but acts like shield. It’s tough, fairly scratch resistant, cost-effective and easy on the environment. It’s safer, cleaner coating choice that provides a superior finish in your choice of color and texture. Powders are formulated in a rainbow of colours, textures, and glosses and metallic finishes. Powder coating can stand against corrosion, heat, impact, abrasion, fading from sunlight and extreme weather.Powder coating is compliant with the environment. It means virtually no emissions, no solvent, and no hazardous wastes. Powder coating is totally “Green” (environmentally safe).'} />

    //     <ShowContent subheader={"Powder Coating vs. Wet Paint:"}
    //         message={'If you were to powder coat a panel today and another year later, and put them side by side they would be identical, but if you were to do the same thing with wet paint you would not be able to achieve the same result, since there is too many variables involved in wet paint, e.g. painter mixing the paint with the amount of catalyst and thinner, mill thickness (painter to painter it will vary). These are some of the factor that would make a difference in your final finish. Wet paint is not as strong and durable as powder.            Since its introduction in North America almost 40 years ago, powder coating has become the fastest growing finishing technology, currently representing over 10 percent of the total industrial finishing market. More and more finishing engineers for a countless array of products have switched from liquid finishing to powder coating as a way to produce a high quality and durable finish while maximizing production, cutting costs, improving efficiency, and complying with increasingly stringent environmental regulation.'} />
    // </Layout>
}