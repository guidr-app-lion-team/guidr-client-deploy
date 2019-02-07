import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

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
      isLoggedIn: false
    }
  }

  inputHandler = event => {
    const { name, value } = event.target;
    this.setState({ user: { ...this.state.user, [name]: value } })
  }

  submitHandler = event => {
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

//   login = (userInfo) => {
//     axios.post('http://127.0.0.1:8000/api-token-auth/', userInfo)
//       .then(resp => {
//         localStorage.setItem('token', resp.data.token)
//         this.setState({ isLoggedIn: true })
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//   }
  render() {
    return (
      <div className='login'>
        <form onSubmit={this.submitHandler}>
          <section>
            <h1>Login Page</h1>
          </section>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.user.username}
            onChange={this.inputHandler}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.user.password}
            onChange={this.inputHandler}
          />
          <button type="submit">Submit</button>
        </form>
        {this.state.message
          ? (<h4>{this.state.message}</h4>)
          : undefined
        }
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
    
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin)