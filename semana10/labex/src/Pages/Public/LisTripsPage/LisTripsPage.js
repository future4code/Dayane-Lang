import { TripsTitle, ListContainer, TripsContainer, NameTrip, InfoTrip } from '../trips/style';
import { ButtonRegister } from '../../../constants/buttons';
import  { useRequestData }  from '../../../Hooks/useRequestData';
import  Header  from '../../../components/Header';
import  Footer  from '../../../components/Footer';
import { useHistory } from 'react-router-dom';



function ListTripsPage() {

    const getTrips = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/dayane-lang-cruz/trips', [])

    const history = useHistory()


    const goToApplicationForm = (id) => {
        history.push(`/inscricao/${id}/apply`)
    }

    return (
        <div>
            <Header/>
            <TripsTitle>Viagens disponíveis:</TripsTitle>
            <ListContainer key={getTrips.id}>
                {getTrips.map(trip => {
                    return (
                        <TripsContainer >
                            <NameTrip> 
                                {trip.name} 
                            </NameTrip>
                            <InfoTrip>
                                <p>Data da viagem: 
                                   <br/> 
                                   {trip.date} 
                                </p>
                                <p>Descrição: 
                                   <br/> 
                                   {trip.description} 
                                </p>
                                <ButtonRegister onClick={() => goToApplicationForm(trip.id)}>
                                    INSCRIÇÃO
                                </ButtonRegister>
                            </InfoTrip>
                        </TripsContainer>
                    )
                })}
            </ListContainer>
            <Footer/>
        </div>
    )
}
export default ListTripsPage;