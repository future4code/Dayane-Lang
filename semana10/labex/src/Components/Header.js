import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderContainer, Logo, Menu } from './styled';
import { ButtonAdm } from '../Assets/buttonadm.svg';
import LogoSite from '../Assets/logo.png';



const Header = () => {

    const history = useHistory()

    const goToLoginPage = () => {
        history.push('/login')
    }

    return (
        <HeaderContainer>
            <Logo src={ LogoSite } />
            <Menu to='/home'>HOME</Menu>
            <Menu to='/viagens'>VIAGENS</Menu>
            <ButtonAdm onClick={ goToLoginPage }>
                ADM
            </ButtonAdm>
        </HeaderContainer>
    )
}
export default Header;