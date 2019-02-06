import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import {userLogin} from '../actions'

export class LoginView extends Component {

  state={
    userLoggingIn:{
      username: '',
      password: ''
    }
  }
  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
      this.setState({userLoggingIn:{...this.state.userLoggingIn, [e.target.name]: e.target.value }})
  }
  submitLogin = e =>{
    e.preventDefault();
    this.props.userLogin(this.state.userLoggingIn)
    this.props.error ? alert(this.props.error) : this.props.history.push('/newsfeed');
  }
  render() {
    return (
      <div className="w-screen login-screen">
        <Login
        submitLogin ={this.submitLogin}
        handleChange ={this.handleChange}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  username: state.username,
  isLoggedIn : state.isLoggedIn,
  error: state.error
})

const mapDispatchToProps = {
  userLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
