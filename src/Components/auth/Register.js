import React, { Component } from 'react'
import './css/register.css'
import BaseURL from '../BaseURL';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import axios from 'axios'
import Email from '@material-ui/icons/Email'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountBox from '@material-ui/icons/AccountBox'
// import Email from '@material-ui/icons/Email'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            confirm_password: '',
            name: '',
            loading: false,
            hidden: true,
            cnfhidden:true
        }
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleCnpasswordChange = (event) => {
        this.setState({
            confirm_password: event.target.value
        })
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    
    handleClickShowPassword=()=> {
        this.setState({ hidden: !this.state.hidden })
    }
    handleShowPassword=()=>{
        this.setState({cnfhidden: !this.state.cnfhidden})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`${BaseURL}/register`, this.state)
            .then(response => {
                if (response.data.success === true) {
                    console.log(response.data)
                    // toast.success(" Registered Successfully", { autoClose: 7000 })
                    // setTimeout(() => { this.props.history.push('/login') }, 4000)
                }
            })
            .catch(error => { console.log(error, 'error') })
    }
    render() {
        return (
            <div style={{ justifyContent: 'center' }} className="main">
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log('error', errors)}
                >
                    <section className="signup">
                        <div className="container">
                            <div className="signup-content">
                                <div className="signup-form">
                                    <h2 className="form-title">Sign up</h2>
                                    <div className="form-group">
                                        <TextValidator
                                            // className="texvalid"
                                            type="text"
                                            label="Name"
                                            name="name"
                                            onChange={this.handleNameChange}
                                            id="name"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.name}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            InputProps={{
                                                endAdornment: (
                                                  <InputAdornment position="end">
                                                    <IconButton
                                                      edge="end"
                                                    >
                                                        <AccountBox/>
                                                    </IconButton>
                                                  </InputAdornment>
                                                ),
                                              }}
                                            validators={['required']}
                                            errorMessages={['this field is required']}
                                            autoComplete='text'
                                        />

                                    </div>
                                    <div className="form-group">
                                        <TextValidator
                                            // className="texvalid"
                                            label="Email"
                                            type="email"
                                            name="email"
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
                                            autoComplete="email"
                                            validators={['required', 'isEmail']}
                                            errorMessages={['this field is required', 'email is not valid']}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextValidator
                                            // className="texvalid"
                                            // type="password"
                                            type={this.state.hidden ? "password" : "text"}
                                            label="Password"
                                            // label={<FontAwesomeIcon icon={faLock} className="image" />}
                                            name="your_pass"
                                            onChange={this.handlePasswordChange}
                                            id="your_pass"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.password}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            // placeholder="Password"
                                            validators={['required']}
                                            errorMessages={['this field is required']}
                                            autoComplete="false"
                                            InputProps={{
                                                endAdornment: (
                                                  <InputAdornment position="end">
                                                    <IconButton
                                                      edge="end"
                                                      aria-label="toggle password visibility"
                                                      onClick={this.handleClickShowPassword}
                                                    >
                                                      {this.state.hidden ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                  </InputAdornment>
                                                ),
                                              }}
                                        />

                                    </div>
                                    <div className="form-group">
                                        <TextValidator
                                            // className="texvalid"
                                            // type="password"
                                            type={this.state.cnfhidden ? "password" : "text"}
                                            label="Confirm Password"
                                            name="re_pass"
                                            onChange={this.handleCnpasswordChange}
                                            id="re_pass"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.confirm_password}
                                            autoComplete="false"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            // handleShowPassword
                                            InputProps={{
                                                endAdornment: (
                                                  <InputAdornment position="end">
                                                    <IconButton
                                                      edge="end"
                                                      aria-label="toggle password visibility"
                                                      onClick={this.handleShowPassword}
                                                    >
                                                      {this.state.cnfhidden ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                  </InputAdornment>
                                                ),
                                              }}
                                            // placeholder="Confirm Password"
                                            validators={['isPasswordMatch', 'required']}
                                            errorMessages={['password mismatch', 'this field is required']}
                                        />

                                    </div>
                                    <div className="form-group form-button">
                                        {/* <input type="submit" name="signup" id="signup" className="form-submit" value="Register" /> */}
                                        <Button 
                                            variant="contained" 
                                            type="submit" 
                                            name="signin" 
                                            id="signin" 
                                            className="form-submit" 
                                        >
                                            Register
                                        </Button>
                                    </div>
                                </div>
                                <div className="signup-image">
                                    <img src={require('../../images/signup-image.jpg')} alt="sign up" />
                                    <br/>
                                    <a href="#">I am already member</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </ValidatorForm>
            </div>
        )
    }
}

export default Register
