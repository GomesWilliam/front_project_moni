import React, {useEffect} from 'react';
import ufabc2 from '../../images/ufabc_2.jpg';
import ufabc3 from '../../images/ufabc_3.jpg';
import ufabc4 from '../../images/ufabc_4.jpg';
import ufabc5 from '../../images/ufabc_5.jpg';
import ufabc6 from '../../images/ufabc_6.jpg';
import ufabc7 from '../../images/ufabc_7.jpg';
import ufabc8 from '../../images/ufabc_8.jpg';
import ufabc9 from '../../images/ufabc_9.jpg';
import ufabc10 from '../../images/ufabc_10.jpg';

import M from "materialize-css";

export const Institucional  = () => {
    useEffect(()=> {
            var elems = document.querySelectorAll('.parallax');
            // eslint-disable-next-line
            var instance = M.Parallax.init(elems, []);
            var elems = document.querySelectorAll('.slider');
            // eslint-disable-next-lin
            var instances = M.Slider.init(elems, []);
            var elems = document.querySelectorAll('.collapsible');
            // eslint-disable-next-lin
            var instances = M.Collapsible.init(elems, {});
    },[])

    return (
        <div>
        <div class="parallax-container">
            <div class="parallax"><img src={ufabc8}/></div>
            </div>
            <div class="section white">
            <div class="row container">
                <h2 class="header">Monitoria Inclusiva</h2>
                <p class="grey-text text-darken-3 lighten-3">Programa de Monitoria Inclusiva vinculada à Universidade Federal do ABC - UFABC</p>
            </div>
            </div>
            <div class="parallax-container">
            <div class="parallax"><img src={ufabc3}/></div>
        </div><br/>
        


        <div className = "row">
            <div className= "col l6 m6 s12 right-align ">
                <div className= "col s12 offset-l4">
                <div class="row container ">
                    <h2 class="header">Quem Somos</h2>
                    <p class="grey-text text-darken-3 lighten-3">Programa de Monitoria Inclusiva vinculada à Universidade Federal do ABC - UFABC</p>
                </div>
                </div>
            </div>
            <div className= "col l6 m6 s12 slider-1">
                <div class="slider ">
                    <ul class="slides #1b5e20 green darken-4">
                        <li>
                            <img src={ufabc10}/>
                            <div class="caption center-align">
                            <h3>Nossa Missão</h3>
                            <h5 class="light grey-text text-lighten-3">Nossa missao é colocar um texto aqui para poder dizer as pessoas nossa missao </h5>
                            </div>
                        </li>
                        <li>
                            <img src={ufabc4}/> 
                            <div class="caption left-align">
                            <h3>Nosso time</h3>
                            <h5 class="light balck-text text-lighten-3">Pessoas que fazem parte</h5>
                            </div>
                        </li>
                        <li>
                            <img src={ufabc5}/>
                            <div class="caption right-align">
                            <h3>UFABC</h3>
                            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div>
                        </li>
                     </ul>
                </div>
                </div>
                <div className= "col l6 m6 s12 slider-1">
                <div class="slider ">
                    <ul class="slides #1b5e20 green darken-4">
                        <li>
                            <img src={ufabc8}/>
                            <div class="caption center-align">
                            <h3>Quem atendemos</h3>
                            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div>
                        </li>
                        <li>
                            <img src={ufabc7}/> 
                            <div class="caption left-align">
                            <h3>Time Acompanhamento</h3>
                            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div>
                        </li>
                        <li>
                            <img src={ufabc6} />
                            <div class="caption right-align">
                            <h3>Time Biblioteca</h3>
                            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div>
                        </li>
                     </ul>
                </div>
                </div>
                <div className= "col l6 m6 s12 left-align ">
                <div className= "col s12">
                <div class="row container ">
                    <h2 class="header">O que fazemos</h2>
                    <p class="grey-text text-darken-3 lighten-3">Programa de Monitoria Inclusiva vinculada à Universidade Federal do ABC - UFABC</p>
                </div>
                </div>
            </div>
            <div className= "col l12 m12 s12">
                <br/><br/><br/><br/><br/><br/>
            </div>
            <div className= "col l12 m12 s12 #1b5e20 green darken-4 ">
                    <h2 class="header light grey-text text-lighten-3 center-align">Perguntas e Respostas</h2>
                    <p class="light grey-text text-lighten-3 center-align">Tentaremos responedr dúvidas mais frequentes aqui</p>
            </div>
            <div className ="col l12 m12 s12">

                <ul class="collapsible popout ">
                    <li>
                    <div class="collapsible-header "><i class="material-icons">question_answer</i>Onde Judas perdeu as botas</div>
                    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                    <div class="collapsible-header"><i class="material-icons">question_answer</i>Como adapta</div>
                    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                    <div class="collapsible-header"><i class="material-icons">question_answer</i>São funcionarios</div>
                    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    );
  }