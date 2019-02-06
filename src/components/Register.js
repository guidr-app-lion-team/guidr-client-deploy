import React from 'react'


export default function Register(props) {
  
  return (
    <div className="w-full mx-auto flex flex-col justify-center h-screen">
      <form onSubmit={(e) => props.handleSubmit(e)} className="w-4/5 mx-auto bg-white shadow-md px-8 pt-6 mb-4 rounded">
        <h1>Registration</h1>
        <div className="flex justify-around rounded px-8 pt-6 pb-8 mb-4">
          <div className="w-5/6">
            <div className="mb-4 w-4/5 mx-auto">
              {/* <label className="block text-grey-darker text-sm font-bold mb-2 text-center" htmlFor="username">
                Username
              </label> */}
              <input onChange={(e) => props.handleChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center" id="username" type="text" name="username" placeholder="Username" required />
            </div>

            <div className="mb-4 w-4/5 mx-auto">
              {/* <label className="text-left block text-grey-darker text-sm font-bold mb-2" htmlFor="text">
                Email
            </label> */}
              <input onChange={(e) => props.handleChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center" id="email" type="email" name="email" placeholder="Email" required />
            </div>

            <div className="mb-4 w-4/5 mx-auto">
              {/* <label className="block text-grey-darker text-sm font-bold mb-2 text-left" htmlFor="username">
                Password
              </label> */}
              <input onChange={(e) => props.handleChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center" id="password" type="password" name="password" placeholder="Password" required />
            </div>

            <div className="mb-4 w-4/5 mx-auto">
              {/* <label className="block text-grey-darker text-sm font-bold mb-2 text-left" htmlFor="username">
                Retype Password
              </label> */}
              <input onChange={(e) => props.handleChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center" id="password2" type="password" name="password2" placeholder="Retype Password" required />
            </div>
          </div>

          <div className="w-5/6">
            <div className="mb-4 w-4/5 mx-auto">
              {/* <label className="text-left block text-grey-darker text-sm font-bold mb-2" htmlFor="text">
                Name
              </label> */}
              <input onChange={(e) => props.handleChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center" id="name" type="text" name="name" placeholder="Full Name" />
            </div>

            <div className="mb-4 w-4/5 mx-auto">
              {/* <label className="text-left block text-grey-darker text-sm font-bold mb-2" htmlFor="textarea">
                Location
              </label> */}
              <input onChange={(e) => props.handleChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center" id="location" type="text" name="location" placeholder="Location" />
            </div>

            <div className="mb-4 w-4/5 mx-auto">
              {/* <label className="text-left block text-grey-darker text-sm font-bold mb-2" htmlFor="textarea">
                Bio
              </label> */}
              <textarea onChange={(e) => props.handleChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-center" id="bio" type="text" name="bio" placeholder="Bio" maxLength="400" />
            </div>

            <div className="mb-4 w-4/5 mx-auto">
              <label className="text-center block text-grey-darker text-sm font-bold mb-2" htmlFor="text">
                Professional? <input onChange={(e) => props.handleChange(e)} className="shadow" id="professional" type="checkbox" name="professional" placeholder="Professional" />
              </label>
            </div>
          </div>
        </div>
      </form>

      <div className="flex justify-center mb-3">
        <button onClick={(e) => props.handleSubmit(e)} className="bg-green-dark hover:bg-green-darker text-white font-bold mx-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Submit
        </button>
        <button onClick={e => props.clearForm(e)} className="bg-grey hover:bg-green-darker text-white font-bold mx-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Cancel
        </button>
      </div>

      <p className="text-center text-grey text-xs">
        ©{(new Date()).getFullYear()} Guidr. All rights reserved.
      </p>
    </div>
  )
}
