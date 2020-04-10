import React from 'react';
import { Navbar } from './components/layout/Navbar'
import { Institucional } from './components/geral/Institucional';
import { Acomp} from './components/acompanhamentos/Acomp';
import { Inscricao } from './components/acompanhamentos/Inscricao';
import { Informacoes } from './components/geral/Informacoes';
import { Consulta } from './components/biblioteca/Consulta';
import { Adaptacao } from './components/biblioteca/Adaptacao';
import { Solicitacao } from './components/biblioteca/Solicitacao';
import { Submeter } from './components/relatorios/Submeter';
import { Visualizar } from './components/relatorios/Visualizar';
import  Login  from './components/layout/login';

//Import related to ADM routines
import { AcompADM } from './components/adm/acompanhamento/Acomp';
import { InscricaoAcomp } from './components/adm/acompanhamento/inscricaoAcomp';
import { AtualizarDisciplinaPCD } from './components/adm/acompanhamento/AtualizarDisciplinaPCD';
import { envioAdaptacao } from './components/adm/biblioteca/envioAdaptacao';
import { consultaBiblioAdm } from './components/adm/biblioteca/consultaBiblioAdm';
import { GerenciamentoBiblio } from './components/adm/biblioteca/GerenciamentoBiblio';
import { InscricaoPCDSistema } from './components/adm/areaPCD/InscricaoPCDSistema';
import { InformacaoPCD } from './components/adm/areaPCD/informacaoPCD';
import { atualizarDisciplinaMonitor } from './components/adm/areaMonitor/atualizarDisciplinasMonitor';
import { informacaoMonitor } from './components/adm/areaMonitor/informacaoMonitor';
import { isAuthenticated, isAdmin } from './components/layout/auth';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const PrivateAdminRoute = ({ component: Component, ...rest }) => (
  <Route
  {...rest}
  render={props =>
    isAuthenticated() && isAdmin() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: "/", state: { from: props.location } }} />
    )
  }
  />
);



const Routes = () => (

<Router> 
        <Navbar />
        <div className= {isAuthenticated() ? ("content-main"): (" ")}>
          
          <Switch> 

            <Route exact path = "/" component = {Institucional}/>
            <Route exact path = "/login" component = {Login}/>
            <PrivateRoute exact path = "/informacoes" component = {Informacoes}/>
            <PrivateRoute exact path = "/acompanhamento" component = {Acomp}/>
            <PrivateRoute exact path = "/inscricao" component = {Inscricao}/>
            <PrivateRoute exact path = "/consulta" component = {Consulta}/>
            <PrivateRoute exact path = "/adaptacao" component = {Adaptacao}/>
            <PrivateRoute exact path = "/solicitacao" component = {Solicitacao}/>
            <PrivateRoute exact path = "/submeter" component = {Submeter}/>
            <PrivateRoute exact path = "/visualizar" component = {Visualizar}/>

            <PrivateAdminRoute exact path = "/acomp_adm" component = {AcompADM}/>
            <PrivateAdminRoute exact path = "/inscricao_acomp_adm" component = {InscricaoAcomp}/>
            <PrivateAdminRoute exact path = "/atualizar_disciplina_pcd" component = {AtualizarDisciplinaPCD}/>

            <PrivateAdminRoute exact path = "/envio_adaptacao" component = {envioAdaptacao}/>
            <PrivateAdminRoute exact path = "/consulta_biblio_adm" component = {consultaBiblioAdm}/>
            <PrivateAdminRoute exact path = "/gerenciamento_biblio" component = {GerenciamentoBiblio}/>

            <PrivateAdminRoute exact path = "/inscricao_pcd_sistema" component = {InscricaoPCDSistema}/>
            <PrivateAdminRoute path = "/informacao_pcd" component = {InformacaoPCD} />



            <PrivateAdminRoute exact path = "/atualizar_disciplina_monitor" component = {atualizarDisciplinaMonitor}/>
            <PrivateAdminRoute exact path = "/informacao_monitor" component = {informacaoMonitor}/>
            
          </Switch>
          
        </div>
        </Router>  
);

export default Routes;