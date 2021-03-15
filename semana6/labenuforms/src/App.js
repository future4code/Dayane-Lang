import React from 'react';
import styled from 'styled-components';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import EtapaFinal from './components/EtapaFinal';


const ButtonProxima = styled.button `
  background: transparent;
  margin: 15px;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
`

class App extends React.Component {
  state = {
    etapa: 1,
  };

  onClickProximaEtapa = () =>{
    this.setState({
      etapa: this.state.etapa + 1
    })
  }

  render() {

    const renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1: 
          return <Etapa1 />
        case 2: 
          return <Etapa2 />
        case 3: 
          return <Etapa3 />
        case 4:
          return <EtapaFinal />
        default:

      }
    };
  
    return (

      <div className = "App">
        {renderizaEtapa()}
        {this.state.etapa !== 4 && <ButtonProxima onClick={this.onClickProximaEtapa}>Próxima Etapa</ButtonProxima>}
       
      </div>
    );

  }
}

export default App;
