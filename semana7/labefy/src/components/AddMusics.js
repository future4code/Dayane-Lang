import React from "react";
import axios from "axios";
import styled from "styled-components";

const ButtonBacklists = styled.button`
  font-size: 14px;
  border-radius: 10px;
  width: 15%;
  padding: 10px;
  margin-bottom: 4%;
  background-color: violetblue;
  color: whitesmoke;
`;

const TracksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: left;
  margin: 2% 2%;
  line-height: 80px;
`;


const ButtonAddSoundTracks = styled.button`
  font-size: 14px;
  border-radius: 10px;
  width: 15%;
  padding: 10px;
  margin-bottom: 4%;
  background-color: violetblue;
  color: whitesmoke;
`;

const DataTracksField = styled.input`
  width: 25%;
  padding: 10px;
  margin-top: 2%;
`;

const ButtonAddDataTracks = styled.button`
  font-size: 16px;
  border-radius: 10px;
  width: 27%;
  padding: 10px;
  margin-top: 2%;
  background-color: violetblue;
  color: whitesmoke;
`;

const axiosConfig = {
  headers: {
    Authorization: "dayane-lang-cruz"
  }
};

export default class AddMusics extends React.Component {
  state = {
    playlists: [],
    playlistDetail: [],
    playlistEdition: "editButton",
    name: "",
    artist: "",
    url: ""
  };

  componentDidMount() {
    this.getPlaylistDetails();
  }

  getPlaylistDetails = (listId) => {
    axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.listId}/tracks`,
        axiosConfig
      )
      .then((response) => {
        this.setState({ playlistDetail: response.data.result.tracks });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  changePlaylistEditonFiel = () => {
    if (this.state.playlistEdition === "editButton") {
      this.setState({ playlistEdition: "playlistEditForm" });
    } else {
      this.setState({ playlistEdition: "editButton" });
    }
  };

  handleNameChange = (event) => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleArtistChange = (event) => {
    const newArtistValue = event.target.value;

    this.setState({ artist: newArtistValue });
  };

  handleUrlChange = (event) => {
    const newUrlValue = event.target.value;

    this.setState({ url: newUrlValue });
  };

  handleCreatePlaylist = (listId) => {
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url
    };

    axios.post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.listId}/tracks`,
        body,
        axiosConfig
      )
      .then((response) => {
        this.setState({ name: "", artist: "", url: "" });
        this.getPlaylistDetails();
        this.changePlaylistEditonFiel();
        alert("PlayList editada com Sucesso!");
        console.log(response);
      })
      .catch((error) => {
        alert("Erro ao editar Playlist!");
        console.log(error.message);
      });
  };

  render() {
    const renderedDetails = this.state.playlistDetail.map((playlist) => {
      return (
        <div key={playlist.id}>
          <p>
            Artista: {playlist.artist} <br /> Música: {playlist.name}
          </p>
          <audio src={playlist.url}  controls></audio>
        </div>
      );
    });

    const playlistEdition =
      this.state.playlistEdition === "editButton" ? (
        <ButtonAddSoundTracks onClick={this.changePlaylistEditonFiel}>
          Adicionar tracks
        </ButtonAddSoundTracks>
      ) : (
        <div>
          <p>Adicionar trilha sonora a playlist:</p>
          <DataTracksField
            placeholder="Nome da música"
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <br />

          <DataTracksField
            placeholder="Artista"
            type="text"
            value={this.state.artist}
            onChange={this.handleArtistChange}
          />
          <br />

          <DataTracksField
            placeholder="Url"
            type="url"
            value={this.state.url}
            onChange={this.handleUrlChange}
          />
          <br />

          <ButtonAddDataTracks onClick={this.handleCreatePlaylist}>
            Salvar
          </ButtonAddDataTracks>
        </div>
      );

    return (
      <div>
        <div>
          <ButtonBacklists onClick={this.props.changePage}>
            Voltar as Playlists
          </ButtonBacklists>
          <TracksContainer>{renderedDetails}</TracksContainer>
          <hr />
        </div>
        <div>{playlistEdition}</div>
      </div>
    );
  }
}

