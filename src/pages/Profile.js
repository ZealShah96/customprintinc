import {
    makeStyles
} from "@material-ui/core";
import * as React from "react";
import Layout from "../component/Layout";
import ShowContent from "../component/Mission";

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
    },
    control: {
        // padding: theme.spacing(2),
    },
    background: {
        padding: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
        // display: 'flex'
        backgroundColor: "#eee"
    },
    contentBackground: {
        backgroundColor: "#eee"
    },
    contentCenter: {
        alignItems: 'center',
        padding: 10,
        margin: 5
    },
    text: {
        color: 'red',
        fontSize: '50px'
    },

}));

const Content = {
    image: "",
    mainContent: '<p>Custom Paint &amp; Silk Screen Inc. was established in 2001. Our service and facility provide customers with the flexibility to meet just about any of your requirements. We are able to efficiently provide services which include powder coating, silk screening and spray painting. We can match colors to your specifications in powder or wet paint. Your parts are monitored throughout the production process from receiving to coating and finally, packaging. At Custom Paint, our trained professional ensure that your parts are carefully inspected and counted to ensure the highest quality results within the customers’ demanding schedule. Our emphasis is on producing the highest quality work possible. The bottom line is superior finish, competitive pricing and best of all our consistent quick turn around time, which enables us to meet our customer’s demanding time schedule. Custom is truly your one stop coating shop as we have powder coating, liquid (wet) painting, and state of the art silk screening in house. <br><br>Our extensive customer base continues to grow and we are working on making improvements to our production process everyday. Our facility is constantly upgrading to the latest equipment and standards as well as developing more efficient techniques. Our goal is to provide customers with the best quality and service in the industry. <br><br>If you have any questions, or would like to discuss a future project, please&nbsp;<a title="Contact us" href="http://www.custompaintinc.com/contact-us/">Contact Us</a>. <br><br><strong>Deadlines and Quality:</strong> <br>Your deadline is our deadline. We strive to give you the best quality and service possible as we highly value both hand in hand. We will only make promises that we can keep as we do not like making any false promises. We pride ourselves in providing superior custom painting, powder coating and silk screening services. We take full pride in our work therefore your work will be fully taken care of from start to finish. After our Q.C. is done then we go one step further to make sure the parts are packaged with thrall packaging materials and thoughts to make sure the parts do not get damaged in the transportation.<br><br>Custom Paint distinguishes itself from our competition in three main areas; (1) Superior Quality (2) Competitive pricing (3) Unmatched turnaround times <br><br><strong>Your Privacy<br></strong>At Custom Paint we abide by the provisions of the Privacy Act and the privacy of our customers, suppliers, and inquirers is always a first priority. We will not disclose or share any personal and confidential information unless you have given your prior consent, and the information we collect is used only for the purpose it was originally intended. <br><br>We greatly appreciate and value your continued business and service. <br><br>For any questions or concern in regards to the process, advantages and disadvantages please visit our <a title="FAQ" href="http://www.custompaintinc.com/faq/">FAQ</a> page which would answer majority of the question.<br><br>For any quotation or any other inquires you many have please do not hesitate to <a title="Contact us" href="http://www.custompaintinc.com/contact-us/">contact us</a> as we will assist you best to our abilities.</p>',
    title: "About Us"
}


// markup
const Profile = () => {
    const classes = useStyles();


    return (
        <Layout pageName={"Profile"}>
            <ShowContent header={'Profile'}
                message={'Custom Paint & Silk Screen Inc was established in 2001. Our service and facility provide customers with the flexibility to meet just about any of your requirements. We are able to efficiently provide services which include powder coating, silk screening and spray painting. We can match colors to your specifications in powder or wet paint. Your parts are monitored throughout the production process from receiving to coating and finally, packaging. At Custom Paint, our trained professional ensure that your parts are carefully inspected and counted to ensure the highest quality results within the customers’ demanding schedule. Our emphasis is on producing the highest quality work possible. The bottom line is superior finish, competitive pricing and best of all our consistent quick turn around time, which enables us to meet our customer’s demanding time schedule. Custom is truly your one stop coating shop as we have powder coating, liquid (wet) painting, and state of the art silk screening in house.Our extensive customer base continues to grow and we are working on making improvements to our production process everyday. Our facility is constantly upgrading to the latest equipment and standards as well as developing more efficient techniques. Our goal is to provide customers with the best quality and service in the industry.If you have any questions, or would like to discuss a future project, please Contact Us.'} />
                <ShowContent subheader={"Deadlines and Quality:"}
                message={'Your deadline is our deadline. We strive to give you the best quality and service possible as we highly value both hand in hand. We will only make promises that we can keep as we do not like making any false promises. We pride ourselves in providing superior custom painting, powder coating and silk screening services. We take full pride in our work therefore your work will be fully taken care of from start to finish After our QC. is done then we go one step further to make sure the parts are packaged with thrall packaging materials and thoughts to make sure the parts do not get damaged in the transportation.Custom Paint distinguishes itself from our competition in three main areas; (1) Superior Quality (2) Competitive pricing (3) Unmatched turnaround times.'} />
                <ShowContent subheader={"Your Privacy:"}
                message={'At Custom Paint we abide by the provisions of the Privacy Act and the privacy of our customers, suppliers, and inquirers is always a first priority. We will not disclose or share any personal and confidential information unless you have given your prior consent, and the information we collect is used only for the purpose it was originally intended.We greatly appreciate and value your continued business and service.For any questions or concern in regards to the process, advantages and disadvantages please visit our FAQ page which would answer majority of the question.For any quotation or any other inquires you many have please do not hesitate to contact us as we will assist you best to our abilities.'} />
        </Layout>
    )
}

export default Profile


{/* <Grid item sm={12} className={classes.background}>
                    <Grid item sm={12} className={classes.text}>
                        {Content.title}
                    </Grid>
                    <Grid item sm={12} className={classes.content}>
                        <div dangerouslySetInnerHTML={{ __html: Content.mainContent }} />
                    </Grid>
                    <Grid item sm={12} className={classes.contentCenter}>
                        <Paper elevation={2} variant="outlined" square>
                            Custom Paint & Silk Screen Inc. was established in 2001. Our service and facility provide customers with the flexibility to meet just about any of your requirements. We are able to efficiently provide services which include powder coating, silk screening and spray painting. We can match colors to your specifications in powder or wet paint. Your parts are monitored throughout the production process from receiving to coating and finally, packaging. At Custom Paint, our trained professional ensure that your parts are carefully inspected and counted to ensure the highest quality results within the customers’ demanding schedule. Our emphasis is on producing the highest quality work possible. The bottom line is superior finish, competitive pricing and best of all our consistent quick turn around time, which enables us to meet our customer’s demanding time schedule. Custom is truly your one stop coating shop as we have powder coating, liquid (wet) painting, and state of the art silk screening in house.

                            Our extensive customer base continues to grow and we are working on making improvements to our production process everyday. Our facility is constantly upgrading to the latest equipment and standards as well as developing more efficient techniques. Our goal is to provide customers with the best quality and service in the industry.

                            If you have any questions, or would like to discuss a future project, please Contact Us.

                        </Paper>
                    </Grid>
                </Grid> */}