/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from "../../Router/Coordinates";
import {
  HomeContainer,
  MainContainer,
  AnimationContainer,
  Message,
} from "./style";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Logo from '../../Assets/logo.png';
import Lottie from "react-lottie";
import animationData from "../../../animation/animation.json";

function HomePage() {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions = {
    Loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const history = useHistory();

  return (
    <HomeContainer>
      <Header />
      <img src={ Logo } />
      <h1>Seja Bem Vindo(a)!</h1>
      <div>
        <button onClick={() => goToListTripsPage(history)}>Viagens</button>
        <button onClick={() => goToLoginPage(history)}>Login Admin</button>
      </div>
      <MainContainer>
        <AnimationContainer>
          Lottie options={defaultOptions}
          height={250}
          width={250}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        </AnimationContainer>
        <Message>Embarque conosco em momentos únicos♥</Message>
      </MainContainer>
      <Footer />
    </HomeContainer>
  );
}

export default HomePage;
