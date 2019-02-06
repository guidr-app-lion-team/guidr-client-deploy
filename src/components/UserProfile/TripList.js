import React from 'react'
import Trip from './Trip'

export default function TripList(props) {
  console.log(props)
  return (
    <div className="w-3/5 mx-auto">
      <h2 className="mb-4">{props.user.name}'s Adventures</h2>
      {props.userAdventures.map(trip =>  <Trip trip={trip}/>)}
    </div>
  )
}
