import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import axios from 'axios';
// import {transitions} from '../../actions'

const initialUser = {
  username: '',
  password: '',
}

class AuthLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { ...initialUser },
      message: '',
      isLoggedIn: false,
      isLoading: false
    }
  }

  inputHandler = event => {
    const { name, value } = event.target;
    this.setState({ user: { ...this.state.user, [name]: value } })
  }

  submitHandler = event => {
    this.setState({isLoading: true})
    event.preventDefault();
    axios.post(`https://guidr2.herokuapp.com/login`, this.state.user)
    .then(resp => {
        console.log("running token")
        localStorage.setItem('token', resp.data.token)
        this.setState({ isLoggedIn: true })
      })
    .then(() => {console.log("running token")
      return  this.state.isLoggedIn ? this.loginUserTest() : null
     } )
    .catch(function (error) {
        console.log(error);
  })}

  loginUserTest = (e) =>{
    const trueUser = this.props.users.find(user=> user.username === this.state.user.username);
    console.log(trueUser)
    console.log(this.props)
    console.log(this.props.users)
    if(trueUser){
       this.props.setUser(trueUser)
       this.props.getUserAdventure(trueUser.id)
       localStorage.setItem('user', JSON.stringify(trueUser))
       this.props.history.push('/newsfeed')    
    } else{
      alert('Sorry this user is not registered, please follow this link to do so! ')
    } 
  }
  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      this.setState({ isLoggedIn: true })
    }
  }
  render() {
  return (

<form onSubmit={this.submitHandler} autoComplete="on" className="bg-green-darker z-10 shadow-md rounded px-8 pt-6 pb-8 mb-4">
<div className="mb-4">
  <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="username">
    Username
  </label>
  <input 
    type="text"
    id="username"
    name="username"
    value={this.state.user.username}
    onChange={this.inputHandler}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
    />
</div>
<div className="mb-6">
  <label className="text-left block text-white text-sm font-bold mb-2" htmlFor="password">
    Password
  </label>
  <input
   required
   autoComplete="on"
   type="password"
   id="password"
   name="password"
   value={this.state.user.password}
   onChange={this.inputHandler} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="******************" />
</div>
<div className="flex items-center justify-between">
  <button className="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
    Sign In
  </button>
  <Link to={"/register"} className="inline-block align-baseline font-bold text-sm text-white no-underline hover:underline" href="#">
    Need to Register?
  </Link>
</div>
</form>)
}}


const mapStateToProps = (state) => ({
    username: state.username,
    isLoggedIn : state.isLoggedIn,
    error: state.error,
    users: state.users,
    user: state.user,
    userAdventures: state.userAdventures
  })
  
  const mapDispatchToProps = {
    // transitions
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin)