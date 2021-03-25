import react from 'react';
import './App.css';
import CadastroUsuario from './Components/CadastroUsuario';
//import DadosUsuarios from './Components/DadosUsuario';
import ListaUsuarios from './Components/ListaUsuarios';

class App extends react.Component{
  state = {
    pagina: "cadastroUsuario"
  };

  trocarPaginas = () => {
    if (this.state.pagina === "cadastroUsuario") {
      this.setState({ pagina: "listaUsuarios" });
    } else if (this.state.pagina === "listaUsuarios") {
      this.setState({ pagina: "cadastroUsuario" });
    }
  };

  renderizaPagina = () => {
    switch (this.state.pagina) {
      case "cadastroUsuario":
        return <CadastroUsuario />;
      case "listaUsuarios":
        return <ListaUsuarios />;
      default:
        return <div></div>;
    }
  };
  render() {
    return (
      <div className="App">
        <h1>Labenusers</h1>
        <button onClick={this.changePage}>Trocar de página</button>
        {this.renderizaPagina()}
      </div>
    );
  }
}

export default App;






/*render() {
  const renderizaLista = () => {
    if (this.state.paginaCadastro) {
      return <CadastroUsuario trocaDePaginas={this.paginaCadastro}/>
    }else {
      return <ListaUsuarios trocaDePaginas={this.paginaLista}/>
    }
  };
  return (
    <div className="App">
      {renderizaLista()}
    </div>
  );
}*/