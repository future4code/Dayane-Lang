import React, { useEffect } from 'react';
import { LoginContainer } from './style';
import { ButtonLogin } from '../../../constants/buttons';
import { InputNewLogin } from '../../../constants/inputs';
import { useForm } from '../../../Router/useForm';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';


function LoginPage() {
    const [form, onChange] = useForm({
        email: '',
        password: ''
    })
    

    const pathParams = useParams()
    const id = pathParams.id
    const history = useHistory()
    
    
    const onSubmitForm = (event) => {
        event.preventDefault();
    }


    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token) {
            history.push(`/viagens_adm/${id}`)
        }
    }, [history, id])

  
    const login = () => {
        const body = {
            email: form.email,
            password: form.password
        }
   
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/dayane-lang/login',
        body, {
            headers: {
                auth: localStorage.getItem('token')
            }
        }).then((response) => {
            localStorage.setItem('token', response.data.token)
            history.push(`/viagens_adm/${id}`)
        }).catch((error) => {
            alert('Login inválido!')
            console.log(error)
        })
    }

    return (
        <LoginContainer>
            <h3>Administrador:</h3>
            <form onSubmit={onSubmitForm}>
            <InputNewLogin 
                value={form.email} 
                onChange={onChange}
                placeholder={'E-mail'}
                name={'email'}
                type={'email'}
                pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}'}
                required  
            />
            <br />
            <InputNewLogin 
                value={form.password} 
                onChange={onChange}
                placeholder={'Senha'} 
                name={'password'}
                type={'password'}
                required 
            />
            <br/>
            <ButtonLogin onClick={login}>
                LOGIN
            </ButtonLogin>
            </form>
        </LoginContainer>
    )
}
export default LoginPage;