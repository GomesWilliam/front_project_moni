import React, {useEffect, useState} from 'react';
import axios from 'axios';
import M from 'materialize-css';


export const AcompADM  = () => {
    const [searchRA, setSearchRA] = useState('');
    const [pcdList, setPcdList] = useState([])

    const handleClick = e => {
        axios.get(`http://165.227.124.82/turmas/buscar/${searchRA}`)
            .then(res => {
                console.log(res.data)
                setPcdList(res.data);
            })
    }

    //Collapsible bar
    useEffect(() => {
        var elems = document.querySelectorAll('.collapsible');
        // eslint-disable-next-line
        var instances = M.Collapsible.init(elems, {});
    }, [])  


    return (
        <div>
        <div className="row">
            <div className="card-panel #e8f5e9 green lighten-5 z-depth-1 center col s12"><h2>LISTA DE ACOMPANHAMENTOS</h2></div>
                <div className="col s6"></div>
            <div className="col s6"></div>
        </div>
        <div className= " col l12 s12 center ">
            <label htmlFor="email">Digite o Ra:</label>
            <input type="text" id="ra"  value = {searchRA} onChange = {(e) => setSearchRA(e.target.value)} />
            <button className="btn" onClick={handleClick}>pesquisar</button>
        </div>
        <div className= 'collectionInfoPCD'>
        <ul className="collapsible">
            {pcdList.map(info => {
                return (
                <li key={info._id}>
                    <div className="collapsible-header"><i className="material-icons ">arrow_drop_down</i>Classe: {info.classe}</div>
                    <div className="collapsible-body">
                        <span>
                            <ul className="collection">
                                <li className="collection-item">Docente Teoria: {info.docenteTeoria}</li>
                                <li className="collection-item">Aula Teórica: {info.teoria}</li>
                                <li className="collection-item">Docente Pratica: {info.docentePratica}</li>
                                <li className="collection-item">Aula Prática: {info.pratica}</li>                 

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