import React, { useState } from 'react';
import { HomeContainer, MainContainer, AnimationContainer, Message } from './style'
import  Header  from '../../../Components/Header';
import  Footer  from '../../../Components/Footer';
import Lottie from 'react-lottie';
import animationData from '../../..//Animation/Animation' //animação



function HomePage(){
    
    // eslint-disable-next-line no-unused-vars
    const [ animationState, setAnimationState ] = useState({
        isStopped: false, isPaused: false
    })

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    
     
    return (
        <HomeContainer>
           <Header/>
               <MainContainer>
                   <AnimationContainer>
                        <Lottie options={defaultOptions}
                        height={250}
                        width={250}
                        isStopped={animationState.isStopped}
                        isPaused={animationState.isPaused}
                    />
                    </AnimationContainer>
                    <Message>Embarque conosco nessa aventura!</Message>
               </MainContainer>
           <Footer />
        </HomeContainer>
    )
}
export default HomePage;
