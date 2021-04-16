


/* eslint-disable no-undef */
import React from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer, Logo, Menu } from "./styled";

import LogoSite from "../Assets/logo.png";

/*
//import {ButtonAdm} from '../Assets/buttonadm.svg';
const ButtonAdm = styled.img`
  width: 10%;
  margin-top: 3%;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
  @media screen and (max-width: 500px) {
    width: 31px;
  }
`;

*/

const Header = () => {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push("/login");
  };

  return (
    <HeaderContainer>
      <Logo src={LogoSite} />
      <Menu to="/home">HOME</Menu>
      <Menu to="/viagens">VIAGENS</Menu>
      <button onClick={goToLoginPage}>ADM</button>
    </HeaderContainer>
  );
};
export default Header;
