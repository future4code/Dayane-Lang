import styled from 'styled-components';
import BottomPage from '../../Assets/logo.png';

export const LoginContainer = styled.div`
    display: flex;
    height: 100vh;
    background-image: url(${ BottomPage });
    background-repeat: no-repeat;
    background-size: cover;
`

export const LoginStyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: 100vh;
    height: 75vh;
    margin: 80px auto;
    background-color: "#40c8ae80";
    
    img {
        height: 150px;
        margin-left: 80px;
    }
    h1 {
        color: "#40c8ae80";
    }
`

export const LoginInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    input {
        width: 400px;
        height: 30px;
        margin-top: 10px;
        border: none;
        ::placeholder {
            padding-left: 3px;
        }
    }
`

export const LoginButton = styled.div`
    margin-top: 20px;
    button {
        margin: 25px;
        height: 40px;
        width: 150px;
        outline: none;
        border: none;
        border-bottom: 2px solid "#bc3fbc";
        cursor: pointer;
        :hover {
            background-color:"#007fff33";
        }
    }
`
