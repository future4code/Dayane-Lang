import React from 'react';
import { FooterContainer, IconsSocial } from './styled';
import LogoFacebook from '../assets/facebook.svg';
import LogoInstagram from '../assets/instagram.svg';
import LogoTwitter from '../assets/twitter.svg';


const Footer = () => {
    return (
        <FooterContainer>
            <IconsSocial src={LogoFacebook}/>
            <IconsSocial src={LogoInstagram}/>
            <IconsSocial src={LogoTwitter}/>
        </FooterContainer>
    )
}
export default Footer;