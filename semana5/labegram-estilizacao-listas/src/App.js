import React from 'react';
import './App.css';
//import styled from "styled-components"

import Post from './components/Post/Post';
import FotoPerfil1 from './imagens/perfil1.jpg';
import FotoPerfil2 from './imagens/perfil2.jpg';
import FotoPerfil3 from './imagens/perfil3.jpg';
import Post1 from './imagens/post1.jpg';
import Post2 from './imagens/post2.jpg';
import Post3 from './imagens/post3.jpg';

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'FotoPerfil1',
        fotoPost: 'Post1',
      },
      {
        nomeUsuario: 'João Pedro',
        fotoUsuario: 'FotoPerfil2',
        fotoPost: 'Post2',
      },
      {
        nomeUsuario: 'Daenerys',
        fotoUsuario: 'FotoPerfil3',
        fotoPost: 'Post3',
      },
    ],
  };

  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={FotoPerfil1} // Implementação Exercício 1
          fotoPost={Post1}
        />
                                                 
        <Post
          nomeUsuario={'João Pedro'}
          fotoUsuario={FotoPerfil2}
          fotoPost={Post2}
         />
        
      const listaPosts = this.state.posts.map((post) => {
      return (
          <Post
            nomeUsuario={'Daenerys'}
            fotoUsuario={FotoPerfil3}
            fotoPost={Post3}
          />

            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}

          //</div>>
          //</Post>
      );
    });

    return (
      <div>
        <div>{listaPosts}</div>
      </div>
    );
  }
}



export default App;

