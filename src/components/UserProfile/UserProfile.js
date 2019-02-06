import React from 'react'
import { Link } from 'react-router-dom'
import ProImg from '../../imgs/hiker-pro-img.jpg'
import TripList from './TripList'



export default function UserProfile(props) {
  return (
    <>
      <div className="">
        <nav className="w-full bg-green-dark flex justify-end h-12 border  items-center">
          <Link className="no-underline mx-2 text-lg text-white hover:text-green-darker" to={'/newsfeed'}>AdventureFeed</Link>
          <Link className="no-underline mx-2 text-lg text-white hover:text-green-darker" to={'/addTrip'}>Add Trip</Link>
          {/* <span className="text-green "> | </span> */}
          <Link onClick={e => props.logout(e)} className="no-underline mx-4 text-lg text-red hover:text-red-darker" to={'/'}>Logout</Link>
        </nav>

        <div className="flex h-pro-header items-center">
          <div className="w-1/2 flex px-4 flex-col justify-center items-center h-pro-image">
            <img className="rounded-lg rounded border border-8 border-white" src={ProImg} alt="" />
          </div>
          
          <div className="w-1/2 px-4 flex items-center">
            <div className="bg-white w-4/5 rounded  p-4 flex flex-col justify-between leading-normal">
            <i className="self-end far fa-edit text-xl"></i>
            <div></div>
              <div className="flex my-2">
                <h4 className="mr-2">Name: </h4>
                <p>{props.user.name}</p>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2">Email: </h4>
                <p>{props.user.email}</p>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2">Location: </h4>
                <p>{props.user.location}</p>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2">Bio: <span className="font-normal">{props.user.bio}</span></h4>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div>
        <TripList user={props.user}  />
      </div>
    </>
  )
}
