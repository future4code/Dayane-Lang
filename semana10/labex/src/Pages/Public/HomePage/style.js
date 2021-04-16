import styled from "styled-components";
import BottomPage from "../../Assets/bottompage.png";
import TemplateHome from '../../../Assets/template.png';



// Styled HomePage
export const HomeContainer = styled.div`
  display: inline;
  margin: 0;
  padding-bottom: 0;
  background-image: url(${ BottomPage });
    background-repeat: no-repeat;
    background-size: cover;
`;

export const MainContainer = styled.main`
  text-align: center;
  padding-top: 4%;
  padding-left: 5%;
  height: 65vh;
`;

export const AnimationContainer = styled.div`
  margin-top: 0%;
  margin-bottom: 0%;
`;

export const Message = styled.h1`
  color:"#40c8ae80" ;
`;

export const ButtonSignUp = styled.button`
  width: 10vw;
  padding: 10px;
  margin-right: 4%;
  background-color: "#03648a";
  color: white;
`;

export const StyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid white;
    width: 100vh;
    height: 70vh;
    margin: 80px auto;
    background-color: #00000080;
    h1 {
      background-image: url(${ TemplateHome })
    }
    
    img {
        height: 150px;
        margin-left: 50px;
    }
    
`    
    
    
/*    div {
        margin-top: 50px;
        button {
            margin: 25px;
            height: 40px;
            width: 150px;
            outline: none;
            border: none;
            border-bottom: 2px solid "#bc3fbc";
            cursor: pointer;
            :hover {
                background-color: "#007fff33";
            }
        }
    }

import styled from 'styled-components'
import { mainWhite, mainGray } from '../../../constants/colors'



// Styled HomePage
export const HomeContainer = styled.div`
   display: inline;
   margin: 0;
   padding-bottom: 0;
`

export const MainContainer = styled.main`
   text-align: center;
   padding-top: 4%;
   padding-left: 5%;
   height: 65vh;
`

export const AnimationContainer = styled.div`
   margin-top: 0%;
   margin-bottom: 0%;
`

export const Message = styled.h1`
   color: ${mainGray};
`

export const ButtonSignUp = styled.button`
   width: 10vw;
   padding: 10px;
   margin-right: 4%;
   background-color: blue;
   color: ${mainWhite};
`



*/