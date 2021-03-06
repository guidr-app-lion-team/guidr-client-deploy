import React from 'react'
import { Link } from 'react-router-dom'
import ProImg1 from '../../imgs/proImg-1.jpg'
import ProImg2 from '../../imgs/proImg-2.jpg'
import ProImg3 from '../../imgs/proImg-3.jpg'
import ProImg4 from '../../imgs/proImg-4.jpg'
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
        },
        mainUserPage: false,
        pageUser: '',
        pageUserAdventures: [],
        id: this.props.match.params.id,
        
     }
   }
  
    getUserFromURL = () =>{
        const user = this.props.users.find(user => `${user.id}` === this.state.id)
        this.setState({pageUser: user})
        user.id === this.props.user.id ? this.setState({mainUserPage: true}) : this.setState({mainUserPage: false})
        this.props.getUserAdventure(user.id)
        console.log('USERADVENTURES UP', this.props.userAdventures)
    }


   componentDidMount(){
    this.getUserFromURL();
    this.randomProfileImg()
    // console.log('PAGE USER ID', this.state.pageUser.id)
    // this.props.getUserAdventure(this.state.pageUser.id)
  }
  randomProfileImg=() =>{
  const myPix = [ProImg1, ProImg2, ProImg3, ProImg4]
   const val =  Math.floor(Math.random() * 4) + 0 
   console.log(myPix[val])
   localStorage.setItem('proImg', JSON.stringify(myPix[val]))
  }
  handleChanges = e =>{
    console.log(e.target.value)
    console.log(e.target.name)
      this.setState({
        pageUser:({
          ...this.state.pageUser,
          [e.target.name]: e.target.value
        })      
        
    })
  }
  toggleMain=()=>{
    this.state.mainUserPage = true
  }
  submitEditedProfile = e =>{
    e.preventDefault()
    this.props.doneEditing()
    this.props.updateUser(this.props.user.id, this.state.pageUser);
    this.props.getUserAdventure(this.state.pageUser.id)
    // this.props.getUsers()
    // this.getUserFromURL();
  }
  componentDidUpdate (prevProps) {
    if (prevProps.location.key !== this.props.location.key) {
        this.setState({
            pageUser:{
              ...this.props.user
            }
        })
        this.props.getUserAdventure(this.props.user.id)
    }
    
}

  render(){
  return (
    <>
      <div className="">
        <nav className="w-full flex justify-end h-16 bg-green-800 items-center header-font">
          <Link className="no-underline mx-2 text-lg text-white hover:underline hover:text-gray-400" to={'/newsfeed'}>AdventureFeed</Link>
          {this.state.mainUserPage ? <Link className="no-underline mx-2 text-lg text-white hover:underline hover:text-gray-400" to={'/addTrip'}>Add Trip</Link> 
          : <Link className="no-underline mx-2 text-lg text-white hover:underline hover:text-gray-400" onClick={()=>this.toggleMain()} to={`/user/${this.props.user.id}`}>Profile</Link>}
          
          {/* <span className="text-green "> | </span> */}
          <Link onClick={e => this.props.logout(e)}className="no-underline mx-4 text-lg text-red hover:text-red-dark hover:underline"  to={'/'}>Logout</Link>
        </nav>
        <div className="flex h-pro-header items-center">
          <div className="w-1/2 flex px-4 flex-col justify-center items-center h-pro-image">
            <img className="rounded-lg rounded border border-8 border-white" src={JSON.parse(localStorage.getItem('proImg'))} alt="" />
          </div>
          <div className="w-1/2 px-4 flex items-center">
            <div className="bg-white w-4/5 rounded  p-4 flex flex-col justify-between leading-normal">
            {this.state.mainUserPage ? 
              this.props.isEditingProfile ? 
              (<i onClick={e => this.submitEditedProfile(e)} className="far fa-check-circle mb-2 self-end text-xl hover:text-green-500"></i>)
              :
              (<i onClick={() => this.props.editingPro()} className="self-end far fa-edit text-xl hover:text-purple-500"></i>)
              : null 
            }
             {this.state.mainUserPage ? 
              this.props.isEditingProfile ? 
              (
                <>
              <div className="flex my-2">
                <h4 className="mr-2">Name: </h4>
                <input onChange={e => this.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="name" placeholder="John Doe" value={this.state.pageUser.name}/>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2">Email: </h4>
                <input onChange={e => this.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="email" placeholder="JDizzie@hotmail.com" value={this.state.pageUser.email}/>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2">Location: </h4>
                <input onChange={e => this.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="location" placeholder="Not Here" value={this.state.pageUser.location}/>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2">Bio: <textarea rows="4" cols="100" onChange={e => this.handleChanges(e)} className="w-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={this.state.pageUser.bio} name="bio" spellCheck='true' placeholder="John Doe, he's a really cool dancer" /></h4>
              </div>
              </>
              )              
              : 
              (
                <>
              <div className="flex my-2">
                <h4 className="mr-2 header-font">Name: </h4>
                <p className="text-font">{this.state.pageUser.name}</p>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2 header-font">Email: </h4>
                <p className="text-font">{this.state.pageUser.email}</p>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2 header-font">Location: </h4>
              <p className="text-font">{this.state.pageUser.location}</p>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2 header-font">Bio: <span className="font-normal text-font">{this.state.pageUser.bio}</span></h4>
              </div>
              </>
              )
              :
              (
                <>
              <div className="flex my-2">
                <h4 className="mr-2">Name: </h4>
                <p>{this.state.pageUser.name}</p>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2">Email: </h4>
                <p>{this.state.pageUser.email}</p>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2">Location: </h4>
              <p>{this.state.pageUser.location}</p>
              </div>
              <div className="flex my-2">
                <h4 className="mr-2">Bio: <span className="font-normal">{this.state.pageUser.bio}</span></h4>
              </div>
              </>
              )


            }
             
             
          </div>
          </div>
        </div>

      </div>
      <div>
        <TripList
        pageUser={this.state.pageUser}
        mainUserPage={this.state.mainUserPage}
        updateAdventure={this.props.updateAdventure}
        user={this.props.user}
        userAdventures={this.props.userAdventures}
        doneEditing={this.props.doneEditing}
        isEditingTrip={this.props.isEditingTrip}
        editingTrip={this.props.editingTrip}  
        deleteTrip = {this.props.deleteTrip}
      />
      </div>
    </>
  )
  }
}


export default UserProfile