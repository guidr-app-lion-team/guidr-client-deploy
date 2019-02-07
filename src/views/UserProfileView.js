import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserProfile from '../components/UserProfile/UserProfile'
import {logOut, 
        updateAdventure, 
        getNewsFeed,
        getUserAdventure,
        deleteTrip} from '../actions'

export class UserProfileView extends Component {
  state={
    isEditingProfile: false,
    isEditingTrip: false,
   }
   componentDidMount() {
    this.props.getNewsFeed()
    // this.props.getUserAdventure(this.props.user.id)
   }
  // ComponentDidUpdate() { setTimeout(this.props.getUserAdventure(this.props.user.id), 3000)  }

  editingPro = () =>{
     console.log("click Pro")
     this.setState({isEditingProfile: true }) 
  }
  editingTrip = () =>{
    this.setState({isEditingTrip: true})
  }
  doneEditing = () =>{
    console.log("click Done")
    this.setState({isEditingProfile: false, isEditingTrip:false }) 
  }
  logout = () => {
    localStorage.clear();
    this.props.logOut()
    this.props.history.push('/')
  }
  
render() {
    return (
      <div>
        <UserProfile 
        {...this.props}
        user={this.props.user}
        users={this.props.users}
        logout={this.logout}
        isEditingProfile={this.state.isEditingProfile}
        isEditingTrip={this.state.isEditingTrip}
        editingPro={this.editingPro}
        editingTrip={this.editingTrip}
        doneEditing={this.doneEditing}
        userAdventures={this.props.userAdventures}
        updateAdventure={this.props.updateAdventure}
        deleteTrip={this.props.deleteTrip}
        getUserAdventure={this.props.getUserAdventure}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
  user: state.user,
  users: state.users,
  userAdventures: state.userAdventures
})

const mapDispatchToProps = {
  logOut,
  updateAdventure,
  deleteTrip,
  getNewsFeed,
  getUserAdventure
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileView)
