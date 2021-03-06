import React, { Component } from 'react'
import axios from 'axios'
import { TweenMax } from 'gsap/TweenMax'
import '../../index.css'
import RegImg from '../../imgs/registration.png'

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
        <form autoComplete="on" onSubmit={this.submitHandler} className="  bg-green-900 w-4/5 mx-auto shadow-md px-8 pt-6 mb-4 rounded-lg hidden">
          {/* <h1>Registration</h1> */}
          <div className="flex w-full justify-center">
          <img src={RegImg} className="self-center"alt=""/>
          </div>
          <div className="registerText flex justify-around rounded px-8 pt-6 pb-8 mb-4">
            <div className="w-5/6">
              <div className="mb-4 w-4/5 mx-auto">
              <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="username">
                Username
              </label>
                <input
                  type='text'
                  id='username'
                  name='username'
                  value={this.state.newUser.username}
                  onChange={this.inputHandler}
                  placeholder="NewHiker13"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center" />
              </div>
              <div className="mb-4 w-4/5 mx-auto">
              <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="username">
                Email
              </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="NewHiker13@hotmail.com"
                  value={this.state.newUser.email}
                  onChange={this.inputHandler}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center" />
              </div>

              <div className="mb-4 w-4/5 mx-auto">
              <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="username">
                Password
              </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="**********"
                  value={this.state.newUser.password}
                  onChange={this.inputHandler}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center" />
              </div>
              {/* //Here */}
              <div className="mb-4 w-4/5 mx-auto">
              <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="username">
                Retype Password
              </label>
                <input
                  id="password2"
                  type="password"
                  name="password2"
                  placeholder="**********"
                  value={this.state.newUser.password2}
                  onChange={this.inputHandler}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center" />
              </div>
            </div>

            <div className="w-5/6">
              <div className="mb-4 w-4/5 mx-auto">
              <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="username">
                Full Name
              </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Yosemite Sam"
                  type='text'
                  value={this.state.newUser.name}
                  onChange={this.inputHandler}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center" />
              </div>
              <div className="mb-4 w-4/5 mx-auto">
              <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="username">
                Location
              </label>
                <input
                  id="location"
                  name="location"
                  placeholder="Zion, Utah"
                  type='text'
                  value={this.state.newUser.location}
                  onChange={this.inputHandler}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center" />
              </div>
              <div className="mb-4 w-4/5 mx-auto">
              <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="username">
                Bio
              </label>
                <textarea
                  id="bio"
                  type="text"
                  name="bio"
                  placeholder="Tell us About Yourself!"
                  maxLength="400"
                  value={this.state.newUser.bio}
                  onChange={this.inputHandler}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-center" />
                <label className="self-start flex mt-4 text-white font-bold mb-2" htmlFor="text">
                  Professional?
                  <input onChange={this.inputHandler} value={this.state.newUser.professional} className="shadow ml-2" id="professional" type="checkbox" name="professional" placeholder="Professional" />
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-3">
            <button onClick={e => this.submitHandler(e)} className="registerText bg-green-500 hover:bg-green-700 text-white font-bold mx-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
        </button>
            <button onClick={e => this.props.clearForm(e)} className="registerText bg-gray-600 hover:bg-gray-700 text-white font-bold mx-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Cancel
        </button>
          </div>
        </form>
      </>
    )
  }
}

export default AuthRegister;