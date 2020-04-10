import React, {useState, useEffect} from 'react';
import axios from 'axios';
import M from "materialize-css";


export const InformacaoPCD  = () => {
    //Colapsible function
    useEffect(() => {
        var elems = document.querySelectorAll('.collapsible');
        // eslint-disable-next-line
        var instances = M.Collapsible.init(elems, {});
    }, [])  
  
        //PCD Info Request
    const [pcdList, setPcdList] = useState([])
    useEffect(() => {
        axios.get('https://us-central1-monitoring-project-4fd4d.cloudfunctions.net/api/allpcdinfo')
            .then(res => {
                console.log(res);
                setPcdList(res.data)
            })
    }, []);
    

    return (
        <div>
            <div className="row">
                <div className="card-panel #e8f5e9 green lighten-5 z-depth-1 center col s12"><h2>LISTA DAS PCD'S</h2></div>
                    <div className="col s6"></div>
                <div className="col s6"></div>
            </div>
            <div className= 'collectionInfoPCD'>
            <ul className="collapsible">
                {pcdList.map(info => {
                    return (
                    <li key={info.pcdId}>
                        <div className="collapsible-header"><i className="material-icons ">arrow_drop_down</i>NOME: {info.nome} {info.all.sobrenome} <br/> RA: {info.pcdId}</div>
                        <div className="collapsible-body">
                            <span>
                                <ul className="collection">
                                    <li className="collection-item">Email: {info.all.email}</li>
                                    <li className="collection-item">Ano de ingresso: {info.all.ano_ingresso}</li>
                                    <li className="collection-item">Campus: {info.all.campus}</li>
                                    <li className="collection-item">Turno: {info.all.turno}</li>
                                    <li className="collection-item">Curso base: {info.all.curso_base}</li>
                                    <li className="collection-item">Curso pós-bi: {info.all.curso_pos_bi}</li>
                                    <li className="collection-item">Deficiência(s): {info.all.deficiencia}</li>
                                    <li className="collection-item">Descrição Acompanhamento: {info.all.descricao_acompanhamento}</li>                                    
                                    <li className="collection-item">Situação: {info.all.situacao}</li>

                                </ul>
                            </span>
                        </div>
                    </li>)
                })}   
                </ul>
            </div>
        </div>
    );
  }