import React from "react";
import axios from "axios";
import styled from "styled-components";

const ConteinerAdd = styled.div`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 20px;
  text-align: center;
  padding: 5%;
  margin: 0;
`;

const TitleAdd = styled.h2`
  font-size: 40px;
`;

const FieldAdd = styled.input`
  width: 30%;
  padding: 1%;
  margin-bottom: 5%;
`;

const ButtonAdd = styled.button`
  font-size: 16px;
  width: 10%;
  padding: 1%;
  background-color: violetblue;
  color: whitesmoke;
`;

const ButtonViewlists = styled.button`
  font-size: 14px;
  border-radius: 10px;
  width: 10%;
  padding: 1%;
  background-color: violetblue;
  color: whitesmoke;
`;

class AddPlaylist extends React.Component {
  state = {
    name: ""
  };

  createNewPlaylist = () => {
    const body = {
      name: this.state.name
    };

    axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "dayane-lang-cruz"
          }
        }
      )
      .then(() => {
        alert(`Playlist ${this.state.name} criada com Sucesso!`);
        this.setState({ name: "" });
      })
      .catch((error) => {
        console.log(error.message);
        alert("Não foi possível criar a Playlist. Tente novamente!");
      });
  };

  onChangeNameValue = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <ConteinerAdd>
        <TitleAdd>Bem vindo(a) ao Labefy!</TitleAdd>

        <p>Criar uma nova Playlist:</p>
        <FieldAdd
          value={this.state.name}
          onChange={this.onChangeNameValue}
          placeholder={"Nome da PlayList"}
        >
        </FieldAdd>

        <ButtonAdd onClick={this.createNewPlaylist}>Salvar</ButtonAdd>
        <p>Visualizar Playlists criadas:</p>
        <ButtonViewlists onClick={this.props.changePage}>Suas Playlists</ButtonViewlists>
      </ConteinerAdd>
    );
  }
}

export default AddPlaylist;
