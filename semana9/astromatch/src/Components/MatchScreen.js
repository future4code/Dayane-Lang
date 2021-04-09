/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  MatchConteiner,
  MatchProfiles,
  HeaderMatch,
  BackButton,
  LogoMatch,
  DeleteMatch,
  //AnimationContainer,
  MathListProfiles,
  InfoMatch,
  MatchImage,
  MatchName,
} from "./StyledPages/styledMatch";
import BackHome from "../Components/images/iconBack.jpg";
import Logo from "../Components/images/logo.jpg";
import DelMatch from "../Components/images/clearmatch.jpg";
//import * as LottiePlayer from "@lottiefiles/lottie-player";
//import animationData from "../Animation/animationHeart.json";

function MatchScreen(props) {
  const [MatchList, setMatchList] = useState([]);
  // const [animationState, setAnimationState] = useState({
  //   isStopped: false,
  //   isPaused: false,
  // });

  useEffect(() => {
    getMatch();
  }, []);

  const getMatch = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/dayane/matches"
      )
      .then((response) => {
        setMatchList(response.data.matches);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const clearMatchList = () => {
    if (window.confirm("Você tem certeza que deseja deletar todos?")) {
      axios
        .put(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/dayane/clear"
        )
        .then(() => {
          alert("Matches deletados!");
          getMatch();
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  /*const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };*/

  return (
    <MatchConteiner>
      <MatchProfiles>
        <HeaderMatch>
          <BackButton src={BackHome} onClick={() =>props.changeScreen()} />
          <LogoMatch src={Logo} />
          <DeleteMatch src={DelMatch} onClick={clearMatchList} />
        </HeaderMatch>
        <hr />

        <MathListProfiles>
          {MatchList.map((profile) => {
            return (
              <InfoMatch key={profile.id}>
                <MatchImage src={profile.photo} />
                <MatchName>{profile.name}</MatchName>
              </InfoMatch>
            );
          })}
        </MathListProfiles>
      </MatchProfiles>
    </MatchConteiner>
  );
}
export default MatchScreen;

/*{MatchList.length === 0 ? (
          <AnimationContainer>
            <LottiePlayer
              options={defaultOptions}
              height={300}
              width={300}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
            />
          </AnimationContainer>
        ) : ( 
          <MathListProfiles>*/
