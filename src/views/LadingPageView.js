import React, { Component } from 'react'
import { connect } from 'react-redux'
import LandingPage from '../components/LandingPage';


export class LadingPageView extends Component {


  render() {
    return (
      <div>
       <LandingPage/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(LadingPageView)
