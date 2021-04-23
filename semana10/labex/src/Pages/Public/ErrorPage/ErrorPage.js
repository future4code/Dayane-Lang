import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

const ErrorPage = () => {
    const history = useHistory();
    return(
        <Fragment>
            <p>Erro 404 - Ihhh deu Ruim!</p>
            <button onClick={ history.goBack }>Voltar</button>
        </Fragment>
    )
}

export default ErrorPage;