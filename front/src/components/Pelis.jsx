import React from "react";
import '../css/pelis.css';
import cinepolis from '../img/cinepolis.png';
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
        errorMsg:""
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
                this.props.history.push("/");
            }
        })
    }
    


    render(){

        return(
            <React.Fragment>

                <div className="wrapper fadeInDown">
                    <div id="formContent">

                        <div className="fadeIn first">
                            <br /><br />
                        <img src={cinepolis} width="120px" alt="User Icon" />
                        </div>
                        <br />
                        

                        {this.state.error === true &&
                        <div className="alert alert-danger" role="alert">
                            {this.state.errorMsg}
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
                        </form>


                    </div> 
                </div>
            </React.Fragment>
        );
    }
}

export default Pelis