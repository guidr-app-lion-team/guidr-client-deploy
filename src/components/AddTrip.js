import React from 'react'

const AddTrip = props => {
  return (
    <div className="w-2/5 my-8 mx-auto flex flex-col justify-center h-screen">
      <form onSubmit={() => console.log(`submitting`)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl">Add an Adventure!</h1>
        <div className="my-4">
          <label className="block text-grey-darker text-sm font-bold mb-2 text-left" for="username">
            Title
          </label>
          <input onChange={e => props.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="title" placeholder="Name Your Trip ex. Two Day Hike" />
        </div>
        <div className="my-4">
          <label className="block text-grey-darker text-sm font-bold mb-2 text-left" for="username">
            Date
          </label>
          <input onChange={e => props.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" type="date" name="date" />
        </div>
        <div className="my-4">
          <label className="block text-grey-darker text-sm font-bold mb-2 text-left" for="username">
            Location
          </label>
          <input onChange={e => props.handleChanges(e)}  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="location" placeholder="Where'd You Go?" />
        </div>
        <div className="my-4">
          <label className="block text-grey-darker text-sm font-bold mb-2 text-left" for="username">
            Duration
          </label>
          <input onChange={e => props.handleChanges(e)}  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="duration" placeholder="How many Days was your trip?" />
        </div>
        <div className="my-4">
          <label className="block text-grey-darker text-sm font-bold mb-2 text-left" for="username">
            Type
          </label>
          <div  className="mb-1"><input onChange={e => props.handleChanges(e)} type="radio" name="adventure_type" value="Back Packing"/><label className="ml-2 ">Back Packing</label></div>
          <div className="mb-1"><input onChange={e => props.handleChanges(e)} type="radio" name="adventure_type" value="Hiking" /><label className="ml-2">Hiking</label></div>
          <div  className="mb-1"><input onChange={e => props.handleChanges(e)} type="radio" name="adventure_type" value="Cycling"/><label className="ml-2">Cycling</label></div>
          <div  className="mb-1"><input onChange={e => props.handleChanges(e)} type="radio" name="adventure_type" value="Climbing"/><label className="ml-2">Climbing</label></div>
          <div  className="mb-1"><input onChange={e => props.handleChanges(e)} type="radio" name="adventure_type" value="Diving"/><label className="ml-2">Diving</label></div>
          

        </div>
        <div className="my-4">
          <label className="block text-grey-darker text-sm font-bold mb-2 text-left" for="username">
            Professional or Pleasure
          </label>
          <div>
            <input className="mr-2" type="radio" name="professional" value="professional"  onChange={e => props.handleChanges(e)}/> <label>Professional</label><br />
            <input className="mr-2" type="radio" name="professional" value="personal"  onChange={e => props.handleChanges(e)}/> <label>Pleasure</label>
          </div>
        </div>
        <div className="my-4">
          <label className="block text-grey-darker text-sm font-bold mb-2 text-left" for="username">
            Description/Notes
          </label>
          <textarea rows="4" onChange={e => props.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="description" spellcheck='true' placeholder="Any thoughts about your Trip?" />
        </div>



        <div className="flex items-center justify-between">
          <button className="bg-green-dark hover:bg-green-darker text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Submit
          </button>

        </div>
      </form>
    </div>
  )
}

export default AddTrip
