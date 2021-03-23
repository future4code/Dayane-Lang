import React from "react";
import axios from "axios";
import styled from 'styled-components';

const FormContainer = div.styled `
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    border-radius: 20px;
    color: whitesmoke;
    text-shadow: 2px 2px 2px black;
    //background-image: url("g");
    padding: 60px;
    width: 30vw;
    height: 40vh;
    margin: 5vw 30vw;
    display: grid;
    grid-template-columns: 1fr;
    align-items: flex-start;
`

const InputContainer = label.styled


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

    onChangeNameValue = (event) => {
        this.setState({nameValue: event.target.value});
    };
    
    onChangeEmailValue = (event) => {
        this.setState({emailValue: event.target.value})
    };

    render() {
        return (




        )
    }

  }
    

  }
}  








export defaut CadastroUsuario;

.then((resposta) => {
    alert("Usuário cadastrado!");
    this.setState({ nameValue: "", emailValue: ""});
  })
  .catch((erro) => {
    console.log(erro.message);
    alert("Não foi possível cadastrar usuário!")
  })
  };


onChangeNameValue = (event) => {
this.setState({nameValue: event.target.value});
};

onChangeEmailValue = (event) => {
this.setState({emailValue: event.target.value})
  };


render() {
return (
  <FormContainer>
    <InputContainer>Nome:</InputContainer>
      <input
        value={this.state.nameValue}
        onChange={this.onChangeNameValue}
        placeholder='Digite seu nome'/>
        <EmailContainer>E-mail:</EmailContainer>
      <input
        value={this.state.emailValue}
        onChange={this.onChangeEmailValue}
        placeholder='Digite seu e-mail'/>
      <BotaoSalvar onClick={this.criarNovoUsuario}>Salvar</BotaoSalvar>
      <BotaoMudarPagina onClick={this.props.trocarPagina}>Ir para página de lista</BotaoMudarPagina>
    </FormContainer>
)
}
}
export default Cadastro;