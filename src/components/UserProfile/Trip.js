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

export default function Trip(props) {
  console.log(props)
  return (
    <div className="w-full ">
      <button onClick={e => showDescription(e)} className="z-20 relative rounded-sm bg-green-dark text-white collapsible border w-full h-12">{props.trip.title}   -  {props.trip.date}  -   {props.trip.duration}   -  {props.trip.location} </button>
      <div className="hidden z-0 content">
        <div className=" border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        {props.isEditingTrip ? 
              (<i onClick={() => props.doneEditing()} className="far fa-check-circle self-end text-xl"></i>)
              :
              (<i onClick={() => props.editingTrip()} className="self-end far fa-edit text-xl"></i>)
        }
        {props.isEditingTrip ? 
        (<>
          <div className="flex">
            <h4 className="mr-2">Title: </h4>
            <input onChange={e => props.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="title" placeholder="Name Your Trip ex. Two Day Hike" />
          </div>
          <div className="flex">
            <h4 className="mr-2">Location: </h4>
            <input onChange={e => props.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="title" placeholder="Name Your Trip ex. Two Day Hike" />
          </div>
          <div className="flex">
            <h4 className="mr-2">Duration: </h4>
            <input onChange={e => props.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="title" placeholder="Name Your Trip ex. Two Day Hike" />
          </div>
          <div className="flex">
            <h4 className="mr-2">Type of Trip: </h4>
            <input onChange={e => props.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="title" placeholder="Name Your Trip ex. Two Day Hike" />
          </div>
          <div className="flex">
            <h4 className="mr-2">Professional or Pleasure: </h4>
            <input onChange={e => props.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="title" placeholder="Name Your Trip ex. Two Day Hike" />
          </div> 
          <div className="flex">
            <h4 className="mr-2">Notes: <textarea rows="4" onChange={e => props.handleChanges(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="description" spellCheck='true' placeholder="Tell Us About You" /></h4>
          </div>
          </>)
          :(
        <>
          <div className="flex">
            <h4 className="mr-2">Title: </h4>
            <p> {props.trip.title}</p>
          </div>
          <div className="flex">
            <h4 className="mr-2">Location: </h4>
            <p> {props.trip.location}</p>
          </div>
          <div className="flex">
            <h4 className="mr-2">Duration: </h4>
            <p> {props.trip.duration}</p>
          </div>
          <div className="flex">
            <h4 className="mr-2">Type of Trip: </h4>
            <p> {props.trip.adventure_type}</p>
          </div>
          <div className="flex">
            <h4 className="mr-2">Professional or Pleasure: </h4>
            <p> {props.trip.professional ? "Professional" : "Pleasure"}</p>
          </div> 
          <div className="flex">
            <h4 className="mr-2">Notes: <span className="font-normal">{props.trip.description}</span></h4>
          </div>
          </>)
        }
        </div>
      </div>
    </div>
  )
}
