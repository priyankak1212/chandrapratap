import React, { Component } from 'react';
// import '../CSS/register.css';
import './css/register.css'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Email from '@material-ui/icons/Email'
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from 'axios';
import BaseURL from '../BaseURL'
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const customStyles = {
    btndiv:{ 
        display: 'flex', 
        // justifyContent:'center' 
    }
};
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            toggle: false,
            loading: false,
            hidden: true
        }
    }
    
    handleEmailChange = (event) => {
        console.log(event.target.value)
        this.setState({
            email: event.target.value
        })
    }
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        const data={
            email:this.state.email,
            password:this.state.password
        }
        console.log('===>',data)
        axios.post(`${BaseURL}/login`, data)
            .then(response => {
                if (response.data.success === true) {
                    console.log(response.data)
                }
                else {
                    console.log('error,l')
                }
            })
            .catch(error => {
                console.log(error, 'error')
            })
    }
    handleUpdatePassword() {
        return (
            <div>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.updatePassword}
                    onError={errors => console.log('error', errors)}
                >
                    <div className="form-group">
                        <TextValidator
                            label="Email"
                            type="email"
                            name="email"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleEmailChange}
                            id="email"
                            autoComplete="email"
                            value={this.state.email}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      edge="end"
                                    >
                                        <Email/>
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            // placeholder="Your Email"
                            validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']}

                        />
                    </div>
                    <div className="form-group form-button">
                        <input type="submit" className="form-submit" value="Log in" />
                    </div>
                </ValidatorForm>

            </div>
        )
    }

    handleMouseDownPassword=()=>{
        this.setState({hidden:false})
    }
    handleClickShowPassword=()=> {
        this.setState({ hidden: !this.state.hidden })
      }
    render() {
        // const { toggle } = this.state
        return (
            <div className="main">
                <section className="sign-in">
                    <div className="container">
                        <div className="signin-content">
                        <div className="signin-image">
                                <img src={require('../../images/signin-image.jpg')} alt="sign up" />
                                <a href="/register">Create an account</a>
                            </div>
                            <div className="signin-form">
                                <h2 className="form-title">Sign up</h2>

                                <ValidatorForm
                                    ref="form"
                                    onSubmit={this.handleSubmit}
                                    onError={errors => console.log('error', errors)}
                                >
                                    <div className="form-group">
                                        <TextValidator
                                           type="email"
                                            name="email"
                                            label="Email"
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleEmailChange}
                                            id="email"
                                            value={this.state.email}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            InputProps={{
                                                endAdornment: (
                                                  <InputAdornment position="end">
                                                    <IconButton
                                                      edge="end"
                                                    >
                                                        <Email/>
                                                    </IconButton>
                                                  </InputAdornment>
                                                ),
                                              }}
                                            // placeholder="Your Email"
                                            validators={['required', 'isEmail']}
                                            errorMessages={['this field is required', 'email is not valid']}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextValidator
                                            type={this.state.hidden ? "password" : "text"}
                                            name="your_pass"
                                            label="Password"
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handlePasswordChange}
                                            id="your_pass"
                                            value={this.state.password}
                                            autoComplete="false"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            // placeholder="Password"
                                            validators={['required']}
                                            errorMessages={['this field is required']}
                                            InputProps={{
                                                endAdornment: (
                                                  <InputAdornment position="end">
                                                    <IconButton
                                                      edge="end"
                                                      aria-label="toggle password visibility"
                                                      onClick={this.handleClickShowPassword}
                                                      onMouseDown={this.handleMouseDownPassword}
                                                    >
                                                      {this.state.hidden ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                  </InputAdornment>
                                                ),
                                              }}
                                        />

                                    </div>
                                    <div className="form-group form-button" style={customStyles.btndiv}>
                                        {/* <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" /> */}
                                        <Button 
                                            variant="contained" 
                                            type="submit" 
                                            name="signin" 
                                            id="signin" 
                                            className="form-submit" 
                                        >
                                            Log in
                                        </Button>
                                    </div>
                                </ValidatorForm>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Login
