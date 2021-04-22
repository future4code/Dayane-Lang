import React from 'react'
import { useHistory } from 'react-router-dom'
import { AdmHeaderContainer, AdmLogo} from './styled'
import { ButtonCreateTrip, ButtonRegisterLogin, ButtonLogout } from '../constants/buttons'
import LogoSite from '../assets/logo.png';



const AdmHeader = () => {

    const history = useHistory()

    const goToSingUpPage = () => {
        history.push('/cadastrar_login')
    }

    const goToCreateTrip = () => {
        history.push('/criar_viagens')
     }

    const logOut = () => {
        localStorage.removeItem('token')
        history.push('/home')
    }

    return (
        <AdmHeaderContainer>
            <AdmLogo src={LogoSite} />
            <ButtonCreateTrip onClick={goToCreateTrip}>
                ADICIONAR VIAGEM
            </ButtonCreateTrip>
            <ButtonRegisterLogin onClick={goToSingUpPage}>
                CADASTAR LOGIN
            </ButtonRegisterLogin>
            <ButtonLogout onClick={logOut}>
                LOGOUT
            </ButtonLogout>
        </AdmHeaderContainer>
    )
}
export default AdmHeader;
