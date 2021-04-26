import styled from "styled-components";
import  BottomPage  from '../../../assets/bottompage.png';
import TemplateHome from '../../../assets/template.png';
import  { mainDarkGray, mainViolet } from '../../../constants/colors';
//import  ButtonSignUp  from '../../../constants/buttons';



// Styled HomePage
export const HomeContainer = styled.div`
  display: inline;
  margin: 0;
  padding-bottom: 0;
  background-image: url(${ BottomPage });
    background-repeat: repeat;
    background-size: cover;
`;

export const MainContainer = styled.main`
  text-align: center;
  width: 100%;
  height: 100%;
  background-image: url(${ BottomPage });
    background-repeat: repeat;
    background-size: cover;
  
`;

export const ButtonSignUp = styled.button`
width: 10vw;
padding: 10px;
margin-right: 4%;
background-color: darkviolet;
color: ${mainViolet};
` 

export const AnimationContainer = styled.div`
  margin-top: 0%;
  margin-bottom: 0%;
`;

export const Message = styled.h1`
  color: ${mainDarkGray} ;
`;

export const StyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid white;
    height: 90vh;
    background-image: url(${ TemplateHome })
    
    
    img {
        height: 150px;
        margin-left: 50px;
    }
    
`    
export const StyleDiv =  styled.div `
   {
        margin-top: 50px;
        button {
            margin: 25px;
            height: 40px;
            width: 150px;
            outline: none;
            border: none;
            background-image: url(${ BottomPage  })
            border-bottom: 2px solid "#bc3fbc";
            cursor: pointer;
            :hover {
                background-color: "#007fff33";
            }
        }
    }
` 

 //background-color: lightblue;
