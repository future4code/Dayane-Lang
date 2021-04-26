/* eslint-disable no-undef */
import React from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer, Logo, Menu} from "./styled";
import { ButtonAdm } from '../constants/buttons'

import LogoSite from "../assets/logo.png";


const Header = () => {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push("/login");
  };

  return (
    <HeaderContainer>
     
        <Logo src={LogoSite} />
        <div></div>
        <Menu to="/home">HOME</Menu>
      
        <Menu to="/viagens">VIAGENS</Menu>
        <ButtonAdm onClick={goToLoginPage}>
          ADM
        </ButtonAdm>
     
    </HeaderContainer>
  );
};
export default Header;
