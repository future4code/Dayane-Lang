import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";
//import { TextField } from "@material-ui/core";

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


export const HomeIcon = styled.img`
  width: 5%;
  margin-right: 0.5em;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    display: none;
  }
  @media screen and (min-device-width: 421px) and (max-device-width: 800px) {
    width: 30%;
  }
`;

export const LogoutIcon = styled.img`
  width: 5%;
  margin-left: 1em;
  cursor: pointer;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    width: 30%;
  }
  @media screen and (min-device-width: 421px) and (max-device-width: 800px) {
    width: 20%;
  }
`;

/*


export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  height: 8vh;
  align-items: center;
  margin: 0 1em;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    margin: 0 0.3em;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    width: 50%;
    justify-content: null;
  }
  @media screen and (min-device-width: 421px) and (max-device-width: 800px) {
    width: 50%;
  }
`;

export const HeaderFeed = styled.div`
  display: flex;
  background-color: #ffffff;
  height: 8vh;
  align-items: center;
  justify-content: center;
  margin: 0 1em;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    margin: 0 10em;
  }
  @media screen and (min-device-width: 421px) and (max-device-width: 800px) {
    margin: 0 10em;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  width: 25%;
  align-items: center;
`;

export const Username = styled(Typography)`
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    display: none;
  }
`;

export const CenterContainer = styled.div`
  width: 30%;

  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    width: 50%;
    margin-right: 1em;
  }
  @media screen and (min-device-width: 421px) and (max-device-width: 800px) {
    margin-right: 1em;
  }
`;

export const Logo = styled.img`
  width: 12%;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    width: 42%;
  }
  @media screen and (min-device-width: 421px) and (max-device-width: 800px) {
    width: 32%;
  }
`;

export const Title = styled(TextField)`
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    display: none;
  }
  @media screen and (min-device-width: 421px) and (max-device-width: 800px) {
    font-size: 1.2rem;
  }
`;

export const LogoFeed = styled.img`
  width: 45%;
  margin-right: 2em;
  cursor: pointer;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    width: 90%;
    margin-right: 0;
  }
  @media screen and (min-device-width: 421px) and (max-device-width: 800px) {
    width: 50%;
  }
`;

*/
