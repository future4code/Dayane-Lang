import React from "react";
import styled from "styled-components";
import {AddPlaylist} from "./components/AddPlayList";
import {PlayLists} from "PlayLists";


const ConteinerApp = styled.div`
  //background-color: rgba();
  color: whitesmoke;
  margin: 0;
`;

const Headers = styled.header`
 // background-image: ;
  color: violetblue;
  font-size: 30px;
  padding-bottom: 1%;
  padding-left: 5%;
  margin: 0;
`;

const Footers = styled.footer`
  //background-image: ;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 20%;
  padding-bottom: 2%;
  margin: 0;
`;

export default class App extends React.Component {
  state = {
    primaryPage: "addPlaylist"
  };

  changePage = () => {
    if (this.state.primaryPage === "addPlaylist") {
      this.setState({ primaryPage: "playlists" });
    } else {
      this.setState({ primaryPage: "addPlaylist" });
    }
  };

  render() {
    return (
      <ConteinerApp>
        <Headers>
          
          <strong>Labefy</strong>
        </Headers>
        {this.state.primaryPage === "addPlaylist" ? (
          <AddPlaylist changePage={this.changePage} />
        ) : (
          <PlayLists changePage={this.changePage} />
        )}
        <Footers>
          
        </Footers>
      </ConteinerApp>
    );
  }
}

//ESTOU PENSANDO EM COLOCAR:

//import Logo from "./components/img/logo.svg";
//import LogoFacebook from "./components/img/facebook.svg";
//import LogoInstagram from "./components/img/instagram.svg";
//import LogoTwitter from "./components/img/twitter.svg";

//<LogoContainer src={Logo} alt="logo" />

//<SocialContainer src={LogoFacebook} alt="logo facebook" />
//<SocialContainer src={LogoInstagram} alt="logo instagram" />
//<SocialContainer src={LogoTwitter} alt="logo twitter" />

