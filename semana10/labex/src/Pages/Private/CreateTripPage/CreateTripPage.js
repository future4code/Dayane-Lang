import React from 'react';
import { useForm } from '../../../Router/useForm';
import { CreateTripContainer } from './style';
import { ButtonSaveTrip } from '../../../constants/buttons';
import { InputCreateTrip } from '../../../constants/inputs';
import axios from 'axios';


function CreateTripPage() {
    const [form, onChange] = useForm({
        email: '', 
        description: '',
        durationInDays: '',
        planet: '',
        date: ''
    })


    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    
    //criar viagem
    const createTrip = (event) => {
        const body = {
            name: form.name,
            description: form.description,
            durationInDays: form.durationInDays,
            planet: form.planet,
            date: form.date
        }
        
        event.preventDefault()

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/dayane-lang-cruz/trips',
        body, {
            headers: {
                auth: localStorage.getItem('token')
            }
        }).then(() => {
            alert('Viagem cadastrada com sucesso!')
        }).catch((error) => {
            alert('Não foi possível cadastrar a viagem!')
            console.log(error)
        })
    }


    return (
        <CreateTripContainer>
            <h3>Criar Viagem:</h3>
            <form onSubmit={onSubmitForm}>
                <InputCreateTrip 
                    value={form.name} 
                    onChange={onChange}
                    placeholder={'Nome'}
                    name={'name'}
                    type={'text'} 
                    pattern={'[A-Za-z]{3,}'}
                    required 
                />
                <br/>
                <InputCreateTrip 
                    value={form.planet} 
                    onChange={onChange}
                    placeholder={'Planeta'}
                    name={'planet'}
                    type={'text'} 
                    pattern={'[A-Za-z]{3,}'}
                    required  
                />
                <br/>
                <InputCreateTrip 
                    value={form.date} 
                    onChange={onChange}
                    placeholder={'Data'}
                    name={'date'}
                    type={'date'}
                    min={'2020-11-19'}
                    required
                />
                <br/>
                <InputCreateTrip 
                    value={form.description} 
                    onChange={onChange}
                    placeholder={'Descrição'} 
                    name={'description'}
                    type={'text'}
                    required
                />
                <br/>
                <InputCreateTrip
                    value={form.durationInDays} 
                    onChange={onChange} 
                    placeholder={'Duração em dias'} 
                    name={'durationInDays'}
                    type={'number'}
                 />
                 <br/>
                <ButtonSaveTrip onClick={createTrip}>
                    SALVAR
                </ButtonSaveTrip>
                </form>
        </CreateTripContainer>
    )
}
export default CreateTripPage;