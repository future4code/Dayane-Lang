import { TripsTitle, InfoTrip, ListContainer, TripsContainer, NameTrip } from './style';
import  { useRequestData }  from '../../../Hooks/useRequestData';
import { useHistory, useParams } from 'react-router-dom';
import  AdmHeader  from '../../../components/AdmHeader';
import { ButtonDetails, ButtonDelete  } from '../../../constants/buttons';
import axios from 'axios';



function ListTripsPage() {

    const pathParams = useParams()
    // eslint-disable-next-line no-unused-vars
    const id = pathParams.id

    const getTrips = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/dayane-lang-cruz/trips', [])


    //deletar viagem
    const deleteTrip = (id) => {
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/dayane-lang-cruz/trips/${id}`,
            {
                headers: {
                    auth: localStorage.getItem('token')
                }
            })
            .then((response) => {
                alert('Viagem deletada!')
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const history = useHistory()
    

    const goToTripDetailsPage = (id) => {
        history.push(`/detalhes_da_viagem/${id}`)
    }


    return (
        <>
          <AdmHeader />
            <TripsTitle>Viagens cadastradas:</TripsTitle>
                <ListContainer key={getTrips.id}>
                    {getTrips.map(trip => {
                        return (
                            <TripsContainer >
                                <NameTrip> 
                                   {trip.name} 
                                </NameTrip>
                                <InfoTrip>
                                    <p>Planeta:
                                        <br/>  
                                        {trip.planet}
                                    </p>
                                    <p>Data da viagem: 
                                    <br/> 
                                    {trip.date} 
                                    </p>
                                    <p>Duração da viagem: 
                                    <br/> 
                                    {trip.durationInDays} dias
                                    </p>
                                    <p>Descrição da viagem: 
                                        <br/> 
                                        {trip.description}
                                    </p>
                                <ButtonDetails onClick={() => goToTripDetailsPage(trip.id)}>
                                   DETALHES
                                </ButtonDetails>
                                <ButtonDelete  onClick={() => deleteTrip(trip.id)}>
                                   EXCLUIR
                                </ButtonDelete >
                                </InfoTrip>
                            </TripsContainer>
                        )
                    })}
                </ListContainer>
        </>
    )
}
export default ListTripsPage;