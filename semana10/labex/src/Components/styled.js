import styled from "styled-components";
import { mainBlue, mainWhite } from "../Components/colors";
import { Link } from "react-router-dom";

// Styled AdmHeader
export const AdmHeaderContainer = styled.header`
  font-family: "Roboto", sans-serif;
  background-color: ${mainBlue};
  color: white;
  width: 100%;
  height: 16vh;
`;

export const AdmLogo = styled.img`
  width: 130px;
  margin-left: 2%;
  margin-right: 50%;
  margin-top: 10px;
  padding-bottom: 5px;
`;

// Styled Header
export const HeaderContainer = styled.header`
  font-family: "Roboto", sans-serif;
  background-color: ${mainBlue};
  color: white;
  width: 100%;
  height: 15vh;
`;

export const Logo = styled.img`
  width: 130px;
  margin-left: 2%;
  margin-right: 55%;
  margin-top: 10px;
  padding-bottom: 5px;
`;

export const Menu = styled(Link)`
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    border-bottom: 3px solid #ff8e00;
  }
  font-size: 16px;
  margin-left: 4%;
  color: ${mainWhite};
`;

// Styled Footer
export const FooterContainer = styled.footer`
  background-color: ${mainBlue};
  color: white;
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
`;
