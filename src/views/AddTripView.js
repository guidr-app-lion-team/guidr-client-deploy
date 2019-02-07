import React, { Component} from 'react'
import { connect } from 'react-redux'
import AddTrip from '../components/AddTrip';
import {addAdventure, getNewsFeed} from '../actions'

class AddTripView extends Component {
constructor(props){
  super(props);
  this.state={
    newTrip: {
      "user_id": this.props.user.id,
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
clearForm = e =>{
  e.preventDefault();
  this.setState({
    username: "",
    email: "",
    password: "",
    password2: "",
    name: "",
    location: "",
    bio: "",
    professional: false
  })
   this.props.history.push(`/user/${this.props.user.id}`)
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

submitAdventure = e =>{
  e.preventDefault();
  this.props.addAdventure(this.state.newTrip)
  this.props.getNewsFeed();
  this.props.isAddingAdventure ? console.log('waiting')  : this.props.history.push(`/user/${this.props.user.id}`)
}


  render() {
    return (
      <div className="py-12 add-trip-bg">
        <AddTrip 
        clearForm={this.clearForm}
        handleChanges={this.handleChanges} 
        newTrip={this.state.newTrip}
        submitAdventure={this.submitAdventure}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  isAddingAdventure: state.isAddingAdventure
})

const mapDispatchToProps = {
  addAdventure,
  getNewsFeed
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTripView)
