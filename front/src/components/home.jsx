import React, {useState} from "react";
import '../css/home.css';
import cinepolis from '../img/cinepolis.png';
import {Apiurl} from '../services/apirest';
import axios from 'axios';

class Home extends React.Component{

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
                    console.log(this.state.datos)
                })
            }

        manejadorBoton=()=>{
            localStorage.removeItem('user');
            this.props.history.push("/");
            }
    
    render(){
        const {datos} = this.state;
        return(
            <div className="padre">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <img src={cinepolis} width="30px" alt="User Icon" />
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={this.manejadorBoton}>Cerrar Sesion</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control pr-5 me-5" type="search" placeholder="Buscar pelicula" aria-label="Search" />
                        </form>
                        <form className="d-flex">
                            <input className="form-control pr-5 me-5" type="search" placeholder="Filtrar por rango" aria-label="Search" />
                        </form>
                        </div>
                    </div>
                    </nav>
                    
                    <div className="div">
                    { datos ?
                        datos.map((response) => {
                            return(
                        <div>
                            <div className="card" >
                            <h5 class="card-header">{response.nombre}</h5>
                                <img src={response.imagen} className="img" />
                                <div className="card-body">
                                    <h5 className="card-title">{response.descripcion}</h5>
                                    <p className="card-text"> {response.duracion}</p>
                                    <a href="#" className="btn btn-primary">Ver Pelicula</a>
                                </div>
                            </div>
                        </div>


                        //Poner todo el html
                        );
                        }) :<></>
                    }
                    </div>
            </div>
        );
    }
}
export default Home