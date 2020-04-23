import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {registerUser} from '../../actions/user_actions'

class Register extends Component {

    state = {
        firstName:"",
        lastName:"",
        email: "",
        password: "",
        passwordConfirmation:"",
        errors:[]
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    submitForm = event => {
        event.preventDefault();

        let dataToSubmit = {
            name: this.state.firstName,
            lastname: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        };

        if (this.isFormValid()){
            this.setState({errors:[]})
            this.props.dispatch(registerUser(dataToSubmit))
            .then(response=>{
                if (response.payload.success){
                    this.props.history.push('/login')
                }
                else{
                    this.setState({
                        errors: this.state.errors.concat(
                            "Failed to send data to DB "
                        )
                    })
                }
            })
            .catch(err=>{
                this.setState({
                    errors: this.state.errors.concat(err)
                })
            })
        } 
        else {
            console.log("form not valid");
            
        }
    }

    isFormValid = ()=>{
        let errors = [];

        if (this.isFormEmpty(this.state)){
            this.setState({errors: errors.concat("Fill in all fields")})

        }
        else if (!this.isPasswordValid(this.state)){
            this.setState({errors: errors.concat("Password invalid")})

        }
        else return true;
    }

    isPasswordValid = ({password, passwordConfirmation})=>{
        if (password.length <6 || passwordConfirmation.length<6) return false;
        else if (password !== passwordConfirmation) return false;
        else return true;
    }

    isFormEmpty = ({lastName, firstName, email, password, passwordConfirmation})=>{
        return (!firstName.length || !lastName.length || !email.length || !password.length || !passwordConfirmation.length);
    }

    displayErrors = errors =>
        errors.map((error, i)=> <p key={i}>{error}</p>)

    render() {
        return (
            <div className = "container">
                <h2> Register </h2>
                <div className = "row">
                    <form className= "col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                    name ="lastName"
                                    value = {this.state.lastName}
                                    onChange={e=> this.handleChange(e)}
                                    id="lastName"
                                    type="text"
                                    className="validate"
                                />
                                <label className="active" htmlFor="email">Last Name</label>
                                <span
                                    className="helper-text"
                                    data-error="Please enter a real lastName"
                                    data-success="right"
                                />
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                    name ="firstName"
                                    value = {this.state.firstName}
                                    onChange={e=> this.handleChange(e)}
                                    id="firstName"
                                    type="text"
                                    className="validate"
                                />
                                <label className="active" htmlFor="email">First Name</label>
                                <span
                                    className="helper-text"
                                    data-error="Please enter a real firstName"
                                    data-success="right"
                                />
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                    name ="email"
                                    value = {this.state.email}
                                    onChange={e=> this.handleChange(e)}
                                    id="email"
                                    type="email"
                                    className="validate"
                                />
                                <label className="active" htmlFor="email">Email</label>
                                <span
                                    className="helper-text"
                                    data-error="Please enter a real email"
                                    data-success="right"
                                />
                                
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                    name ="password"
                                    value = {this.state.password}
                                    onChange={e=> this.handleChange(e)}
                                    id="password"
                                    type="password"
                                    className="validate"
                                />
                                <label className="active" htmlFor="password">Password</label>
                                <span
                                    className="helper-text"
                                    data-error="Password must be ...."
                                    data-success="right"
                                />
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                    name ="passwordConfirmation"
                                    value = {this.state.passwordConfirmation}
                                    onChange={e=> this.handleChange(e)}
                                    id="passwordConfirmation"
                                    type="password"
                                    className="validate"
                                />
                                <label className="active" htmlFor="password">Password Confirmation</label>
                                <span
                                    className="helper-text"
                                    data-error="passwordConfirmation must be ...."
                                    data-success="right"
                                />
                                
                            </div>
                        </div>

                        {this.state.errors.length>0 && (
                            <div>
                                {this.displayErrors(this.state.errors)}
                            </div>
                        )}

                        <div className="row">
                            <div className="col s12">
                                <button 
                                    className="btn waves-effect red lighten-2"
                                    type="submit"
                                    name="action"
                                    onClick={this.submitForm}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default withRouter(connect()(Register));