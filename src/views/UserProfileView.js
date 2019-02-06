import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserProfile from '../components/UserProfile/UserProfile'

export class UserProfileView extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    return (
      <div>
        <UserProfile />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileView)
