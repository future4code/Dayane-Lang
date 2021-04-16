import styled from 'styled-components';
import { mainGreen, mainWhite, mainBlue, mainViolet, mainGray, mainLightBlue, mainRed, mainDarkGray, mainDarkGreen} 
        from '../constants/colors';



export const ButtonRegister= styled.button`
   font-family: 'Roboto', sans-serif;
   cursor: pointer;
   position: relative;
   font-size: 14px;
   width: 10vw;
   padding: 8px;
   margin-top: 12px;
   background-color: ${mainGreen};
   color: ${mainWhite};
   border-radius: 6px;
   border: 0;
`

export const ButtonLogin = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 14px;
   width: 12vw;
   padding: 10px;
   margin-top: 2%;
   background-color: ${mainBlue};
   border-color: ${mainBlue};
   border-style: solid;
   color: ${mainWhite};
   border-radius: 6px;
`

export const ButtonAdm = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 18px;
   width: 8vw;
   padding: 10px;
   margin-left: 4%;
   background-color: ${mainLightBlue};
   color: ${mainWhite};
   border-radius: 6px;
   border: 0;
`

export const ButtonLogout = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 16px;
   width: 8vw;
   padding: 15px;
   margin-right: 0%;
   background-color: ${mainRed};
   color: ${mainWhite};
   border-radius: 6px;
   border: 0;
`

export const ButtonCreateTrip = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 14px;
   width: 12vw;
   padding: 8px;
   margin-right: 15px;
   background-color: ${mainDarkGray};
   color: ${mainGray};
   border-radius: 6px;
   border: 0;
`

export const ButtonSaveTrip = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 14px;
   width: 12vw;
   padding: 10px;
   margin-top: 2%;
   background-color: ${mainViolet};
   border-color: ${mainLightBlue};
   border-style: solid;
   color: ${mainWhite};
   border-radius: 6px;
`

export const ButtonRegisterLogin = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 14px;
   width: 12vw;
   padding: 8px;
   margin-right: 15px;
   background-color: ${mainViolet};
   color: ${mainWhite};
   border-radius: 6px;
   border: 0;
`

export const ButtonSaveLogin = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 14px;
   width: 12vw;
   padding: 10px;
   margin-top: 2%;
   background-color: ${mainBlue};
   border-color: ${mainBlue};
   border-style: solid;
   color: ${mainWhite};
   border-radius: 6px;
`

export const ButtonDetails = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 12px;
   width: 8vw;
   padding: 6px;
   margin-right: 8px;
   margin-top: 15px;
   background-color: ${mainLightBlue};
   border-color: ${mainBlue};
   border-style: solid;
   color: ${mainBlue};
   border-radius: 6px;
`

export const ButtonDelete = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 12px;
   width: 8vw;
   padding: 6px;
   background-color: ${mainDarkGreen};
   border-color: ${mainGreen};
   border-style: solid;
   color: ${mainWhite};
   border-radius: 6px;
`

export const ButtonAcceptedCandidate = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 12px;
   width: 8vw;
   padding: 6px;
   background-color: ${mainBlue};
   margin-right: 4%;
   border: 0;
   color: ${mainWhite};
   border-radius: 5px;
`

export const ButtonDeleteCandidate = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 12px;
   width: 8vw;
   padding: 6px;
   background-color: ${mainRed};
   border: 0;
   color: ${mainWhite};
   border-radius: 5px;
`

export const ButtonSubmit = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 14px;
   width: 12vw;
   padding: 10px;
   margin-top: 2%;
   background-color: ${mainBlue};
   border-color: ${mainBlue};
   border-style: solid;
   color: ${mainWhite};
   border-radius: 6px;
`