import React, { Component } from 'react'
import { connect } from 'react-redux'
import Register from '../components/Register'
import {addUser} from '../actions'

export class RegisterView extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }
  state = {
  newUser:{
    username: "",
    email: "",
    password: "",
    password2: "",
    name: "",
    location: "",
    bio: "",
    professional: false
  }}

  clearForm = e =>{
    e.preventDefault();
    this.setState({
      username: "",
      email: "",
      password: "",
      password2: "",
      name: "",
      location: "",
      bio: "",
      professional: false
    })
     this.props.history.push('/login')
  }
 


  handleSubmit = (e) => {
    const newUserLocal = {
      username: this.state.newUser.username,
      email: this.state.newUser.email,
      password: this.state.newUser.password,
      name: this.state.newUser.name,
      location: this.state.newUser.location,
      bio: this.state.newUser.bio,
      professional: this.state.newUser.professional,
    }
    e.preventDefault()
    if (this.state.password === this.state.password2) {
      
      //send the data via axios
      this.props.addUser(newUserLocal)
      this.props.error ? alert(this.props.error) : this.clearForm(e);
    }
    else {
      alert("You're passwords don't match.")
    }
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    if (e.target.name === "professional") {
      this.setState({newUser:{...this.state.newUser, professional: !this.state.professional }})
    }
    else {
      this.setState({newUser:{...this.state.newUser, [e.target.name]: e.target.value }})
    }
  }

  render() {
    return (
      <div className="w-screen login-screen">
        <Register
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          clearForm={this.clearForm}
          
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  error: state.error
})

const mapDispatchToProps = {
  addUser
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView)
