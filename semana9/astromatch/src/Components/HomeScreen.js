/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  HomeConteiner,
  ContentScreen,
  Header,
  TitleLogo,
  GoMathList,
  AnimationContainer,
  ProfileConteiner,
  ImageProfile,
  NameProfile,
  AgeProfile,
  BioProfile,
  Footer,
  NoMatch,
  Match,
} from "./StyledPages/styledHome";

import ButtonNoMatch from "../Components/images/iconNoMatch.png";
import NoMatchEffect from '../Components/images/iconblock.jpg';
import ButtonMatch from "../Components/images/iconMatch.jpg";
import MatchEffect from '../Components/images/iconPair.jpg';
import MatchList from "../Components/images/iconFavorite.jpg";
import Logo from '../Components/images/logo.jpg';
import * as LottiePlayer from "@lottiefiles/lottie-player";
import animationData from "../Animation/animationHeart.json";


function HomeScreen(props) {
  const [choose, setChoose] = useState(true);
  const [noChoose, setNoChoose] = useState(true);
  const [profiles, setProfiles] = useState([]);
  const [animationState, setAnimationState] = useState({
    isStopped: false,isPaused: false,
  });

  const onMouseEvent = () => {
    if (choose) {
      setChoose(false);
    } else {
      setChoose(true);
    }
  };

  const onMouseEffect = () => {
    if (noChoose) {
      setNoChoose(false);
    } else {
      setNoChoose(true);
    }
  };

  const iconMatch = choose ? ButtonMatch : MatchEffect;

  const iconNoMatch = noChoose ? ButtonNoMatch : NoMatchEffect;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    getProfiles();
  }, []);

  const getProfiles = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/dayane/person"
      )
      .then((response) => {
        setProfiles(response.data.profile);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const chooseProfile = () => {
    const body = {
      id: profiles.id,
      choice: true,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/dayane/choose-person",
        body
      )
      .then(() => {
        getProfiles();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const addMatch = () => {
    chooseProfile();
    alert("Perfil adicionado ♥");
  };

  useEffect(() => {
    rejectMatch();
  }, []);

  const rejectMatch = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/dayane/person"
      )
      .then((response) => {
        setProfiles(response.data.profile);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <HomeConteiner>
      <ContentScreen className="home">
        <Header>
          <TitleLogo src={Logo} />
          <GoMathList src={MatchList} onClick={props.changeScreen} />
        </Header>
        <hr />

        {profiles.length === 0 ? (
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
          <ProfileConteiner key={profiles.id}>
            <ImageProfile src={profiles.photo} />
            <NameProfile fontSize={24}>
              {profiles.name},<AgeProfile>{profiles.age} anos</AgeProfile>
            </NameProfile>
            <BioProfile>{profiles.bio}</BioProfile>
          </ProfileConteiner>
        )}

        <Footer>
          <NoMatch
            src={iconNoMatch}
            onClick={rejectMatch}
            onMouseEnter={onMouseEffect}
            onMouseOut={onMouseEffect}
          />
          <Match
            src={iconMatch}
            onClick={addMatch}
            onMouseEnter={onMouseEvent}
            onMouseOut={onMouseEvent}
          />
        </Footer>
      </ContentScreen>
    </HomeConteiner>
  );
}
export default HomeScreen;
