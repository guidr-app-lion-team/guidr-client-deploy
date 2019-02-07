import React from 'react';
// import {Link} from 'react-router-dom'
import Logo from '../imgs/logo-final.png'
import AuthLogin from './Authorization/AuthLogin'

export default function Login(props) {
  return (
    <div className="w-full max-w-xs mx-auto flex flex-col justify-center h-screen ">
    <img className="z-10 mb-4" src={Logo} alt=""/>
    <AuthLogin {...props}/>
      <p className="text-center text-grey text-xs">
        ©{(new Date()).getFullYear()} Guidr. All rights reserved.
      </p>
    </div>
  )
}
