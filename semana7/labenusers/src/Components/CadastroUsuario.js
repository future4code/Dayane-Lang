import React from "react";
import axios from "axios";
import styled from 'styled-components';

const FormContainer = div.styled `
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    border-radius: 20px;
    color: whitesmoke;
    text-shadow: 2px 2px 2px black;
    
    padding: 60px;
    width: 30vw;
    height: 40vh;
    margin: 5vw 30vw;
    display: grid;
    grid-template-columns: 1fr;
    align-items: flex-start;
`
/*//background-image: url("g");*/

const InputName = styled.label`
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
  background-color: rgba(45, 209, 45, 0.37);
  color: whitesmoke;
  border-radius: 10px;
  font-size: 14px;
`;

const BotaoMudarPagina = styled.button`
  width: 20vw;
  padding: 3px 5px;
  margin-bottom: 15px;
  background-color:   rgba(228, 207, 26, 0.37);
  color: whitesmoke;
  border-radius: 10px;
  font-size: 14px;
`;


class CadastroUsuario extends React.Component {
  state = {
    nameUser: "",
    emailUser:""
  }

  criaNovoUsuario =() => {
    const body = {
        name: this.setState.nameUser,
        email: this.setState.emailUser
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
        this.setState({ nameUser: "", emailUser:"" });
    })
    .catch((erro) => {
        console.log(erro.message);
        alert("Não foi possível cadastrar Usuário!");
    })
  };

    onChangeNameUser = (event) => {
        this.setState({nameUser: event.target.value});
    };
    
    onChangeEmailUser = (event) => {
        this.setState({emailUser: event.target.value})
    };

    render() {
        return (
            <FormContainer>
                <inputName>Nome:</inputName>
                <input>
                    value={this.state.nameUser}
                    onChange={this.onChangeNameUser}
                    placeholder= "Digite o seu nome de Usuário" 
                </input>
                <inputEmail>Email:</inputEmail>
                <input>
                    value={this.state.emailUser}
                    onChange={this.onChangeEmailUser}
                    placeholder= 'Digite o seu e-mail' 
                    <BotaoSalvar onclick={this.criaNovoUsuario}>Salvar</BotaoSalvar>
                    <BotaoMudarPagina onClick={this.props.trocarPagina}>Página Lista de Usuários</BotaoMudarPagina>
                </input>
            </FormContainer>
        )
    }

}
    
export default CadastroUsuario;

