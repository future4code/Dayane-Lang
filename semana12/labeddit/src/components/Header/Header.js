/*import React from "react";
import { goToFeeds, goToLogin, goToSignUp } from "../../routes/cordinator";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Button, Avatar, Badge} from "@material-ui/core";
import home from "../../assets/homeicon.jpg";
import logoutIcon from "../../assets/logouticone.jpg";
import {
  HeaderContainer,
  Logo,
  ButtonsContainer,
  HomeContainer,
  HomeIcon,
  LeftContainer,
  LogoFeed,
  RightContainer,
  LogoutIcon,
  Title,
  Username,
  CenterContainer,
} from "./styled";
import SearchBar from "../SearchBar";

function Header() {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const logout = () => {
    const beSure = window.confirm("Confirma sair da conta?");
    if (beSure) {
      localStorage.removeItem("token");
      goToLogin(history);
    }
  };

  if (token) {
    return (
      <HeaderContainer>
        <LeftContainer>
          <LogoFeed onClick={() => goToFeeds(history)} src={logo} />
          <HomeContainer onClick={() => goToFeeds(history)}>
            <HomeIcon src={home} />
            <Title>Home</Title>
          </HomeContainer>
        </LeftContainer>

        <CenterContainer>
          <SearchBar />
        </CenterContainer>

        <RightContainer>
          <Avatar
            boxSize="2.2em"
            src={`https://avatars.dicebear.com/api/avataaars/${username}.svg`}
          >
            <Badge boxSize="0.8em" bg="violet.500" />
          </Avatar>
          <Username pl="0.5em" size="sm">
            u/{username}
          </Username>
          <LogoutIcon onClick={logout} src={logoutIcon} />
        </RightContainer>
      </HeaderContainer>
    );
  } else {
    return (
      <HeaderContainer>
        <Logo src={logo} />
        <ButtonsContainer>
          <Button colorScheme="violet" onClick={() => goToSignUp(history)}>
            Cadastrar
          </Button>
          <Button
            ml="1em"
            colorScheme="violet"
            variant="outline"
            onClick={() => goToLogin(history)}
          >
            Log in
          </Button>
        </ButtonsContainer>
      </HeaderContainer>
    );
  }
}

export default Header;

*/

import React from "react";
import AppBar from "@material-ui/core/AppBar";
//import { StyledToolbar } from "./styled";
import Button from "@material-ui/core/Button";
import { goToFeeds, goToLogin } from "../../routes/cordinator";
import { useHistory } from "react-router-dom";
import {
  HomeIcon,
  StyledToolbar,
  LogoutIcon,
 
} from "./styled";

import SearchBar from "../SearchBar";

import home from "../../assets/homeicon.jpg";
import logoutIcon from "../../assets/logouticone.jpg";

const Header = ({ rightButtonText, setRightButtonText }) => {
  const token = localStorage.getItem("token");
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLogin(history);
    } else {
      goToLogin(history);
    }
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <HomeIcon src={home} />
       
       <Button onClick={() => goToFeeds(history)} color="inherit">
          Home
        </Button>
        <Button onClick={rightButtonAction} color="inherit">
          {rightButtonText}
        </Button>
        <SearchBar neutracolor />
        <Button onClick={() => goToLogin(history)} color="inherit">
          Login
        </Button>
        <Button onClick={rightButtonAction} color="inherit">
          {rightButtonText}
        </Button>
        <LogoutIcon onClick={logout} src={logoutIcon} />
      </StyledToolbar>
      
    </AppBar>
  );
};

export default Header;
