
/* eslint-disable no-undef */
import React from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer, Logo, Menu} from "./styled";

import LogoSite from "../Assets/logo.png";


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
