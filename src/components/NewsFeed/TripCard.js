import React from 'react'
import { Link } from 'react-router-dom'

export default function TripCard(props) {
  return (
    <div className="trip-card my-2 border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-evenly leading-normal">
      <div className="text-black font-bold text-xl mb-2">{props.adventure.title}</div>
      <p className="text-grey-darker text-base">Location: {props.adventure.location}</p>
      <p className="text-grey-darker text-base">Type: {props.adventure.adventure_type}</p>
      <p className="text-grey-darker text-base">Duration: {props.adventure.duration}</p>
      <p className="text-grey-darker text-base">Work or Pleasure: {props.adventure.professional ? 'Professional' : 'Pleasure'}</p>

      <div className="flex items-center mt-4">
        <div className="text-sm">
          <Link to='/user/:id' className="text-black leading-none"></Link>
          <p className="text-grey-dark">{props.adventure.date}</p>
        </div>
      </div>
    </div>
  )
}
