import React from 'react'
import AuthRegister from './Authorization/AuthRegister'

export default function Register(props) {

  return (
    <div className="registrationScreen w-full mx-auto flex flex-col justify-center h-screen">
      <AuthRegister {...props} />
      <p className="text-center text-gray-500 text-xs">
        ©{(new Date()).getFullYear()} Guidr. All rights reserved.
      </p>
    </div>
  )
}
