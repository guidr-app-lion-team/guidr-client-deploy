import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import {userLogin,
        getUsers,
        getSingleUser,
        setUser,
        getUserAdventure} from '../actions'

export class LoginView extends Component {
  state={
    userLoggingIn:{
      username: '',
      password: ''
    }
  }
  loginUserTest = (e) =>{
    e.preventDefault();
    const trueUser = this.props.users.find(user=> user.username === this.state.userLoggingIn.username);
    if(trueUser){
       this.submitLogin(trueUser)
       this.props.getUserAdventure(trueUser.id)
       localStorage.setItem('user', JSON.stringify(trueUser))      
    } else{
      alert('Sorry this user is not registered, please follow this link to do so! ')
    } 
  }
  componentDidMount(){
    this.props.getUsers();
  }
  
  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
      this.setState({userLoggingIn:{...this.state.userLoggingIn, [e.target.name]: e.target.value }})
  }
  submitLogin = user =>{
    // console.log(this.state.userLoggingIn.username)
    // this.props.userLogin(this.state.userLoggingIn.username)
    this.props.setUser(user)
    this.props.error ? alert(this.props.error) : this.props.history.push('/newsfeed');
  }
  render() {
    return (
      <div className="w-screen login-screen">
        <Login
        loginUserTest={this.loginUserTest}
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
  error: state.error,
  users: state.users,
  user: state.user,
  userAdventures: state.userAdventures
})

const mapDispatchToProps = {
  userLogin,
  getUsers,
  getSingleUser,
  setUser,
  getUserAdventure
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
