import React from 'react'
import {TweenMax} from "gsap/TweenMax";


const showDescription = e => {
  e.preventDefault();
  const target = e.target.nextSibling;
  if(target.classList.contains('hidden')){
    target.classList.toggle("hidden")
    TweenMax.from(target, .75, {yPercent: -20, opacity: 0})
    TweenMax.to(target, .5, { yPercent: 0,  opacity: 1});
  }else{
    TweenMax.from(target, 1, {yPercent: 0, opacity: 1})
    TweenMax.to(target, 1, { yPercent: -20,  opacity: 0});
    setTimeout( () =>{
      target.classList.toggle("hidden")
    }, 650)
   
  }
  
}
class Trip extends React.Component {
  constructor(props){
    super(props);
    this.state={
       trip:{
        "adventure_type": "",
        "title": "",
        "location": "",
        "duration": "",
        "description": " ",
        "professional": false,
        "date": null
      }
    }
  }
  componentDidMount(){
    this.setState({trip: this.props.trip})
  }
  handleChanges = e =>{
    console.log(e.target.value)
    console.log(e.target.name)
    if(e.target.name === 'adventure_type'){
      this.setState({
        trip:({
          ...this.state.trip,
            "adventure_type": e.target.value
         })
      })
    }
    else if(e.target.value === "professional"){
        this.setState({
          trip:({
            ...this.state.trip,
              "professional": true
           })
        })
      } 
    else if(e.target.value === "personal"){
        this.setState({
          trip:({
            ...this.state.trip,
              "professional": false
           })
        })
      }
     else{ 
      this.setState({
        trip:({
          ...this.state.trip,
          [e.target.name]: e.target.value
        })
          
      })
    }
  }

  submitEditedAdventure = e =>{
    e.preventDefault()
    this.props.submitEditedAdventure(this.state.trip);
  }

  render(){
  return (
    <div className="w-full ">
      <button onClick={e => showDescription(e)} className="z-20 relative rounded-sm bg-green-dark text-white collapsible border w-full h-12">{this.props.trip.title}   -  {this.props.trip.date}  -   {this.props.trip.duration}   -  {this.props.trip.location} </button>
      <div className="hidden z-0 content">
        <div className=" border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        {this.props.isEditingTrip ? 
              (<i onClick={() => this.props.doneEditing()} className="far fa-check-circle self-end text-xl"></i>)
              :
              (<i onClick={() => this.props.editingTrip()} className="self-end far fa-edit text-xl"></i>)
        }
        {this.props.isEditingTrip ? 
        (<>
          <div className="flex">
            <h4 className="mr-2">Title: </h4>
            <input onChange={e => this.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="title" value={this.state.trip.title} placeholder="Name Your Trip ex. Two Day Hike" />
          </div>
          <div className="flex">
            <h4 className="mr-2">Location: </h4>
            <input onChange={e => this.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="location" value={this.state.trip.location} placeholder="Name Your Trip ex. Two Day Hike" />
          </div>
          <div className="flex">
            <h4 className="mr-2">Duration: </h4>
            <input onChange={e => this.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="duration" value={this.state.trip.duration} placeholder="Name Your Trip ex. Two Day Hike" />
          </div>
          <div className="flex">
            <h4 className="mr-2">Type of Trip: </h4>
            <div  className="mb-1"><input onChange={e => this.handleChanges(e)} type="radio" name="adventure_type" value="Back Packing"/><label className="ml-2 ">Back Packing</label></div>
            <div className="mb-1"><input onChange={e => this.handleChanges(e)} type="radio" name="adventure_type" value="Hiking" /><label className="ml-2">Hiking</label></div>
            <div  className="mb-1"><input onChange={e => this.handleChanges(e)} type="radio" name="adventure_type" value="Cycling"/><label className="ml-2">Cycling</label></div>
            <div  className="mb-1"><input onChange={e => this.handleChanges(e)} type="radio" name="adventure_type" value="Climbing"/><label className="ml-2">Climbing</label></div>
            <div  className="mb-1"><input onChange={e => this.handleChanges(e)} type="radio" name="adventure_type" value="Diving"/><label className="ml-2">Diving</label></div>
          </div>
          <div className="flex">
            <h4 className="mr-2">Professional or Pleasure: </h4>
            <div>
            <input className="mr-2" type="radio" name="professional" value="professional"  onChange={e => this.handleChanges(e)}/> <label>Professional</label><br />
            <input className="mr-2" type="radio" name="professional" value="personal"  onChange={e => this.handleChanges(e)}/> <label>Pleasure</label>
          </div>
          </div> 
          <div className="flex">
            <h4 className="mr-2">Notes: <textarea rows="4" onChange={e => this.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="description" value={this.state.trip.description} spellCheck='true' placeholder="Tell Us About You" /></h4>
          </div>
          </>)
          :(
        <>
          <div className="flex">
            <h4 className="mr-2">Title: </h4>
            <p> {this.state.trip.title}</p>
          </div>
          <div className="flex">
            <h4 className="mr-2">Location: </h4>
            <p> {this.state.trip.location}</p>
          </div>
          <div className="flex">
            <h4 className="mr-2">Duration: </h4>
            <p> {this.state.trip.duration}</p>
          </div>
          <div className="flex">
            <h4 className="mr-2">Type of Trip: </h4>
            <p> {this.state.trip.adventure_type}</p>
          </div>
          <div className="flex">
            <h4 className="mr-2">Professional or Pleasure: </h4>
            <p> {this.state.trip.professional ? "Professional" : "Pleasure"}</p>
          </div> 
          <div className="flex">
            <h4 className="mr-2">Notes: <span className="font-normal">{this.state.trip.description}</span></h4>
          </div>
          </>)
        }
        </div>
      </div>
    </div>
  )
  }
}



export default Trip