import React from 'react'
import { TweenMax } from "gsap/TweenMax";


const showDescription = e => {
  e.preventDefault();
  const target = e.target.nextSibling;
  if (target.classList.contains('hidden')) {
    target.classList.toggle("hidden")
    TweenMax.from(target, .75, { yPercent: -20, opacity: 0 })
    TweenMax.to(target, .5, { yPercent: 0, opacity: 1 });
  } else {
    TweenMax.from(target, 1, { yPercent: 0, opacity: 1 })
    TweenMax.to(target, 1, { yPercent: -20, opacity: 0 });
    setTimeout(() => {
      target.classList.toggle("hidden")
    }, 650)

  }

}
class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: {
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
  componentDidMount() {
    this.setState({ trip: this.props.trip })
  }
  handleChanges = e => {
    console.log(e.target.value)
    console.log(e.target.name)
    if (e.target.name === 'adventure_type') {
      this.setState({
        trip: ({
          ...this.state.trip,
          "adventure_type": e.target.value
        })
      })
    }
    else if (e.target.value === "professional") {
      this.setState({
        trip: ({
          ...this.state.trip,
          "professional": true
        })
      })
    }
    else if (e.target.value === "personal") {
      this.setState({
        trip: ({
          ...this.state.trip,
          "professional": false
        })
      })
    }
    else {
      this.setState({
        trip: ({
          ...this.state.trip,
          [e.target.name]: e.target.value
        })

      })
    }
  }

  submitEditedAdventure = e => {
    e.preventDefault()
    this.props.doneEditing()
    this.props.updateAdventure(this.props.trip.id, this.state.trip);
  }
  deleteAdventure = () => {
    this.props.deleteTrip(this.props.trip.id)
  }

  render() {
    return (
      <div className="w-full">
        <button onClick={e => showDescription(e)} className="header-font z-20 relative rounded-sm bg-green-600 text-white collapsible border w-full h-12">{this.props.trip.title}   -  {this.props.trip.date}  -   {this.props.trip.duration}   -  {this.props.trip.location} </button>
        <div className="hidden z-0 content">
          <div className=" border-r border-b border-l border-gray-300 lg:border-l-0 lg:border-tlg:border-gray-300 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            {this.props.mainUserPage ?
              this.props.isEditingTrip ?
                (<i onClick={(e) => this.submitEditedAdventure(e)} className="far mr-2 mb-2 fa-check-circle self-end text-xl hover:text-green-500"></i>)
                :
                (<div className="flex w-full justify-end"><i onClick={() => this.props.editingTrip()} className="mr-2 hover:text-purple-500 self-end far fa-edit text-xl"></i>
                  <i onClick={() => this.deleteAdventure()} className="self-end far fa-trash-alt text-xl hover:text-red-500"></i> </div>
                )
              : null
            }

            {this.props.isEditingTrip ?
              (<>
                <form onSubmit={e => this.submitEditedAdventure(e)}>
                  <div className="flex">
                    <h4 className="mr-2 header-font">Title: </h4>
                    <input onChange={e => this.handleChanges(e)} className="text-font shadow appearance-none border rounded w-full py-2 px-3 text-gray-700git leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="title" value={this.state.trip.title} placeholder="Name Your Trip ex. Two Day Hike" />
                  </div>
                  <div className="flex">
                    <h4 className="mr-2 header-font">Location: </h4>
                    <input onChange={e => this.handleChanges(e)} className="text-font shadow appearance-none border rounded w-full py-2 px-3 text-gray-700git leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="location" value={this.state.trip.location} placeholder="Name Your Trip ex. Two Day Hike" />
                  </div>
                  <div className="flex">
                    <h4 className="mr-2 header-font">Duration: </h4>
                    <input onChange={e => this.handleChanges(e)} className="text-font shadow appearance-none border rounded w-full py-2 px-3 text-gray-700git leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="duration" value={this.state.trip.duration} placeholder="Name Your Trip ex. Two Day Hike" />
                  </div>
                  <div className="flex">
                    <h4 className="mr-2 header-font">Type of Trip: </h4>
                    <div className="mb-1 "><input onChange={e => this.handleChanges(e)} type="radio" name="adventure_type" value="Back Packing" /><label className="ml-2 text-font ">Back Packing</label></div>
                    <div className="mb-1"><input onChange={e => this.handleChanges(e)} type="radio" name="adventure_type" value="Hiking" /><label className="ml-2 text-font">Hiking</label></div>
                    <div className="mb-1"><input onChange={e => this.handleChanges(e)} type="radio" name="adventure_type" value="Cycling" /><label className="ml-2 text-font">Cycling</label></div>
                    <div className="mb-1"><input onChange={e => this.handleChanges(e)} type="radio" name="adventure_type" value="Climbing" /><label className="ml-2 text-font ">Climbing</label></div>
                    <div className="mb-1"><input onChange={e => this.handleChanges(e)} type="radio" name="adventure_type" value="Diving" /><label className="ml-2 text-font">Diving</label></div>
                  </div>
                  <div className="flex">
                    <h4 className="mr-2 text-font header-font">Professional or Pleasure: </h4>
                    <div>
                      <input className="mr-2 text-font" type="radio" name="professional" value="professional" onChange={e => this.handleChanges(e)} /> <label>Professional</label><br />
                      <input className="mr-2 text-font" type="radio" name="professional" value="personal" onChange={e => this.handleChanges(e)} /> <label>Pleasure</label>
                    </div>
                  </div>
                  <div className="flex">
                    <h4 className="mr-2 header-font">Notes: <textarea cols="100" rows="4" onChange={e => this.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700git leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="description" value={this.state.trip.description} spellCheck='true' placeholder="Tell Us About You" /></h4>
                  </div>
                </form>
              </>)
              : (
                <>
                  <div className="flex">
                    <h4 className="mr-2 header-font">Title: </h4>
                    <p className="text-font"> {this.state.trip.title}</p>
                  </div>
                  <div className="flex">
                    <h4 className="mr-2 header-font">Location: </h4>
                    <p className="text-font"> {this.state.trip.location}</p>
                  </div>
                  <div className="flex">
                    <h4 className="mr-2 header-font">Duration: </h4>
                    <p className="text-font"> {this.state.trip.duration}</p>
                  </div>
                  <div className="flex">
                    <h4 className="mr-2 header-font">Type of Trip: </h4>
                    <p className="text-font"> {this.state.trip.adventure_type}</p>
                  </div>
                  <div className="flex">
                    <h4 className="mr-2 header-font">Professional or Pleasure: </h4>
                    <p className="text-font"> {this.state.trip.professional ? "Professional" : "Pleasure"}</p>
                  </div>
                  <div className="flex">
                    <h4 className="mr-2 header-font">Notes: <span className="text-font font-normal">{this.state.trip.description}</span></h4>
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