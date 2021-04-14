import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { goToAdminHomePage, goToLastPage } from '../../Router/Coordinates';
import { LoginContainer, LoginStyleContainer, LoginInput, LoginButton } from './style';   //LoginInput e LoginButton são div´s
import Logo from '../../Assets/logo.png';


const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleEmail = (ev) => {
        setEmail(ev.target.value)
    }

    const handlePassword = (ev) => {
        setPassword(ev.target.value)
    }

    const login = () => {
        const body = {
            email: email,
            password: password
        }

        axios
            .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/dayane-lang-cruz/login', body)
            .then((res) => {
                console.log(res.data)
                window.localStorage.setItem('token', res.data.token)
                history.push('/admin/trips/:id')
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return( 
        <LoginContainer>
            <LoginStyleContainer>
                <img src={ Logo } alt= 'Logo' />
                <h1>Login</h1>
                <LoginInput>
                    <input 
                        value={ email }
                        onChange={ handleEmail }
                        placeholder='Informe seu E-mail'
                    />
                    <input 
                        type='password'
                        value={ password }
                        onChange={ handlePassword }
                        placeholder='Informe a Senha'
                    />
                </LoginInput>
                <LoginButton>
                    <button onClick={ () => goToLastPage(history) }>Voltar</button>
                    <button onClick={ login }>Entrar</button>
                </LoginButton>
            </LoginStyleContainer>
        </LoginContainer>
    )
}

export default LoginPage;