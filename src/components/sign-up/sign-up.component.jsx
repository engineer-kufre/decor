import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import './sign-up.styles.scss'

export default class SignUp extends Component {
  constructor() {
    super()
  
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  
  handleSubmit = async e => {
    e.preventDefault();

    const {displayName, email, password, confirmPassword} = this.state;

    if(password !== confirmPassword){
      alert("passwords don't match");
      return;
    }

    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, {displayName});

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch(error){
      console.error(error);
    }
  };

  handleChange = e => {
    const {name, value} = e.target;

    this.setState({[name]: value});
  }

  render() {
    return (
      <div className='sign-up-page'>
        <div className='sign-up-image' style={{backgroundImage: `url("https://i.ibb.co/bKcn2b6/pexels-pixabay-276583.jpg")`}}></div>
        <div className="sign-up-form">
          <div className='sign-up'>
            <h2 className="title">Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={this.handleSubmit}>
              <FormInput type='text' name='displayName' value={this.state.displayName} onChange={this.handleChange} label='Display Name' required />
              <FormInput type='email' name='email' value={this.state.email} onChange={this.handleChange} label='Email' required />
              <FormInput type='password' name='password' value={this.state.password} onChange={this.handleChange} label='Password' required />
              <FormInput type='password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange} label='Confirm Password' required />

              <CustomButton type='submit'> SIGN UP </CustomButton>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
