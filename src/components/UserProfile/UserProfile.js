import React from 'react'
import { Link } from 'react-router-dom'
import ProImg from '../../imgs/hiker-pro-img.jpg'
import TripList from './TripList'



export default function UserProfile() {
  return (
    <>
      <div className="">
        <nav className="w-full bg-green-dark flex justify-end h-12 border  items-center">
          <Link className="no-underline mx-2 text-lg text-white hover:text-green-darker" to={'/newsfeed'}>AdventureFeed</Link>
          <Link className="no-underline mx-2 text-lg text-white hover:text-green-darker" to={'/addTrip'}>Add Trip</Link>
          {/* <span className="text-green "> | </span> */}
          <Link className="no-underline mx-4 text-lg text-red hover:text-red-darker" to={'/login'}>Logout</Link>
        </nav>

        <div className="flex h-pro-header items-center">
          <div className="w-1/2 flex px-4 flex-col justify-center items-center h-pro-image">
            <img className="rounded-lg rounded border border-8 border-white" src={ProImg} alt="" />
          </div>
          
          <div className="w-1/2 px-4 flex items-center">
            <div class="bg-white w-4/5 rounded  p-4 flex flex-col justify-between leading-normal">
            <i className="self-end far fa-edit text-xl"></i>
            <div></div>
              <div className="flex my-2">
                <h4 className="mr-2">Name: </h4>
                <p>Matt Basile</p>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2">Email: </h4>
                <p>mbhiker@gmail.com</p>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2">Location: </h4>
                <p>Hudson, NY</p>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2">Bio: <span className="font-normal">Born and raised in New England I've always had an affinity for the outdoors. Whether that's Kayaking, Free Climbing or going on an overnight trip, I'm down! I've logged over 300 hours of outdoor trainings and this spring will be my 15th season guiding trips. If you want to learn more about me or my trip curation please shoot me an email!</span></h4>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div>
        <TripList />
      </div>
    </>
  )
}
