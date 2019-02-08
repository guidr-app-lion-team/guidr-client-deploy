import React from 'react'
import { Link } from 'react-router-dom'

export default function TripCard(props) {
  
  return (
    <div className={
      props.adventure.adventure_type === 'Hiking' ? 'bg-green trip-card my-2 border-r border-b border-l border-grey-light lg:border-l lg:border-t lg:border-grey-light rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-evenly leading-normal ' : props.adventure.adventure_type === 'Back Packing' ? 'bg-orange trip-card my-2 border-r border-b border-l border-grey-light lg:border-l lg:border-t lg:border-grey-light rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-evenly leading-normal ' : props.adventure.adventure_type === 'Rock Climbing' ? 'bg-grey  trip-card my-2 border-r border-b border-l border-grey-light lg:border-l lg:border-t lg:border-grey-light rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-evenly leading-normal ' : props.adventure.adventure_type === 'Cycling' ? 'bg-red   trip-card my-2 border-r border-b border-l border-grey-light lg:border-l lg:border-t lg:border-grey-light rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-evenly leading-normal'  : props.adventure.adventure_type === 'Scuba Diving' ? 'bg-blue  trip-card my-2 border-r border-b border-l border-grey-light lg:border-l lg:border-t lg:border-grey-light rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-evenly leading-normal  ' : 'trip-card my-2 border-r border-b border-l border-grey-light lg:border-l lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-evenly leading-normal'
    }>
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
