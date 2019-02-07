import React, { Component } from 'react'
import axios from 'axios'
import { TweenMax } from 'gsap/TweenMax'
import '../../index.css'

const initialUser = {
  username: '',
  password: '',
  password2: '',
  email: '',
  name: '',
  location: '',
  bio: '',
  professional: false,
}

class AuthRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: { ...initialUser },
      message: ''
    }
  }

  componentDidMount() {
    const target = document.querySelector("form");
    target.classList.toggle("hidden")
    TweenMax.from(target, .75, { yPercent: -30, opacity: 0 })
    TweenMax.to(target, 3, { yPercent: 0, opacity: 1 });
  }

  inputHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ newUser: { ...this.state.newUser, [name]: value } })
    if (name === "professional") {
      this.setState({ newUser: { ...this.state.newUser, professional: !this.state.professional } })
    }
  }

  submitHandler = (event) => {
    event.preventDefault();
    const newUserOff = {
      username: this.state.newUser.username,
      password: this.state.newUser.password,
      email: this.state.newUser.email,
      name: this.state.newUser.name,
      location: this.state.newUser.location,
      bio: this.state.newUser.bio,
      professional: this.state.newUser.professional,
    }
    console.log(newUserOff)
    axios.post(`https://guidr2.herokuapp.com/register`, newUserOff)
      .then((res) => {
        if (res.status === 201) {
          this.setState({
            message: 'Registration Successful',
            newUser: { ...initialUser },
          })
          this.props.history.push('/')
        } else {
          throw new Error();
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
        <form id="registerForm" autoComplete="on" onSubmit={this.submitHandler} className="w-4/5 mx-auto bg-grey-darker shadow-md px-8 pt-6 mb-4 rounded-lg hidden">
          <h1>Registration</h1>
          <div className="flex justify-around rounded px-8 pt-6 pb-8 mb-4">

            <div className="w-5/6">
              <div className="mb-4 w-4/5 mx-auto">
                <input
                  type='text'
                  id='username'
                  name='username'
                  value={this.state.newUser.username}
                  onChange={this.inputHandler}
                  placeholder="Username"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center" />
              </div>
              <div className="mb-4 w-4/5 mx-auto">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.newUser.email}
                  onChange={this.inputHandler}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center" />
              </div>

              <div className="mb-4 w-4/5 mx-auto">
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.newUser.password}
                  onChange={this.inputHandler}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center" />
              </div>
              {/* //Here */}
              <div className="mb-4 w-4/5 mx-auto">
                <input
                  id="password2"
                  type="password"
                  name="password2"
                  placeholder="Retype Password"
                  value={this.state.newUser.password2}
                  onChange={this.inputHandler}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center" />
              </div>
            </div>

            <div className="w-5/6">
              <div className="mb-4 w-4/5 mx-auto">
                <input
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  type='text'
                  value={this.state.newUser.name}
                  onChange={this.inputHandler}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center" />
              </div>
              <div className="mb-4 w-4/5 mx-auto">
                <input
                  id="location"
                  name="location"
                  placeholder="Location"
                  type='text'
                  value={this.state.newUser.location}
                  onChange={this.inputHandler}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center" />
              </div>
              <div className="mb-4 w-4/5 mx-auto">
                <textarea
                  id="bio"
                  type="text"
                  name="bio"
                  placeholder="Bio"
                  maxLength="400"
                  value={this.state.newUser.bio}
                  onChange={this.inputHandler}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center" />
                <label className="text-center block text-grey-darker text-sm font-bold mb-2" htmlFor="text">
                  Professional? <input onChange={this.inputHandler} value={this.state.newUser.professional} className="shadow" id="professional" type="checkbox" name="professional" placeholder="Professional" />
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-3">
            <button onClick={e => this.submitHandler(e)} className="bg-green-dark hover:bg-green-darker text-white font-bold mx-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
        </button>
            <button onClick={e => this.submitHandler(e)} className="bg-grey hover:bg-green-darker text-white font-bold mx-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Cancel
        </button>
          </div>
        </form>
      </>
    )
  }
}

export default AuthRegister;