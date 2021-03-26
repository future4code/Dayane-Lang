import React from "react";
import axios from "axios";
import styled from "styled-components";
import AddMusics from "AddMusics";

const ConteinerPlayLists = styled.div`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  padding: 5%;
`;

const ButtonBack = styled.button`
  font-size: 14px;
  border-radius: 10px;
  width: 10%;
  padding: 10px;
  margin-bottom: 4%;
  background-color: darkorange;
  color: whitesmoke;
`;

const SearchField = styled.input`
  width: 15%;
  padding: 5px;
  margin-bottom: 5%;
`;

const ButtonSearch = styled.button`
  font-size: 14px;
  width: 10%;
  padding: 5.2px;
  background-color: darkorange;
  color: whitesmoke;
`;

const PlaylistsNames = styled.span`
  padding-bottom: 10%;
  line-height: 50px;
`;

const ButtonDelete = styled.span`
  color: red;
  margin-left: 1%;
`;

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const axiosConfig = {
  headers: {
    Authorization: "dayane-lang-cruz"
  }
};

class PlayLists extends React.Component {
  state = {
    playlists: [],
    title: "Suas Playlists:",
    primaryPage: "playlists",
    listId: "",
    name: ""
  };

  componentDidMount() {
    this.fetchPlayLists();
  }

  fetchPlayLists = () => {
    axios.get(baseUrl, axiosConfig)
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  deletePlaylist = (listId) => {
    if (window.confirm("Você tem certeza que deseja deletar esta Playlist?")) {
      axios.delete(`${baseUrl}/${listId}`, axiosConfig)
        .then(() => {
          alert("Playlist deletada!");
          this.fetchPlayLists();
        })
        .catch((erro) => {
          alert("Playlist não deletada. Tente novamente!");
          console.log(erro.message);
        });
    }
  };

  changePage = (listId) => {
    if (this.state.primaryPage === "playlists") {
      this.setState({
        primarytPage: "playlistDetail",
        listId: listId
      });
    } else {
      this.setState({ primeryPage: "playlists", listId: "" });
    }
  };

  handleNameChange = (event) => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleSearchPlaylist = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${this.state.name}`,
        axiosConfig
      )
      .then((response) => {
        this.setState({ playlists: response.data.result.playlist });
      })
      .catch((error) => {
        alert("PlayList não encontrada.");
        console.log(error);
      });
  };

  render() {
    return (
      <ConteinerPlayLists>
        {this.state.primaryPage === "playlists" ? (
          <div>
            <ButtonBack onClick={this.props.changePage}>Voltar</ButtonBack>
            <h3>Procurar PlayList:</h3>
              <SearchField
                placeholder="Insira o nome exato da Playlist"
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
              <ButtonSearch onClick={this.handleSearchPlayList}>Buscar</ButtonSearch>
            <ul>
              <h2>{this.state.title}</h2>
              {this.state.PlayLists.length === 0 && <div>Processando...</div>}
              {this.state.PlayLists.map((list) => {
                return (
                  <li>
                    <PlaylistsNames
                      onClick={() => this.changePage(list.id, list.name)}
                    >
                      {list.name}
                    </PlaylistsNames>
                    <ButtonDelete onClick={() => this.deletePlaylist(list.id)}>
                      X
                    </ButtonDelete>
                    <hr />
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <AddMusics listId={this.state.listId} changePage={this.changePage} />
        )}
      </ConteinerPlayLists>
    );
  }
}

export default PlayLists;