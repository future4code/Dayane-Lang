
import React, { useState } from 'react';
import { HomeContainer, MainContainer, AnimationContainer,Message } from '../Styled/StyledHomePage';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Lottie from 'react-lottie';
import animationData from '../../../animation/animation.json' //

function HomePage(){
    const [ animationState, setAnimationState] = useState ({
         isStopped: false, isPaused: false
     })

     const defaultOptions = {
        Loop: true,
         autoplay: true,
         animationData: animationData,
         rendererSettings: {
             preserveAspectRatio: "xMidYMid slice"
         }

     };

    return (
        <HomeContainer>
            <Header/>
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


    )
}
  
export default HomePage;