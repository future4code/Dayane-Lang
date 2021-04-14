import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { goToLastPage } from '../../Router/Coordinates';

const ApplicationFormPage = () => {
    const history = useHistory();

    return(
        <Fragment>
        <p>Inscreva-se para uma Viagem mais que Espacial</p>
        <button onClick={ () => goToLastPage(history) }>Voltar</button>
        <button>Enviar</button>
        </Fragment>
    )
}

export default ApplicationFormPage;