import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {signInWithGoogle} from '../../firebase/firebase.utils'
import './sign-in.styles.scss'

export default class SignIn extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({email: '', password: ''})
  }

  handleChange = e => {
    const {value, name} = e.target

    this.setState({[name]: value})
  }
  
  render() {
    return (
      <div className='sign-in-page'>
        <div className='sign-in-image' style={{backgroundImage: `url("https://i.ibb.co/bKcn2b6/pexels-pixabay-276583.jpg")`}}></div>
        <div className="sign-in-form">
          <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
              <FormInput name="email" type="email" label="email" value={this.state.email} handleChange={this.handleChange} required />
              <FormInput name="password" type="password" label="password" value={this.state.password} handleChange={this.handleChange} required />

              <div className='buttons'>
                <CustomButton type="submit"> SIGN IN </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
