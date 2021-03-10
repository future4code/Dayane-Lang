import React from 'react';
import './Post.css';


import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeFavBranco from '../../imagens/favoritewhite.svg'
import iconeFavPreto from '../../imagens/favoriteblack.png'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    marcador: false,
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

    onClickComentario = () => {  //componente renderizando
      this.setState({
      comentando: !this.state.comentando //comentando
    })
  }

    aoEnviarComentario = () => {
      this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1   //numerocomentarios ; componente renderizando
      })
    }
 
  /*onClickMarcador = () => {
    
    if (this.state.marcador) {
        this.setState({marcador: true, callback: (iconeFavBranco) })
       
    } 
        this.setState({marcador: false, callback: (iconeFavPreto) })
  }*/
 
  render() {

    let iconeCurtida

    if(this.state.curtido) {  //curtido
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

   
    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
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

      <IconeComContador
          icone={iconeFavBranco|| iconeFavPreto}
          onClickIcone={this.state.icone}
      />
        
      
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post