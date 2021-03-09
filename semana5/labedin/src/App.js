import React from 'react' ;
import './App.css' ;
import CardGrande from './components/CardGrande/CardGrande' ;
import CardPequeno from './components/CardPequeno/CardPequeno' ;
import ImagemButton from './components/ImagemButton/ImagemButton' ;
import FotoPerfil from './imagens/dknl.jpg' ;
import FotoExp from './imagens/FotoExp.jpg' ;
import LogoEmail from './imagens/gmail.png' ;
import LogoEndereco from './imagens/endereco.png' ;
import MulherTi from './imagens/mulherinfo.jpg' ;
import LogoGithub from './imagens/github.png' ;
import LogoLinkedin from './imagens/linkedin.png' ;

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPerfil}
          nome="Dayane Lang" 
          descricao="Oi, eu sou a Dayane Lang. Atualmente sou aluna da Labenu., 
                    Sou detalhista e gosto dos meus códigos bem alinhados e coloridos." 
        />
        
        <ImagemButton 
          imagem= "https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais " 
        />

       </div>

      <div className="page-section-container ">
        <h2>Dados pessoais</h2>
        <CardPequeno
          imagem={LogoEmail} 
          nome="Email:" 
          descricao="estudantefulllabenu@gmail.com"
        /> 

        <CardPequeno 
          imagem={LogoEndereco} 
          nome="Endereço:" 
          descricao="Rua Botafogo- Joinville/SC"
        />
        
      </div>

      <div className="page-section-container ">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem = {FotoExp}
          nome="Consultoria Jurídica e analista " 
          descricao="Estou à procura de novos desafios profissionais na área de Tecnologia e acredito que sua empresa possa ter interesse por minhas qualificações.,
                    Sou graduada em Direito, com pós graduação / especialização em Gestão Pública e em LGPD. Atuei nas áreas Administrativa e,
                    Jurídica há 12 anos, com destaque em assessoria a diretoria, para o desenvolvimento e coordenação das ,
                    rotinas administrativas e jurídicas." 
        />
        
        <CardGrande 
          imagem= {MulherTi} 
          nome="Formação" 
          descricao="Curso em andamento: Desenvolvimento Full Stack - LABENU ; ,
                      Curso Compliance LGPD ; Pós-Graduação em Gestão Pública -IFSC ; ,
                       Bacharel em Direito -FGG ; Técnico em Informática - CTI UNESP." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem= {LogoGithub} 
          texto="Github" 
        />        

        <ImagemButton 
          imagem={LogoLinkedin} 
          texto="Linkedin" 
        />        
      </div>
    </div>
  );
}

export default App;
