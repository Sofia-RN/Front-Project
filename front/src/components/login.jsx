import React from "react";
import '../css/login.css';
import cinepolis from '../img/cinepolis.png';
import {Apiurl} from '../services/apirest';
import axios from 'axios';

class Login extends React.Component{

    state={
        form:{
            "email": "",
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
        // console.log(this.state.form)
    }

    manejadorBoton=()=>{
        let url = Apiurl + "api/user/login/"
        axios.post(url,this.state.form)
        .then(response =>{
            console.log(response);
        })
    }

    render(){
        return(
            <React.Fragment>

                <div className="wrapper fadeInDown">
                    <div id="formContent">

                        <div className="fadeIn first">
                            <br /><br />
                        <img src={cinepolis} width="100px" alt="User Icon" />
                        </div>
                        
                        <form onSubmit={this.manejadorSubmit}>
                        <input type="text" id="email" className="fadeIn second" name="email" placeholder="email" onChange={this.manejadorChange} />
                        <br />
                        <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" onChange={this.manejadorChange} />
                        <br />
                        <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.manejadorBoton} />
                        </form>

                        <div id="formFooter">
                        <a className="underlineHover" href="#" >Registrar usuario</a>
                        </div>

                    </div> 
                </div>
            </React.Fragment>
        );
    }
}

export default Login