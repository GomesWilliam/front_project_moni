import React, {useState, useEffect, useCallback, useContext} from 'react';
import axios from 'axios';

const Login = ({ history, props}) => {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setLoading(true)
        axios.post(`https://us-central1-monitoring-project-4fd4d.cloudfunctions.net/api/login`, loginInfo)
            .then(res => {
                console.log(res);
                const FBIdToken = `Bearer ${res.data.token}`;
                localStorage.setItem('FBIdToken', FBIdToken);
                axios.defaults.headers.common['Authorization'] = FBIdToken;
                //props.history.push('/inscricao_pcd_sistema');
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    }

    return ( 
        <div className="row"> 
            <div className="col s12 m5 offset-m3">
                <div className="card">
                    <div className="card-action #1b5e20 green darken-4 login">
                        <h3 className="white-text center">Login</h3>
                    </div>
                    <div className="card-content">
                        <div className="form-field">
                            <label htmlFor = "username">Usuário</label>
                            <input type="text" id="username" onChange = {(e) => setLoginInfo({...loginInfo, email: e.target.value})} />
                        </div><br/>
                        <div className="form-field">
                            <label htmlFor = "password">Senha</label>
                            <input type="password" id="password"  onChange = {(e) => setLoginInfo({...loginInfo, password: e.target.value})} />
                        </div><br/>

                        <div className="form-field">
                            <button onClick = {handleSubmit} className="btn-large waves-effect waves-dark #1b5e20 green darken-4 botaoLogin">Logar</button>
                        </div>
                        {loading ? (<div className="progress">
                                             <div className="indeterminate"></div>
                                        </div>) : ('')}
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Login;   