import React from 'react'
import { Link } from 'react-router-dom'
import ProImg from '../../imgs/hiker-pro-img.jpg'
import TripList from './TripList'



 class UserProfile extends React.Component{
   constructor(props){
     super(props);
     this.state={
        profile:{
          name: '',
          email: ' ',
          location: '',
          bio: '',
        }
     }
   }
   componentDidMount(){
    this.setState({profile: {
      name: this.props.user.name,
      email: this.props.user.email,
      location: this.props.user.location,
      bio: this.props.user.bio,
    
    } })
  }
   handleChanges = e =>{
    console.log(e.target.value)
    console.log(e.target.name)
    this.setState({
        profile:({
          ...this.state.profile,
          [e.target.name]: e.target.value
        })
          
      })
    }

   render(){

  return (
    <>
      <div className="">
        <nav className="w-full bg-green-dark flex justify-end h-12 border  items-center">
          <Link className="no-underline mx-2 text-lg text-white hover:text-green-darker" to={'/newsfeed'}>AdventureFeed</Link>
          <Link className="no-underline mx-2 text-lg text-white hover:text-green-darker" to={'/addTrip'}>Add Trip</Link>
          {/* <span className="text-green "> | </span> */}
          <Link onClick={e => this.props.logout(e)} className="no-underline mx-4 text-lg text-red hover:text-red-darker" to={'/'}>Logout</Link>
        </nav>
        <div className="flex h-pro-header items-center">
          <div className="w-1/2 flex px-4 flex-col justify-center items-center h-pro-image">
            <img className="rounded-lg rounded border border-8 border-white" src={ProImg} alt="" />
          </div>
          <div className="w-1/2 px-4 flex items-center">
            <div className="bg-white w-4/5 rounded  p-4 flex flex-col justify-between leading-normal">
              {this.props.isEditingProfile ? 
              (<i onClick={() => this.props.doneEditing()} className="far fa-check-circle self-end text-xl"></i>)
              :
              (<i onClick={() => this.props.editingPro()} className="self-end far fa-edit text-xl"></i>)
              }
              {this.props.isEditingProfile ? 
              (
                <>
              <div className="flex my-2">
                <h4 className="mr-2">Name: </h4>
                <input onChange={e => this.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="name" placeholder="John Doe" value={this.state.profile.name}/>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2">Email: </h4>
                <input onChange={e => this.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="email" placeholder="JDizzie@hotmail.com" value={this.state.profile.email}/>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2">Location: </h4>
                <input onChange={e => this.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="location" placeholder="Not Here" value={this.state.profile.location}/>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2">Bio: <textarea rows="4" onChange={e => this.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={this.state.profile.bio} name="bio" spellCheck='true' placeholder="John Doe, he's a really cool dancer" /></h4>
              </div>
              </>
              )              
              : 
              (
                <>
              <div className="flex my-2">
                <h4 className="mr-2">Name: </h4>
                <p>{this.state.profile.name}</p>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2">Email: </h4>
                <p>{this.state.profile.email}</p>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2">Location: </h4>
              <p>{this.state.profile.location}</p>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2">Bio: <span className="font-normal">{this.state.profile.bio}</span></h4>
              </div>
              </>
              )}
          </div>
          </div>
        </div>

      </div>
      <div>
        <TripList 
        user={this.props.user}
        userAdventures={this.props.userAdventures}
        doneEditing={this.props.doneEditing}
        isEditingTrip={this.props.isEditingTrip}
        editingTrip={this.props.editingTrip}        
      />
      </div>
    </>
  )
  }
}


export default UserProfile