import React, { Component } from 'react'

import AddTrip from '../components/AddTrip';


export default class AddTripView extends Component {
constructor(props){
  super(props);
  this.state={
    newTrip: {
      "adventure_type": "",
      "title": "",
      "location": "",
      "duration": "",
      "description": " ",
      "professional": false,
      "date": null
      }
  }
}

handleChanges = e =>{
  console.log(e.target.value)
  if(e.target.name === 'adventure_type'){
    this.setState({
      newTrip:({
        ...this.state.newTrip,
          "adventure_type": e.target.value
       })
    })
  }
  else if(e.target.value === "professional"){
      this.setState({
        newTrip:({
          ...this.state.newTrip,
            "professional": true
         })
      })
    } 
  else if(e.target.value === "personal"){
      this.setState({
        newTrip:({
          ...this.state.newTrip,
            "professional": false
         })
      })
    }
   else{ 
    this.setState({
      newTrip:({
        ...this.state.newTrip,
        [e.target.name]: e.target.value
      })
        
    })
  }
}
  render() {
    return (
      <div className="py-12 add-trip-bg">
        <AddTrip handleChanges={this.handleChanges} newTrip={this.state.newTrip}/>
      </div>
    )
  }
}
