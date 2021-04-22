import styled from 'styled-components';

import { mainBlue, mainViolet, mainLightBlue } from '../constants/colors';
import { Link } from "react-router-dom";
import BtnAdmin from '../assets/buttonadm.svg';
import  BottomFooter  from '../assets/colorfooter.png';

// Styled AdmHeader
export const AdmHeaderContainer = styled.header`
  font-family: "Roboto", sans-serif;
  background-color: ${mainBlue};
  color: white;
  width: 100%;
  height: 10vh;
`;

export const AdmLogo = styled.img`
  width: 100px;
  margin-left: 2%;
  margin-right: 50%;
  margin-top: 10px;
  padding-bottom: 5px;
`;


// Styled Header
export const HeaderContainer = styled.header`
  font-family: "Roboto", sans-serif;
  background-color: ${ mainLightBlue };
  color: white;
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  & div {
    flex-grow: 1;
 }
`;

export const ButtonAdmin = styled.image`
  width: 10%;
  margin-top: 3%;
  cursor: pointer;
  background-color: ${BtnAdmin};
  &:hover {
    transform: scale(1.3);
  }
  @media screen and (max-width: 500px) {
    width: 31px;
  }
`;


export const Logo = styled.img`
  width: 150px;
  margin-left: 2%;
  margin-right: 55%;
  margin-top: 1px;
  padding-bottom: 10px;
  position: relative;
  top: 40px;
`;

export const Menu = styled(Link)`
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    border-bottom: 3px solid #ef5350;
  }
  font-size: 16px;
  margin-left: 4%;
  color: ${mainViolet};
`; 

// Styled Footer
export const FooterContainer = styled.footer`
background-image: url(${ BottomFooter });
background-repeat: no-repeat;
background-size: cover;
  width: 100%;
  height: 14vh;
  display: flex;
  justify-content: center;
  position: absolute;
`;

export const IconsSocial = styled.img`
  width: 40px;
  margin-top: 2%;
  margin-right: 1%;
  margin-left: 2%;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    border-bottom: 3px solid #ef5350;
  }
`;
