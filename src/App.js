import React, { Component } from 'react'
import { Route} from 'react-router'
//Views
import LandingPageView from './views/LadingPageView'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import NewsFeedView from './views/NewsFeedView'
import UserProfileView from './views/UserProfileView'
import AddTripView from './views/AddTripView'

// CSS
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPageView} />
        <Route path="/login" component={LoginView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/newsfeed" component={NewsFeedView} />
        <Route path="/user/:id" component={UserProfileView} />
        <Route path="/addTrip" component={AddTripView} />
      </div>
    );
  }
}


export default App;

