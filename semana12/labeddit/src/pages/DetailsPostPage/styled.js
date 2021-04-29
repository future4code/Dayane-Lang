import styled from "styled-components";
import { Box } from "@material-ui/core";

export const MainContainer = styled.div`
  background-color: #dae0e6;
  display: flex;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
  padding: 1em;
`;
export const StyledBox = styled(Box)`
  display: flex;
  width: 90vw;
  max-width: 600px;
  background-color: white;
  flex-direction: column;
  border: 1px solid #d7d7d7;
  &:hover {
    border: 1px solid #a7a9ab;
  }
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 2em;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  padding: 0.4em;
  align-items: center;
`;
export const Arrow = styled.img`
  width: 50%;
  margin: 0.2em;
  cursor: pointer;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    width: 90%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  width: 90%;
  cursor: default;
`;
export const InfoContainer = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  width: 10%;
  border-radius: 5px;
  border: 1px solid #a7a9ab;
`;

export const UserThings = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.1em;
  padding-bottom: 0.2em;
`;
