import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { goToCreateTripPage, goToLastPage, goToLoginPage, goToTripDetailsPage } from '../../Router/Coordinates';

const AdminHomePage = () => {
    const history = useHistory()

    return(
        <Fragment>
        <p>Quadro Administrativo - In Secrecy</p>
        <button onClick={ () => goToLastPage(history) }>Voltar</button>
        <button onClick={ () => goToCreateTripPage(history) }>Criar Viagem</button>
        <button onClick={ () => goToLoginPage(history) }>Logout</button>

        <button onClick={ () => goToTripDetailsPage(history) }>Detalhes da Viagem</button>
        </Fragment>
    )
}

export default AdminHomePage;