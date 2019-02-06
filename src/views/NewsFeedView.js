import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewsFeed from '../components/NewsFeed/NewsFeed'
import {getNewsFeed, getUsers} from '../actions';

export class NewsFeedView extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }
  componentDidMount(){
     this.props.getNewsFeed()
     
  }
  

  logout = () => {
    localStorage.removeItem('jwt')
    this.props.history.push('/Login')
  }
  render() {
    console.log(this.props.users)
    return (
      <div>
        <NewsFeed 
        adventures={this.props.adventures}
        users={this.props.users}
        logout={this.logout}
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
    isLoggedIn: state.isLoggedIn
})

const mapDispatchToProps = {
  getNewsFeed,
  getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedView)
