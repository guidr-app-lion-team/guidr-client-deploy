import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewsFeed from '../components/NewsFeed/NewsFeed'
import {getNewsFeed, getUsers, logOut} from '../actions';

export class NewsFeedView extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }
  componentDidMount(){
     this.props.getNewsFeed()
     
  }
  
  logout = () => {
    localStorage.clear();
    this.props.logOut()
    this.props.history.push('/')
  }
  render() {
    console.log(this.props.users)
    return (
      <div>
        <NewsFeed 
        adventures={this.props.adventures}
        users={this.props.users}
        logout={this.logout}
        user={this.props.user}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    isFetchingFeed: state.isFetchingFeed,
    adventures: state.adventures,
    error: state.error,
    users: state.users,
    isLoggedIn: state.isLoggedIn,
    user: state.user
})

const mapDispatchToProps = {
  getNewsFeed,
  getUsers,
  logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedView)
