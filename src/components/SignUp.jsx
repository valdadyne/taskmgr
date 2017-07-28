import React, { Component} from 'react';
import { Link} from 'react-router-dom';
import { firebaseApp} from '../firebase';

import '../static/index.css';
import Logo from '../static/img/logo.png';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            error: {
                message:''
            }
        }
    }
    signUp(){
        const { email, password} = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email,password)
         .catch(error => {
             this.setState({error});
         })
    }

    render(){
        return(
            <div className="wrapper index">
                <aside>
                    <div className="brand">
                        <img src={Logo} alt="logo"/>
                        <h1>WholeLife</h1>
                    </div>
                </aside>
                <form>
                    <div className="form-group">
                    <label htmlFor="email" className="text-primary">Email</label>
                    <input type="email" id="email" className="form-control"
                        onChange={event => this.setState({email: event.target.value})}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="password" className="text-primary">Password</label>
                    <input type="password" id="password" className="form-control"
                        onChange={event => this.setState({password: event.target.value})}/>
                    </div>
                    <div className="form-group">
                    <button type="button" className="form-control input-lg btn btn-primary" 
                        onClick={() =>this.signUp()}>
                        SIGN UP
                    </button>
                    </div>
                    <div className="form-group">
                        <div className="side-buttons">
                            <button type="button" className="btn btn-default btn-md btn-left">
                                <Link className="Link" to={'/signin'}> ALREADY A USER?</Link>
                            </button>
                            <button type="button" className="btn btn-default btn-md btn-right">
                                FORGOT PASSWORD
                            </button>
                        </div>
                        <div>{this.state.error.message}</div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;