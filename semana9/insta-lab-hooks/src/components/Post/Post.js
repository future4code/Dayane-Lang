//Exerc.4
import React, { useState } from 'react';
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles';

import IconeComContador from '../IconeComContador/IconeComContador';
import SecaoComentario from '../SecaoComentario/SecaoComentario';

import iconeCoracaoBranco from '../../img/favorite-white.svg';
import iconeCoracaoPreto from '../../img/favorite.svg';
import iconeComentario from '../../img/comment_icon.svg';

//Exer.5 e 7
const Post = (props) => {
  const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentarios, setComentarios] = useState([])

//Exerc.10
  const onClickCurtida = () => {
    if(curtido) {
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas - 1)
    } else {
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas + 1)
    }
  };

//Exerc.14
  const onClickComentario = () => {
    setComentando(!comentando)
  };

//Exerc.17
  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario]
      setComentarios(listaDeComentarios)
      setComentando(false)
      setNumeroComentarios(numeroComentarios + 1)
  };

 // Exerc.11
 const iconeCurtida = numeroCurtidas ? (iconeCoracaoPreto) : (iconeCoracaoBranco);


 // Exerc.16
 const caixaDeComentario = comentando ? (
   <SecaoComentario enviarComentario={enviarComentario}/>
 ) : (
   comentarios.map(comentario => {
     return (
       <CommentContainer>
         <p>{comentario}</p>
       </CommentContainer>
     )
   })
 );
 
 return (
   <PostContainer>
     <PostHeader>
       <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
       <p>{props.nomeUsuario}</p>
     </PostHeader>

     <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

     <PostFooter>
       
       <IconeComContador
         icone={iconeCurtida}         
         onClickIcone={onClickCurtida}
         valorContador={numeroCurtidas}       // Exerc.18
        />      

       <IconeComContador
         icone={iconeComentario}              // Exerc.11
         onClickIcone={onClickComentario}
         valorContador={numeroComentarios}    // Exerc.18
      />
     </PostFooter>  
      {caixaDeComentario}         
   </PostContainer>         //Exerc.16
 )
}

export default Post;