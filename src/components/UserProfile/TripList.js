import React from 'react'
import Trip from './Trip'
import {Link} from "react-router-dom"

export default function TripList(props) {
  console.log(props)
  return (
    <div className="w-3/5 mb-12 mx-auto">
      <h2 className="my-4 text-center header-font">{props.pageUser.name}'s Adventures</h2>
      {props.userAdventures.length === 0
      ? 
      (<div className="text-center w-full mx-auto">
        <h3 className="mb-8 header-font ">Uh oh Looks like you have no Adventures!</h3>
        <Link to={"/addTrip"} className="text-font bg-green hover:bg-green-dark text-white font-bold py-4 px-8 rounded mt-4" > Add some here! </Link>
      </div>
      )
      : (props.userAdventures.map(trip =>  
      <Trip key={trip.id}
       doneEditing={props.doneEditing}
       isEditingTrip={props.isEditingTrip}
       editingTrip={props.editingTrip}
       updateAdventure={props.updateAdventure}
       trip={trip}
       deleteTrip={props.deleteTrip}
       mainUserPage={props.mainUserPage}
       />))
    }
    </div>
  )
}
