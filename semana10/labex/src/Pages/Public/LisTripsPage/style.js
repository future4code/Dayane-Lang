import styled from 'styled-components';
import {mainGray, mainDarkGreen, mainLightBlue, mainDarkGray } from '../../../constants/colors';



// Styled ListTripsPage //
export const TripsTitle = styled.h2`
  color: ${mainGray};
  text-align: center;
  margin-top: 5%;
`

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 2em;
  justify-items: center;
  margin: 5%;
`

export const TripsContainer = styled.div`
  overflow: auto;
  text-align: center;
  background-color: ${mainLightBlue};
  border-radius: 10px;
  width: 20vw;
  height: 52vh;
`

export const NameTrip = styled.h3`
  color: ${mainDarkGreen};
  padding: 1% 4%;
`

export const InfoTrip = styled.p`
  color: ${mainDarkGray};
  font-size: 14px;
  text-align: center;
  padding: 1%;
`