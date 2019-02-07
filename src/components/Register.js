import React from 'react'
import AuthRegister from './Authorization/AuthRegister'

export default function Register(props) {
  
  return (
    <div className="w-full mx-auto flex flex-col justify-center h-screen">
    <AuthRegister {...props}/>
      

     

      <p className="text-center text-grey text-xs">
        ©{(new Date()).getFullYear()} Guidr. All rights reserved.
      </p>
    </div>
  )
}
