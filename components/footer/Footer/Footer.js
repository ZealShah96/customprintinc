import * as React from "react";
import {
    FaFacebook,
    FaInstagram, FaLinkedin, FaTwitter, FaYoutube
} from "react-icons/fa";
import {
    FooterContainer, FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle, SocialIcon, SocialIconLink, SocialIcons, SocialLogo, SocialMedia,
    SocialMediaWrap, WebsiteRights
} from "./Footer.elements";

const Footer = (props) => {
  var {footerObject}=props;
  
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink href="/sign-up">How it works</FooterLink>
            <FooterLink href="/">Testimo</FooterLink>
            <FooterLink href="/">Careers</FooterLink>
            <FooterLink href="/">Investors</FooterLink>
            <FooterLink href="/">Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink href="/">Contact</FooterLink>
            <FooterLink href="/">Support</FooterLink>
            <FooterLink href="/">Destinations</FooterLink>
            <FooterLink href="/">Sponsorships</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink href="/">Submit Video</FooterLink>
            <FooterLink href="/">Ambassadors</FooterLink>
            <FooterLink href="/">Agency</FooterLink>
            <FooterLink href="/">Influencer</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink href="/">Instagram</FooterLink>
            <FooterLink href="/">Facebook</FooterLink>
            <FooterLink href="/">Youtube</FooterLink>
            <FooterLink href="/">Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo href="/">
            <SocialIcon />
            {footerObject.nameOfCompany}
          </SocialLogo>
          <WebsiteRights>{footerObject.nameOfCompany} © {new Date().getFullYear()}</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                "//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
              }
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
