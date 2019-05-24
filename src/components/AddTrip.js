import React from 'react'

const AddTrip = props => {
  return (
    <div className="w-2/5 my-8 mx-auto flex flex-col justify-center h-screen">
      <form onSubmit={e => props.submitAdventure(e)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl text-center header-font">Add an Adventure!</h1>
        <div className="my-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left header-font" htmlFor="username">
            Title
          </label>
          <input onChange={e => props.handleChanges(e)} className="text-font shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="title" placeholder="Name Your Trip ex. Two Day Hike" />
        </div>
        <div className="my-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left header-font" htmlFor="username">
            Date
          </label>
          <input onChange={e => props.handleChanges(e)} className="text-font shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" name="date" />
        </div>
        <div className="my-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left header-font" htmlFor="username">
            Location
          </label>
          <input onChange={e => props.handleChanges(e)}  className="text-font shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="location" placeholder="Where'd You Go?" />
        </div>
        <div className="my-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left header-font" htmlFor="username">
            Duration
          </label>
          <input onChange={e => props.handleChanges(e)}  className="text-font shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="duration" placeholder="How many Days was your trip?" />
        </div>
        <div className="my-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left header-font" htmlFor="username">
            Type
          </label>
          <div  className="mb-1"><input onChange={e => props.handleChanges(e)} type="radio" name="adventure_type" value="Back Packing"/><label className="ml-2 text-font ">Back Packing</label></div>
          <div className="mb-1"><input onChange={e => props.handleChanges(e)} type="radio" name="adventure_type" value="Hiking" /><label className="ml-2 text-font">Hiking</label></div>
          <div  className="mb-1"><input onChange={e => props.handleChanges(e)} type="radio" name="adventure_type" value="Cycling"/><label className="ml-2 text-font">Cycling</label></div>
          <div  className="mb-1"><input onChange={e => props.handleChanges(e)} type="radio" name="adventure_type" value="Climbing"/><label className="ml-2 text-font">Climbing</label></div>
          <div  className="mb-1"><input onChange={e => props.handleChanges(e)} type="radio" name="adventure_type" value="Diving"/><label className="ml-2 text-font">Diving</label></div>
          

        </div>
        <div className="my-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left header-font" htmlFor="username">
            Professional or Pleasure
          </label>
          <div>
            <input className="mr-2" type="radio" name="professional" value="professional"  onChange={e => props.handleChanges(e)}/> <label className="text-font">Professional</label><br />
            <input className="mr-2" type="radio" name="professional" value="personal"  onChange={e => props.handleChanges(e)}/> <label className="text-font">Pleasure</label>
          </div>
        </div>
        <div className="my-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left header-font" htmlFor="username">
            Description/Notes
          </label>
          <textarea rows="4" onChange={e => props.handleChanges(e)} className="text-font shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="description" spellCheck='true' placeholder="Any thoughts about your Trip?" />
        </div>



        <div className="flex items-center justify-around">
          <button className="header-font bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
          <button onClick={e=>props.clearForm(e)} className=" header-font bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Cancel
          </button>

        </div>
      </form>
    </div>
  )
}

export default AddTrip
