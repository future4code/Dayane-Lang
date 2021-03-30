import React from 'react';
import './App.css';


import Post from './components/Post/Post';
import FotoPerfil1 from './imagens/perfil1.jpg';
import FotoPerfil2 from './imagens/perfil2.jpg';
import FotoPerfil3 from './imagens/perfil3.jpg';
import Post1 from './imagens/post1.jpg';
import Post2 from './imagens/post2.jpg';
import Post3 from './imagens/post3.jpg';

import styled from 'styled-components'

const InputPost = styled.input`
  margin: 5px;
`

const ButtonAdd = styled.button`
  background-color: transparent;
  margin: 10px;
`


class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario :'Paulinha',
        fotoUsuario : FotoPerfil1 ,
        fotoPost : Post1
      },
      {
        nomeUsuario :'João Pedro',
        fotoUsuario: FotoPerfil2,
        fotoPost: Post2
      },
      {
        nomeUsuario:'Daenerys',
        fotoUsuario: FotoPerfil3,
        fotoPost: Post3 
      }
    ],

    valorInputNome: '',
    valorInputUsuario: '',
    valorInputPost: ''
  }

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputUsuario,
      fotoPost: this.state.valorInputPost
    }

    const novosPosts = [...this.state.post, novoPost]

    this.setState({ post: novosPosts })
  }

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value })
  }

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value })
  }

  onChangeInputPost = (event) => {
    this.setState({ valorInputPost: event.target.value })
  }

  render() {
    const listaPost = this.state.post.map((post) => {
      return (
        <Post key={post.nomeUsuario}
          nomeUsuario={ post.nomeUsuario }
          fotoUsuario={ post.fotoUsuario }
          fotoPost={ post.fotoPost }
        />
      )
    })

    //<img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

    return (
      <div className={'app-container'}>
        <InputPost 
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={'Nome de Usuário'}
        />

        <InputPost
          value={this.valorInputUsuario}
          onChange={this.valorInputUsuario}
          placeholder={'Foto de Perfil'}
        />

        <InputPost
          value={this.valorInputPost}
          onChange={this.valorInputPost}
          placeholder={'Foto que deseja postar'}
        />

        <ButtonAdd onClick={this.adicionarPost}>Postar</ButtonAdd>

        {listaPost}
      </div>
    );
  }
}

export default App;