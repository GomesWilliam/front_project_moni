import React, {useState, useEffect} from 'react';
import axios from 'axios';
import M from 'materialize-css'
export const InscricaoPCDSistema  = () => {
    useEffect(() => {
        var elems = document.querySelectorAll('select');
        // eslint-disable-next-line
        var instances = M.FormSelect.init(elems, {});
    }, [])  


    const [pcdCadastro, setPcdCadastro] = useState({
        email: '',
        ra: '',
        nome: '',
        sobrenome: '',
        ano_ingresso: '',
        turno: '',
        campus: '',
        curso_base: '',
        curso_pos_bi: '',
        deficiencia: '',
        situacao: '',
        descricao_acompanhamento: ''
    });

    const [loading, setLoading] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post(`https://us-central1-monitoring-project-4fd4d.cloudfunctions.net/api/cadastrarpcd`, pcdCadastro)
            .then(res => {
                setPcdCadastro({
                    email: '',
                    ra: '',
                    nome: '',
                    sobrenome: '',
                    ano_ingresso: '',
                    turno: '',
                    campus: '',
                    curso_base: '',
                    curso_pos_bi: '',
                    deficiencia: '',
                    situacao: '',
                    descricao_acompanhamento: ''
                });
                setLoading(false);
                window.alert("PCD Cadastrado com sucesso");
            })
            .catch(err => {
                setLoading(false);
                if(err.response.data.ra === 'esse RA já está em uso'){
                    window.alert("Esse RA já encontra-se cadastrado.");
                } else {
                    window.alert("Não foi possível realizar o cadastro");
                }
            });

    }
  
    return (
        <div>
            <div className="row">
                <div className="card-panel #e8f5e9 green lighten-5 z-depth-1 center col s12"><h2>INSCRIÇÃO DE PCD</h2></div>
                    <div className="col s6"></div>
                <div className="col s6"></div>
            </div>
            <div className="row card-panel #e8f5e9 green lighten-5 z-depth-1">
                <form className = "" action="">



                <div className = "col s6 input-field">
                        <i className = "material-icons prefix">email</i>  
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email"  value = {pcdCadastro.email} onChange = {(e) => setPcdCadastro({...pcdCadastro, email: e.target.value})} />
                </div>




                    <div className = "col s6 input-field">
                        <i className = "material-icons prefix">dialpad</i>  
                        <label htmlFor="ra">RA:</label>
                        <input type="text" id="ra" value = {pcdCadastro.ra} onChange = {(e) => setPcdCadastro({...pcdCadastro, ra: e.target.value})} required="required"/>
                    </div>
                    
                  


                    <div className="col l6 s6 input-field">
                        <i className = "material-icons prefix">account_circle</i>  
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome"  value = {pcdCadastro.nome} onChange = {(e) => setPcdCadastro({...pcdCadastro, nome: e.target.value})}  />
                    </div>



                    <div className="col l6 s6 input-field">
                        <i className = "material-icons prefix">account_circle</i>  
                        <label htmlFor="sobrenome">Sobrenome:</label>
                        <input type="text" id="sobrenome" value = {pcdCadastro.sobrenome} onChange = {(e) => setPcdCadastro({...pcdCadastro, sobrenome: e.target.value})}  />
                    </div>




                    <div className="col l4 s12 input-field">
                        <i className = "material-icons prefix">account_circle</i>  
                        <label htmlFor="anoingresso">Ano de Ingresso:</label>
                        <input type="text" id="anoingresso"  value = {pcdCadastro.ano_ingresso} onChange = {(e) => setPcdCadastro({...pcdCadastro, ano_ingresso: e.target.value})}/>
                    </div>



                    <div className="input-field col l4 s12">
                    <i className = "material-icons prefix">school</i>  
                        <select onChange = {(e) => setPcdCadastro({...pcdCadastro, campus: e.target.value})}>
                            <option value="" disabled selected>Escolha o campus</option>
                            <option value="sa">Santo André</option>
                            <option value="sbc">São Bernardo</option>
                        </select>
                        <label>Campus</label>
                    </div>

                    <div className="input-field col l4 s12">
                    <i className = "material-icons prefix">school</i>  
                        <select onChange = {(e) => setPcdCadastro({...pcdCadastro, turno: e.target.value})}>
                            <option value="" disabled selected>Escolha o turno</option>
                            <option value="Matutino">Matutino</option>
                            <option value="Noturno">Noturno</option>
                        </select>
                        <label>Turno</label>
                    </div>

                    <div className="input-field col l6 s12">
                    <i className = "material-icons prefix">school</i>  
                        <select onChange = {(e) => setPcdCadastro({...pcdCadastro, curso_base: e.target.value})}>
                            <option value="" disabled selected>Escolha o curso base</option>
                            <option value="BCT">Bacharelado em Ciência e Tecnologia</option>
                            <option value="BCH">Bacharelado em Ciências e Humanidades</option>
                            <option value="LCH">Licenciatura em Ciências Humanas </option>
                            <option value="LCNE">Licenciatura em Ciências Naturais e Exatas </option>
                        </select>
                        <label>Curso Base</label>
                    </div>

                    <div className="input-field col l6 s12">
                        <select onChange = {(e) => setPcdCadastro({...pcdCadastro, curso_pos_bi: e.target.value})}>
                            <option value="" disabled selected>Escolha o curso específico</option>
                            <optgroup label="BCT">
                                <option value="Biotecnologia">Biotecnologia</option>
                                <option value="Ciência da Computação">Ciência da Computação</option>
                                <option value="Ciências Biológicas">Ciências Biológicas</option>
                                <option value="Física">Física</option>
                                <option value="Matemática">Matemática</option>
                                <option value="Química">Química</option>
                                <option value="Neurociência">Neurociência</option>
                                <option value="Engenharia Ambiental e Urbana">Engenharia Ambiental e Urbana</option>
                                <option value="Engenharia de Energia">Engenharia de Energia</option>
                                <option value="Engenharia de Informação">Engenharia de Informação</option>
                                <option value="Engenharia de Instrumentação, Automação e Robótica">Engenharia de Instrumentação, Automação e Robótica</option>
                                <option value="Engenharia de Materiais">Engenharia de Materiais</option>
                                <option value="Engenharia Aeroespacial">Engenharia Aeroespacial</option>
                                <option value="Engenharia Biomédica">Engenharia Biomédica</option>
                                <option value="Engenharia de Gestão">Engenharia de Gestão</option>
                            </optgroup>
                            <optgroup label="BCH">
                                <option value="Ciências Econômicas">Ciências Econômicas</option>
                                <option value="Filosofia">Filosofia</option>
                                <option value="Planejamento Territorial">Planejamento Territorial</option>
                                <option value="Políticas Públicas">Políticas Públicas</option>
                                <option value="Relações Internacionais">Relações Internacionais</option>
                            </optgroup>
                            <optgroup label="LCH">
                                <option value="Licenciatura em Filosofia">Filosofia</option>
                            </optgroup>
                            <optgroup label="LCNE">
                                <option value="Licenciatura em Ciências Biológicas">Ciências Biológicas</option>
                                <option value="Licenciatura em Física">Física</option>
                                <option value="Licenciatura em Matemática">Matemática</option>
                                <option value="Licenciatura em Química">Química</option>
                            </optgroup>
                        </select>
                        <label>Curso Específico</label>
                    </div>

                    <div className="col l6 s6 input-field">
                        <i className = "material-icons prefix">account_circle</i>  
                        <label htmlFor="deficiencia">Deficiência(s):</label>
                        <input type="text" id="deficiencia" value = {pcdCadastro.deficiencia}  onChange = {(e) => setPcdCadastro({...pcdCadastro, deficiencia: e.target.value})}/>
                    </div>

                    <div className="input-field col l6 s6">
                    <i className = "material-icons prefix">school</i>  
                        <select onChange = {(e) => setPcdCadastro({...pcdCadastro, situacao: e.target.value})}>
                            <option value="" disabled selected>Situação</option>
                            <option value="Ativo">Ativo</option>
                            <option value="Inativo">Inativo</option>
                        </select>
                        <label>Situação</label>
                    </div>


                    <div className="col l12 s12 input-field">
                        <i className = "material-icons prefix">account_circle</i>  
                        <label htmlFor="descricao">Descrição de acompanhamento:</label>
                        <textarea id="descricao" className = "materialize-textarea" cols="30" rows="10" value = {pcdCadastro.descricao_acompanhamento} onChange = {(e) => setPcdCadastro({...pcdCadastro, descricao_acompanhamento: e.target.value})}></textarea>
                    </div>
                    <div className="col l12 s12 input-field">
                        <input className="btn" value = "Submeter" type="button" name="action" onClick = {handleSubmit} />
                    </div>

                    {loading ? (<div className="progress">
                                             <div className="indeterminate"></div>
                                        </div>) : ('')}
                </form>    
            </div>
        </div>

        
    );
  }