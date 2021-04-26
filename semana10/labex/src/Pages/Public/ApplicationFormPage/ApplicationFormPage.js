import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '../../../router/useForm';
import { FormContainer } from './style';
import { ButtonSubmit } from '../../../constants/buttons';
import { InputRegister } from '../../../constants/inputs';
import axios from 'axios';


function ApplicationFormPage() {
    const [form, onChange] = useForm({
        name: '', 
        age: '', 
        profession: '', 
        country: '', 
        applicationText: ''
    })

    const pathParams = useParams()
    const id = pathParams.id
    

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    const singUpTrip = (event) => {
        const body = {
            name: form.name,
            age: form.age,
            profession: form.profession,
            country: form.country,
            applicationText: form.applicationText
        }

        event.preventDefault()
   
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/dayane-lang-cruz/trips/${id}/apply`,
        body, {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        ).then(() => {
           alert('cadastro enviado com sucesso!')
        }).catch((error) => {
            alert('Erro ao enviar cadastro!')
            console.log(error)
        })
    }


    return (
        <FormContainer>
            <h3>Formulário de inscrição:</h3>
            <form onSubmit={onSubmitForm}>
            <InputRegister 
                value={form.name} 
                onChange={onChange}
                placeholder={'Nome'} 
                name={'name'}
                type={'text'}
                pattern={"[A-Za-z]{3,}"}
                required
            />
            <br/>
            <InputRegister 
                value={form.age} 
                onChange={onChange} 
                placeholder={'Idade'}
                name={'age'}
                type={'number'}
                required 
            />
            <br/>
            <InputRegister 
                value={form.applicationText} 
                onChange={onChange}
                placeholder={'Motivo'}
                name={'applicationText'}
                type={'text'}
                pattern={"[A-Za-z]{3,}"}
                required 
            />
            <br/>
            <InputRegister 
                value={form.profession} 
                onChange={onChange}
                placeholder={'Profissão'} 
                name={'profession'}
                type={'text'}
                required
            />
            <br/>
            <InputRegister 
                value={form.country} 
                onChange={onChange}
                placeholder={'País onde reside'}
                name={'country'}
                type={'text'}
                required 
            />
            <br/>
            <ButtonSubmit onClick={singUpTrip}>
                ENVIAR INSCRIÇÃO
            </ButtonSubmit>
            </form>
        </FormContainer>
    )
}
export default ApplicationFormPage;