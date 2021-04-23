import React from 'react';
import { LoginContainer } from './style';
import { ButtonSaveLogin } from '../../../constants/buttons';
import { InputLogin } from '../../../constants/inputs';
import { useForm } from '../../../router/useForm';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function LoginPage() {
    const [form, onChange] = useForm({
        email: '',
        password: ''
    })

    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault();
    }


    const newLogin = (event) => {
        const body = {
            email: form.email,
            password: form.password
        }

        event.preventDefault()
   
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/dayane-lang-cruz/signup',
        body, {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        ).then((response) => {
            localStorage.setItem('token', response.data.token)
            history.push('/login')
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <LoginContainer>
            <form onSubmit={onSubmitForm}>
            <h3>Cadastrar Login:</h3>
            <InputLogin 
            value={form.email} 
            onChange={onChange}
            placeholder={'E-mail'}
            name={'email'}
            type={'email'} 
            pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}'}
            required
        />
            <br />
        <InputLogin 
            value={form.password} 
            onChange={onChange}
            placeholder={'Senha'}
            name={'password'}
            type={'password'}
            required
        />
            <br/>
        <ButtonSaveLogin onClick={newLogin}>
            SALVAR
        </ButtonSaveLogin>
        </form>
        </LoginContainer>
    )
}
export default LoginPage;