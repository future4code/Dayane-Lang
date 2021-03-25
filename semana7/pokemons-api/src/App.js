import React from "react";
import axios from "axios";
import styled from "styled-components";

const PokemonSelect = styled.select`
  font-size: 18px;
  width: 50%;
  padding: 10px;
  background-color: lightyellow;
`;

const ImagePokemon = styled.img`
  width: 15%;
  background-color: whitesmoke;
  border-radius: 100px;
  border: 5px solid black;
  margin: 40px;
`;

const ImagePokemonConteiner = styled.div`
  margin-top: 10%;
  text-align: center;
  background-position: 50%;
  height: 100%;
`

const PokemonConteiner = styled.div`
  background-image : url("https://w7.pngwing.com/pngs/870/875/png-transparent-pokemon-linia-evolutiva-de-houndour-game-art-hq-pokemon-computer-wallpaper-pokemon-art.png");
  border: 2px solid black;
  margin-top: 5%;
  text-align: center;
  background-position: 50%;
  color: ;
  text-shadow: 1px 2px black;
`


class App extends React.Component {
  state = {
    pokemonList: [],
    selectedPokemonUrl: ""
  };

  componentDidMount() {
    this.fetchPokemons();
  }

  fetchPokemons = () => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151"
    axios.get(apiUrl).then((response) => {
      this.setState({ pokemonList: response.data.results });
    });
  };

  onChangeSelect = (event) => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${event.target.value}`
    axios.get(apiUrl).then((response) => {
      this.setState({selectedPokemonUrl: response.data.sprites.front_default});
    });
  };


  render() {
    console.log(this.state.pokemonList);
    const optionList = this.state.pokemonList.map((pokemon) => {
      return <option key={pokemon.name}>{pokemon.name} </option>;
    });

    return (
      <PokemonConteiner>
        <h2>Selecione um Pokémon:</h2>
        <PokemonSelect onChange={this.onChangeSelect}>
          {optionList}
        </PokemonSelect>
          <ImagePokemonConteiner>
        <ImagePokemon src={this.state.selectedPokemonUrl}/>
        </ImagePokemonConteiner>
      </PokemonConteiner>
    );
  }
}

export default App;