import React, { Component } from 'react';
import { connect } from 'react-redux'

import {logOut } from '../../actions'

export class UserProfileView extends Component {
  state={
    users: this.props.users,
    isEditingProfile: false,
    isEditingTrip: false,
    id: this.props.match.params.id,
    pageUser: ''
   }
componentDidMount(){
    this.getUserFromURL()
}
getUserFromURL = () =>{
    const user = this.state.users.find(user => `${user.id}` === this.state.id)
    user.id === this.props.user.id ? this.props.history.push("/user") : this.setState({pageUser: user})
}

render() {
    console.log(this.state.id)
    // this.getUserFromURL()
    return (
    <h1>{this.state.pageUser ? this.state.pageUser.username : "Sorry this user does not exist"}</h1>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  user: state.user
})

const mapDispatchToProps = {
  logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileView)
