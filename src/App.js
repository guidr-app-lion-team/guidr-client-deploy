import React, { Component } from 'react'
import { Route } from 'react-router'
//Views import Friend from './components/NewsFeed/Friend'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import NewsFeedView from './views/NewsFeedView'
import UserProfileView from './views/UserProfileView'
import AddTripView from './views/AddTripView'
// import Friend from './components/NewsFeed/Friend'



class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LoginView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/newsfeed" component={NewsFeedView} />
        <Route exact path="/user" component={UserProfileView} />
        <Route path="/user/:id" component={UserProfileView} />
        <Route path="/addTrip" component={AddTripView} />
      </div>
    );
  }
}


export default App;

