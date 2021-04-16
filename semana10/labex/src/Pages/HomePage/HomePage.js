/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from "../../Router/Coordinates";
import {
  HomeContainer,
  StyleContainer,
  MainContainer,
  AnimationContainer,
  Message,
} from "./style";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Logo from "../../Assets/logo.png";
import Lottie from "react-lottie";
//import animationData from "../../Animation/Animation";

function HomePage() {
  /*const [animationState, setAnimationState] = useState({
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
  ***Parte que deverá estar dentro do MainConteinr
  <AnimationContainer>
          Lottie options={defaultOptions}
          height={250}
          width={250}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        </AnimationContainer>
  
  */

  const history = useHistory();

  return (
    <HomeContainer>
      <StyleContainer />
      
      <h1>Seja Bem Vindo(a) a nossa estação Spacial!</h1>
      <div>
        <button onClick={() => goToListTripsPage(history)}>Viagens</button>
        <button onClick={() => goToLoginPage(history)}>Login Admin</button>
      </div>
      <MainContainer> 
        
        <Message>Embarque conosco em momentos únicos♥</Message>
      </MainContainer>
      <Footer />
    </HomeContainer>
  );
}

export default HomePage;
