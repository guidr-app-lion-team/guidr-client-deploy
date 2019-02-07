import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewsFeed from '../components/NewsFeed/NewsFeed'
import {getNewsFeed, getUsers, logOut} from '../actions';

export class NewsFeedView extends Component {
  state={
    selected: "All",

  }
  componentDidMount(){
     this.props.getNewsFeed()
     
  }
  changeSelected = (ev) => {
    console.log(ev.target.innerText)
    this.setState({selected: ev.target.innerText});
  };

  filterFeed = () => {
  const filtered =  this.props.adventures.filter(adventure => {
      if(this.state.selected === "All"){
        return this.props.adventures
      } 
      else if(this.state.selected === adventure.adventure_type){
         return adventure
      }
  }
  );
  return (filtered)
}
  logout = () => {
    localStorage.clear();
    this.props.logOut()
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <NewsFeed 
        adventures={this.filterFeed()}
        users={this.props.users}
        logout={this.logout}
        user={this.props.user}
        changeSelected={ this.changeSelected}
        // feed= {this.filterCards()}
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
    user: state.user,
    
})

const mapDispatchToProps = {
  getNewsFeed,
  getUsers,
  logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedView)
