import React from "react";
import '../css/login.css';
import cinepolis from '../img/cinepolis.png';
import {Apiurl} from '../services/apirest';
import axios from 'axios';

class Login extends React.Component{

    constructor(props){
        super(props);
    }

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
        console.log(this.state.form)
    }

    manejadorBoton=()=>{
        let url = Apiurl + "api/user/login/"
        axios.post(url,this.state.form)
        .then(response =>{
            if(response.data.status == 200){
                console.log("correcto")
                localStorage.setItem("user", response.data.nombre);
                this.props.history.push("/home");

            }else{
                this.setState({
                    error : true,
                    errorMsg: "Datos incorrectos"
                })
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