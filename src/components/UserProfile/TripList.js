import React from 'react'
import Trip from './Trip'

export default function TripList(props) {
  return (
    <div className="w-3/5 mx-auto">
      <h2 className="mb-4">{props.user.name}'s Adventures</h2>
      {/* props.trips.map(trip => return{ <Trip trip={trip}/>}) */}
      <Trip />
      <Trip />
      <Trip />
    </div>
  )
}
