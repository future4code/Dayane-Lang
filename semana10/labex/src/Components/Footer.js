import React from 'react';
import { FooterContainer, IconsSocial } from './styled';
import LogoFacebook from '../Assets/facebook.svg';
import LogoInstagram from '../Assets/instagram.svg';
import LogoTwitter from '../Assets/twitter.svg';


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