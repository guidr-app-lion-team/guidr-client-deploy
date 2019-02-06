import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../imgs/mocklogo2.0.png'

export default function Login(props) {
  return (
    <div className="w-full max-w-xs mx-auto flex flex-col justify-center h-screen ">
    <img src={Logo} alt=""/>
      <form onSubmit={e => props.submitLogin(e)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2 text-left" htmlFor="username">
            Username
          </label>
          <input onChange={ e => props.handleChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="username" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="text-left block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input onChange={ e => props.handleChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" placeholder="******************" />
          {/* <p className="text-red text-xs italic">Please choose a password.</p> */}
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-green-dark hover:bg-green-darker text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
          <Link to={"/register"} className="inline-block align-baseline font-bold text-sm text-green-dark hover:text-green-darker" href="#">
            Need to Register?
          </Link>
        </div>
      </form>
      <p className="text-center text-grey text-xs">
        ©{(new Date()).getFullYear()} Guidr. All rights reserved.
      </p>
    </div>
  )
}
