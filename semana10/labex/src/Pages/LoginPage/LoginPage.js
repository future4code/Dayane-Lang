import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { goToAdminHomePage, goToLastPage } from '../../Router/Coordinates'

import { LoginContainer, LoginStyleContainer, LoginInput, LoginButton } from './styles'   //LoginInput e LoginButton são div´s

import Logo from '../../Assets/logo.png'

const LoginPage = () => {
    const history = useHistory()

    return( 
        <LoginContainer>
            <LoginStyleContainer>
                <img src={ Logo } />
                <h1>Login</h1>
                <LoginInput>
                    <input 
                        placeholder='Informe seu E-mail'
                    />
                    <input 
                        placeholder='Informe a Senha'
                    />
                </LoginInput>
                <LoginButton>
                    <button onClick={ () => goToLastPage(history) }>Voltar</button>
                    <button onClick={ () => goToAdminHomePage(history) }>Entrar</button>
                </LoginButton>
            </LoginStyleContainer>
        </LoginContainer>
    )
}

export default LoginPage;