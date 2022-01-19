import React from "react";
import '../css/home.css';
import cinepolis from '../img/cinepolis.png';
import {Apiurl} from '../services/apirest';
import axios from 'axios';

class Home extends React.Component{

        constructor(props){
            super(props);
        }

        manejadorSubmit(e){
            e.preventDefault();
        }

        componentDidMount() {
            axios.get(Apiurl + "api/peliculas/")
            .then(response => {
                console.log(response)
            })
        }
    

    render(){
        return(
            <div className="padre">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <img src={cinepolis} width="30px" alt="User Icon" />
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Favoritos</a>
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
                    
                    <div>

                    </div>
            </div>
        );
    }
}
export default Home