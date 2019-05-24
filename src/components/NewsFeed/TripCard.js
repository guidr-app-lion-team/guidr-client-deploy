import React from 'react'
import { Link } from 'react-router-dom'

export default function TripCard(props) {
  
  return (
    <div className="trip-card my-2 border-r border-b border-l border-grey-light lg:border-l lg:border-t lg:border-grey-light rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-evenly leading-normal">
    


       <i className={props.adventure.adventure_type === 'Hiking' ? 'fas fa-tree self-end text-2xl text-green-500' : props.adventure.adventure_type === 'Back Packing' ? 'fas fa-tree self-end text-2xl text-orange-500' : props.adventure.adventure_type === 'Rock Climbing' ? 'fas fa-tree self-end text-2xl text-gray-500' : props.adventure.adventure_type === 'Cycling' ? 'fas fa-tree self-end text-2xl text-red-600'  : props.adventure.adventure_type === 'Scuba Diving' ? 'fas fa-tree self-end text-2xl text-blue-400' : 'fas fa-tree self-end text-2xl text-black'}></i>
      <div className="text-black header-font text-center font-bold text-xl mb-2">{props.adventure.title}</div>
      <p className="text-black text-font text-base"> <span className="header-font text-lg mr-1">Location: </span> {props.adventure.location}</p>
      <p className="text-black text-font text-base"> <span className="header-font text-lg mr-1">Type: </span> {props.adventure.adventure_type}</p>
      <p className="text-black text-font text-base"> <span className="header-font text-lg mr-1">Duration: </span>{props.adventure.duration}</p>
      <p className="text-black text-font text-base"> <span className="header-font text-lg mr-1">Work or Pleasure: </span>{props.adventure.professional ? 'Professional' : 'Pleasure'}</p>
      
      <div className="flex items-center mt-4">
        <div className="text-sm">
          <Link to={`/user/${props.user.id}`} className="text-black leading-none header-font text-xl nunderline ">{props.user.username}</Link>
          <p className="text-black text-font">{props.adventure.date}</p>
        </div>
      </div>
    </div>
  )
}
