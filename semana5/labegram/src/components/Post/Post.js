import React from 'react';
import './Post.css';


import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'


import iconeFavBranco from '../../imagens/favoritewhite.svg'
import iconeFavPreto from '../../imagens/favoriteblack.png'
import {IconeMarcador} from '../IconeMarcador/IconeMarcador'
import shareIcon from '../../img/share.png'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    marcador: false,
    compartilhar: false,
    numeroComentarios: 0
   
  }

//  Implementações Exercícios2 - 3

  onClickCurtida = () => {        // curtido = true ; componente renderizando
    this.setState({
      curtido: true,
      numeroCurtidas: this.state.numeroCurtidas + 1
    }) 
      
    if (this.state.numerocurtidas >= 1){
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1
     })
   }
      
  }

    onClickMarcador = () => {
      this.setState({
        marcador: true
    })
   }


    onClickComentario = () => {  //componente renderizando
      this.setState({
      comentando: !this.state.comentando //comentando
    })
  }

  onClickCompartilhar = () => {
    if(this.state.comentando) {
      this.setState({
        comentando: false
      })
    }
    this.setState({
      compartilhar: !this.state.compartilhar
    })
  }

    aoEnviarComentario = () => {
      this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1   //numerocomentarios ; componente renderizando
      })
    }

    aoCompartilhar = (event) => {
      this.setState({
        compartilhar: false
      })
      console.log('Post compartilhado no ' + event.target.value + ' com a mensagem: "Olha essa foto linda!"')
    }
 
  render() {

    let iconeCurtida

    if(this.state.curtido) {  //curtido
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeMarcador

    if(this.state.marcador) {
      iconeMarcador = iconeFavPreto

    } else {
      iconeMarcador = iconeFavBranco

    }
   
    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar

    if(this.state.compartilhar) {
      componenteCompartilhar = (
        <SecaoCompartilhar aoEnviar={this.aoCompartilhar} />
      )
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida} //componente que está em outra pasta que assim que clicado, ele registra a ação do usuário
          onClickIcone={this.onClickCurtida} //classe
          valorContador={this.state.numeroCurtidas} //classe numeroCurtidas
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios} //numeroComentarios
        />

        <IconeMarcador 
          icone={shareIcon}
          onClickIcone={this.onClickCompartilhar}
        />
        
        <IconeMarcador 
          icone={iconeMarcador}
          onClickIcone={this.onClickMarcador}
        />
        
      
      </div>
      {componenteComentario}
      {componenteCompartilhar}
    </div>
  }
}

export default Post