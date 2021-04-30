import styled from "styled-components";
import { Box } from "@material-ui/core";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
  max-width: 465px;
  margin: 0 auto;
  justify-content: center;
  padding: 1em;
`;

export const StyledBox = styled(Box)`
  display: flex;
  width: 90vw;
  max-width: 600px;
  background-color: white;
  margin: 1em;
  border: 1px solid #d7d7d7;
  &:hover {
    border: 1px solid #a7a9ab;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 28vh;
  justify-content: space-around;
  margin-bottom: 15px;
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
