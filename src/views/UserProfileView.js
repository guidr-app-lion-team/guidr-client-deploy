import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserProfile from '../components/UserProfile/UserProfile'
import {logOut} from '../actions'

export class UserProfileView extends Component {
logout = () => {
    this.props.logOut()
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <UserProfile 
        user={this.props.user}
        logout={this.logout}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
  user: state.user
})

const mapDispatchToProps = {
  logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileView)
