import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import fundoimg from '../../images/fundo_sidenav_3.jpg';
import nouser from '../../images/no-user.png';
import M from "materialize-css";
import {isAdmin, isAuthenticated} from './auth'

export const Navbar = () => {

    useEffect(() => {
      var elems = document.querySelectorAll('.sidenav');
      // eslint-disable-next-line
      var instances = M.Sidenav.init(elems, {});
  }, []) 
  return (
    <div className="estrutura">

 
      <nav className="nav-wrapper #1b5e20 green darken-4">
        <div className="container" >
        <a href="foo" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">apps</i></a>        
        <ul className="right hide-on-med-and-down">
          <li><a href="foo">Home</a></li>
          <li><a href="foo">About</a></li>
          <li><NavLink to = '/login' >Login</NavLink></li>
          <li><a href="foo">Log out</a></li>
        </ul>
        </div>
      </nav>  

      {isAuthenticated() ? (<div className ="sidenav sidenav-fixed" id="slide-out">
        <ul>
          <li>
            <div className="user-view"> 
              <div className="background">
                <img alt = "fundo sidenav" width = "330" src={fundoimg}/>
              </div>
              <a href="#user"><img alt = "imagem usuario" className="circle" src={nouser}/></a>
              <a href="#name"><span className="white-text name">User</span></a>
              <a href="#email"><span className="white-text email">user@gmail.com</span></a>
            </div>
          </li>
          <li><div className="divider"></div></li>
          <li><a className="subheader">Geral</a></li>
          <li><NavLink to = '/'><i className="material-icons">home</i>Institucional</NavLink></li>
          <li><NavLink to = '/informacoes'><i className="material-icons">event_note</i>Informações</NavLink></li>
          <li><div className="divider"></div></li>
          <li><a className="subheader">Acompanhamentos</a></li>
          <li><NavLink to = '/acompanhamento'><i className="material-icons">accessibility</i>Acompanhamentos</NavLink></li>
          <li><NavLink to = '/inscricao'><i className="material-icons">add_box</i>Inscrição</NavLink></li>
          <li><div className="divider"></div></li>
          <li><a className="subheader">Biblioteca</a></li>
          <li><NavLink to = '/consulta'><i className="material-icons">collections_bookmark</i>Consulta</NavLink></li>
          <li><NavLink to = '/adaptacao'><i className="material-icons">add_box</i>Adaptações</NavLink></li>
          <li><NavLink to = '/solicitacao'><i className="material-icons">comment</i>Solicitação</NavLink></li>
          <li><div className="divider"></div></li>
          <li><a className="subheader">Relatórios</a></li>
          <li><NavLink to = '/submeter'><i className="material-icons">assignment</i>Submeter</NavLink></li>
          <li><NavLink to = '/visualizar'><i className="material-icons">pageview</i>Visualizar</NavLink></li>
          <li><div className="divider"></div></li>
          <li><a className="subheader">Informações</a></li>
          <li><a href="foo"><i className="material-icons">computer</i>Meus dados</a></li>
          <li><a href="foo"><i className="material-icons">build</i>Conta</a></li>
        </ul>
        {isAdmin() ? (   <ul>
          <li><div className="divider"></div></li>
          <li><a className="subheader center">Administração</a></li>
          <li><div className="divider"></div></li>
          <li><a className="subheader">Acompanhamentos</a></li>
          <li><NavLink to = '/acomp_adm'><i className="material-icons">accessibility</i>Acompanhamentos</NavLink></li>
          <li><NavLink to = '/inscricao_acomp_adm'><i className="material-icons">add_box</i>Inscrição</NavLink></li>
          <li><NavLink to = '/atualizar_disciplina_pcd'><i className="material-icons">add_box</i>Atualizar Disciplina</NavLink></li>
          <li><div className="divider"></div></li>
          <li><a className="subheader">Biblioteca</a></li>
          <li><NavLink to = '/envio_adaptacao'><i className="material-icons">collections_bookmark</i>Envio adaptação</NavLink></li>
          <li><NavLink to = '/consulta_biblio_adm'><i className="material-icons">add_box</i>Consulta</NavLink></li>
          <li><NavLink to = '/gerenciamento_biblio'><i className="material-icons">comment</i>Gerenciamento</NavLink></li>
          <li><div className="divider"></div></li>
          <li><a className="subheader">Área da PCD</a></li>
          <li><NavLink to = '/inscricao_pcd_sistema'><i className="material-icons">assignment</i>Inscrição de PCD's</NavLink></li>
          <li><NavLink to = '/informacao_pcd'><i className="material-icons">pageview</i>Informações</NavLink></li>
          <li><a className="subheader">Área do Monitor</a></li>
          <li><NavLink to = '/atualizar_disciplina_monitor'><i className="material-icons">assignment</i>Atualizar Disciplinas</NavLink></li>
          <li><NavLink to = '/informacao_monitor'><i className="material-icons">pageview</i>Informações</NavLink></li>
        </ul>) : ('')}
        
     
      </div> ) : ('')}
      

    </div>
    
  );
 
}