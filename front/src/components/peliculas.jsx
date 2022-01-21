import React, {useState} from "react";
import '../css/peliculas.css';
import logo from '../img/logo_blanco.jpg';
import {Apiurl} from '../services/apirest';
import axios from 'axios';

class Peliculas extends React.Component{

        constructor(props){
            super(props);
            this.state = {datos: null};
        }

        manejadorSubmit(e){
            e.preventDefault();
        }

        async componentDidMount() {
            setTimeout(this.cargarDatos(),1000)
        }

        cargarDatos() {
            axios.get(Apiurl + "api/peliculas/")
                .then(response => {
                    this.setState({datos: response.data});
                    this.setState({user: localStorage.getItem('user')});
                    console.log(this.state.datos)
                    console.log(this.state.user)
                    
                })
            }
        
        
        buscar= (kword) => {
            
            axios.get(`http://127.0.0.1:8000/api/pelicula/search/${kword}/`,)
                .then(response => {
                    this.setState({datos: response.data});
                    console.log(this.state.datos)
                })
            }

        manejadorBoton=()=>{
            localStorage.removeItem('user');
            this.props.history.push("/");
            }

        manejadorBotonBuscar=()=>{
                this.props.history.push("/buscar");
        }
    
    render(){
        const {datos} = this.state;
        return(
            <div className="padre">
                <div id="header" className="d-flex align-items-center">
                    <div className="container d-flex justify-content-between">

                    <div class="logo">
                        <h1 class="text-light"> Bienvenidx {this.state.user}</h1>
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                        
                            <li>
                            <form className="d-flex" onChange={this.manejadorChange}>
                            <input className="form-control me-2" onChange={e => this.buscar(e.target.value)} type="search" placeholder="Escribe" aria-label="Search" />
                                </form>
                            </li>
                        <li><a className="nav-link scrollto" href="#" onClick={this.manejadorBotonPelis} ><b>Favoritos</b></a></li>

                        <li><a className="nav-link scrollto" href="#" onClick={this.manejadorBoton}><b>Salir</b></a></li>
                        </ul>
                    </nav>

                    </div>
                </div>

        <div id="hero">
            <div class="hero-container" data-aos="fade-up">
    
                    
                    <div className="div">
                    { datos ?
                        datos.map((response) => {
                            return(
                        <div className="div">
                            <div className="card bg-Light" >
                            <h5 className="card-header "><b> {response.nombre} </b> </h5>
                                <img src={response.imagen} className="img" />
                                <div className="card-body">
                                    <h5 className="card-title">{response.descripcion}</h5>
                                    <p className="card-text"> {response.duracion}</p>
                                </div>
                                <div class="card-footer text-muted ">
                                    Mas infomacion
                                </div>
                            </div>
                        </div>
                        //Poner todo el html
                        );
                        }) :<></>
                    }
                    </div>
            </div>
        </div>
        </div>
        );
    }
}
export default Peliculas