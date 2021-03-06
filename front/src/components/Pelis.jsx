import React from "react";
import '../css/pelis.css';
import logo from '../img/disney_logo.png';
import {Apiurl} from '../services/apirest';
import axios from 'axios';

class Pelis extends React.Component{
    constructor(props){
        super(props);
    }

    state={
        form:{
            "username": "",
            "nombre": "",
            "email": "",
            "edad": "",
            "password": ""
        },
        error:false,
        errorMsg:"",
        Msg: "",
        success:false

    }

    manejadorSubmit(e){
        e.preventDefault();
    }

    manejadorChange = async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form)
    }

    manejadorBoton=()=>{
        let url = Apiurl + "api/user/create-user/"
        axios.post(url,this.state.form)
        .then(response =>{
            if(response.data.status == 200){
                console.log("correcto")   
                this.setState({
                    success : true,
                    Msg: "Usuario Creado"
                })             
            }
        })
    }
    manejadorDireccionar=()=>{
        this.props.history.push("/");
        }


    render(){

        return(
            <React.Fragment>

                <div id="hero">
                    <div className="hero-container" data-aos="fade-up">
                <div className="wrapper fadeInDown">
                    <div id="formContent">

                        <div className="fadeIn first">
                            <br /><br />
                        <img src={logo} width="120px" alt="User Icon" />
                        </div>
                        <br />
                        

                        {this.state.success === true &&
                        <div className="alert alert-success" role="alert">
                            {this.state.Msg}
                        </div>
                        }
                        
                        <form onSubmit={this.manejadorSubmit}>
                        <input type="text" id="username" className="fadeIn second" name="username" placeholder="Username" onChange={this.manejadorChange} />
                        <br />
                        <input type="text" id="nombre" className="fadeIn second" name="nombre" placeholder="Nombre" onChange={this.manejadorChange} />
                        <br />
                        <input type="text" id="email" className="fadeIn second" name="email" placeholder="Email" onChange={this.manejadorChange} />
                        <br />
                        <input type="text" id="edad" className="fadeIn second" name="edad" placeholder="Edad" onChange={this.manejadorChange} />
                        <br />
                        <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" onChange={this.manejadorChange} />
                        <br />
                        <input type="submit" className="fadeIn fourth" value="Guardar" onClick={this.manejadorBoton} />

                        <div id="formFooter">
                        <a className="underlineHover" href="#" onClick={this.manejadorDireccionar}>Ir a Menu principal</a>
                        </div>
                        </form>

                        


                    </div> 
                </div>
                </div>
  </div>
            </React.Fragment>
        );
    }
}

export default Pelis