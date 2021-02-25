import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <footerLink to="/">Home</footerLink>
                                <footerLink to="/">About Us</footerLink>
                                <footerLink to="/">Home</footerLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <footerLink to="/">Home</footerLink>
                                <footerLink to="/">About Us</footerLink>
                                <footerLink to="/">Home</footerLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Linner Rivas</SocialLogo>
                        <WebsiteRights>Linner Rivas © 2021 All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.linkedin.com/in/linnerrivas/" target="_black" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
