import React from 'react'
import Trip from './Trip'
import {Link} from "react-router-dom"

export default function TripList(props) {
  console.log(props)
  return (
    <div className="w-3/5 mx-auto">
      <h2 className="my-4 text-center">{props.user.name}'s Adventures</h2>
      {props.userAdventures.length === 0
      ? 
      (<>
        <h3>Uh oh Looks like you have no Adventures!</h3>
        <Link to={"/addTrip"} >Add some here! </Link>
      </>
      )
      : (props.userAdventures.map(trip =>  
      <Trip key={trip.id}
       doneEditing={props.doneEditing}
       isEditingTrip={props.isEditingTrip}
       editingTrip={props.editingTrip}
       updateAdventure={props.updateAdventure}
       trip={trip}
       deleteTrip={props.deleteTrip}
       />))
    }
    </div>
  )
}
