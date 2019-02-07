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
//   changeSelected = (ev) => {
//     this.setState({selected: ev.target.innerText.()});
//   };

//   filterCards = () => {
//   const filtered =  this.props.adventures.filter(adventure => {
//       if(this.state.selected === "ALL"){
//         return this.props.adventures
//       } 
//       else if(this.state.selected === adventure..toUpperCase()){
//          return card
//       }
//   }
//   );
//   return filtered
// }
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
        // changeSelected={ this.changeSelected}
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
