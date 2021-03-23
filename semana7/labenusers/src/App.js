import react from 'react';
import './App.css';
import CadastroUsuario from './Components/CadastroUsuario';
import DadosUsuarios from './Components/DadosUsuario';
import ListaUsuarios from './Components/listaUsuarios';

class App extends Component {
  state = {
    pagina: true,
  }

  trocaPagina = () => {
    if (this.state.pagina) {
       this.setState({pagina: false})
    }else {
      this.setState({pagina: true})
    }

  };

  render() {
    const renderizaLista = () => {
      if (this.state.pagina) {
        return <CadastroUsuario trocaPagina={this.trocaPagina}/>
      }else {
        return <ListaUsuarios trocarPagina={this.trocarPagina}/>
      }
    };
    return (
      <div className="App">
        {renderizaLista()}
      </div>
    );
  }
}

export default App;


