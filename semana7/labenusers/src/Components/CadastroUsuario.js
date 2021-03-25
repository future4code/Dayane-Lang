import React from "react";
import axios from "axios";
import styled from 'styled-components';

// EXERCÍCIO 1 - TELA DE CADASTRO

const FormContainer = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    border-radius: 20px;
    color: whitesmoke;
    text-shadow: 2px 2px 2px black;
    background-image: url("https://cdn.hipwallpaper.com/m/85/91/Y2KHar.jpg");
    padding: 60px;
    width: 30vw;
    height: 40vh;
    margin: 5vw 30vw;
    display: grid;
    grid-template-columns: 1fr;
    align-items: flex-start;
`
const InputNome = styled.label`
  margin-bottom: 5px;
  margin-top: 5px;
`;

const InputEmail = styled.label`
  margin-bottom: 8px;
  margin-top: 10px;
`;

const BotaoSalvar = styled.button`
  width: 15vw;
  padding: 3px;
  margin-bottom: 8px;
  margin-top: 10px;
  background-color: rgba(89,89,171);
  color: whitesmoke;
  border-radius: 10px;
  font-size: 14px;
`;

const BotaoMudaPagina = styled.button`
  width: 20vw;
  padding: 3px 5px;
  margin-bottom: 15px;
  background-color:   rgba(35,107,142);
  color: whitesmoke;
  border-radius: 10px;
  font-size: 14px;
`;


class CadastroUsuario extends React.Component {
  state = {
    nomeValue: "",
    emaiLValue:""
  }

  criarNovoUsuario =() => {
    const body = {
        name: this.setState.nomeValue,
        email: this.setState.emailValue
    };

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body, {
            headers: { 
                Authorization: "dayane-lang-cruz"
            }
        }
    )

    .then((resposta) => {
        alert("Usuário Cadastrado!")
        this.setState({ nomeValue: "", emailValue:"" });
    })
    .catch((erro) => {
        console.log(erro.message);
        alert("Não foi possível cadastrar Usuário!");
    })
  };

    onChangeNomeValue = (event) => {
        this.setState({nomeValue: event.target.value});
    };
    
    onChangeEmailValue = (event) => {
        this.setState({emailValue: event.target.value})
    };

    render() {
        return (
            <FormContainer>
                <InputNome>Nome:</InputNome>
                <input
                value={this.state.nomeValue}
                onChange={this.onChangeNomeValue}
                placeholder='Digite seu nome'/>
                <InputEmail>E-mail:</InputEmail>
              <input
                value={this.state.emailValue}
                onChange={this.onChangeEmailValue}
                placeholder='Digite seu e-mail'/>
              <BotaoSalvar onClick={this.criarNovoUsuario}>Salvar</BotaoSalvar>
              <BotaoMudaPagina onClick={this.props.trocarPaginas}>Ir-Página de Lista</BotaoMudaPagina>
            </FormContainer>
        )
    }

}
 
export default CadastroUsuario;

/*export default class CreateUserPage extends React.Component {
  state = {
    name: "",
    email: ""
  };

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  createUser = () => {
    const body = {
      name: this.state.name,
      email: this.state.email
    };

    axios
      .post(baseUrl, body, axiosConfig)
      .then((res) => {
        console.log(res);
        alert("O usuário foi criado com sucesso!");
        this.setState({ name: "", email: "" });
      })
      .catch((err) => {
        alert("Deu ruim :(");
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h2>Criar usuário</h2>
        <input
          onChange={this.handleName}
          value={this.state.name}
          placeholder="Nome"
        />
        <input
          onChange={this.handleEmail}
          value={this.state.email}
          placeholder="E-mail"
        />
        <button onClick={this.createUser}>Criar</button>
      </div>
    );
  }
}*/
