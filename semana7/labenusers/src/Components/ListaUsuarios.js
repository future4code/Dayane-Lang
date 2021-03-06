import React from "react";
import axios from "axios";
import styled from "styled-components";
import DadosUsuario from "./DadosUsuario";

// EXERCÍCIO 2 - TELA LISTA DE USUÁRIOS

const ListaContainer = styled.div`
  border-radius: 20px;
  background-image: url("https://cdn.hipwallpaper.com/m/81/55/Hn0as2.jpg");
  color: whitesmoke;
  text-shadow: 2px 2px 2px black;
  padding: 50px;
  width: 50vw;
  margin: 5vw 20vw;
  display: grid;
  justify-content: center;
`
const BotaoDeletar = styled.span`
  color: red;
  margin-left: 10px;
`
const BotaoVoltar = styled.button`
  background-color: rgba(8, 79, 92, 0.623);
  border-radius: 10px;
  padding: 5px;
  color: whitesmoke;
  margin-left: 10px;
`

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const axiosConfig = {
  headers: {
    Authorization: "dayane-lang-cruz"
  }
}


class ListaUsuarios extends React.Component {

  state = {
    listaDados: [],
    info: true
  }

  mostraDados = () => {
    this.setState({info: !this.state.info})
  };

  componentDidMount = () => {
    this.mostraUsuarios();
  }
    
  mostraUsuarios = () => {
    axios.get(baseUrl, axiosConfig).then((resposta) => {
      this.setState({listaDados: resposta.data});
    })
      .catch((erro) => {
        console.log(erro.message)
      })
  };

  deletaUsuario = (id) => {

    //DESAFIO 1 - Inseri uma mensagem para  confirmar a exclusão do usuário da lista.

    if(window.confirm("Você tem certeza que deseja excluir este usuário?") === true){
        axios.delete(`${baseUrl}/${id}`, axiosConfig).then(() => {
            alert("Usuário deletado!")
            this.mostraUsuarios()
        })
          .catch((erro) => {
            console.log(erro.message)
          })
    }
  }

  render() {
    const mostrarLista = this.state.listaDados.map((usuario) => {
      if(this.state.infos){
         return (
          <p key={usuario.id} > {usuario.name} {usuario.email}
            <BotaoDeletar onClick={() => this.deletaUsuario(usuario.id)}> X </BotaoDeletar>
            <hr />
            </p>
        )
      } else {
        return(
          <DadosUsuario/>
        )
      }
    })
    
    return (
      <ListaContainer>
          <BotaoVoltar onClick={this.props.trocaPagina}>Voltar-Página de Cadastro</BotaoVoltar>
        
          <h2>Usuários Cadastrados:</h2>
          <div onClick={this.props.mostraDados}>{mostrarLista}</div> 
      </ListaContainer>
    )
  }
  
}

export default ListaUsuarios;

/*import React from "react";
import axios from "axios";
import { axiosConfig, baseUrl } from "../parameters";

export default class UsersListPage extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getAllUsers();
  }

  // getAllUsers = () => {
  //   axios
  //     .get(baseUrl, axiosConfig)
  //     .then((res) => {
  //       this.setState({ users: res.data });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  getAllUsers = async () => {
    try {
      const response = await axios.get(baseUrl, axiosConfig);
      this.setState({ users: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  deleteUser = (id) => {
    if (window.confirm("Deseja mesmo deletar o usuário?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          axiosConfig
        )
        .then((res) => {
          this.getAllUsers();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    const mapUsers = this.state.users.map((user) => {
      return (
        <div key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => this.deleteUser(user.id)}>Deletar</button>
        </div>
      );
    });
    return (
      <div>
        <h2>Lista de Usuários</h2>
        {mapUsers}
      </div>
    );
  }
}
*/