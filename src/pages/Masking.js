import React from "react";
import Layout from "../component/Layout";
import ShowContent from "../component/Mission";
import MissionImage from './../images/4.png';

export default function Masking(props) {
    return <Layout pageName={"Masking"}>
         <ShowContent header={'Washing'} subheader={"The importance of the pre-treatment process:"}
    message={'Substrate preparation and pretreatment for coating is the first step in the pretreatment process and is critical to success in producing a quality coating. Pretreatment is essential to ensure both longevity and outstanding appearance as it prepares the surface for painting as it cleans off all the debris and oil that comes with material while fabrication and it coats the surface with iron phosphate film which protect against corrosion and promotes adhesion. Pretreatment determines the end quality of the product. In our iron phosphate wash we add fluoride additive to promote adhesion on aluminum parts as it etches the surface of aluminum. Plastic parts are washed with an alcohol based solution.'}/>

    <ShowContent subheader={"Washing Systems:"}
    image={MissionImage}
    message={'We have state of the art washing system as the equipment in our facility washboothhas been customized to optimize time and accuracy, therefore resulting in better turnaround with better finish.  Our custom tunnels wash system which consists of 360 degree wash which washes the part from all angles ensuring parts are fully cleaned inside out.  The sump of 250 gallon of solution is heated at 130 degree Fahrenheit which is monitored thorough the day ensuring proper ph level and solution temperature for washing.   Our manual wash washes larger parts which can not fit thorough the tunnel wash.  Our manual wash system has 5000lb of pressure at the gun and on demand gas powered burner to ensure consist supply of hot water with chemical injector to ensure cleaning all the debris from the parts and preparing the     surface for painting.  This is one process which has to be done right in order to ensure good adhesion.'}/>
 
</Layout>
}
