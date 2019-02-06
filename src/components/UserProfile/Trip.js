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




export default function Trip() {
  return (
    <div className="w-full ">
      <button onClick={e => showDescription(e)} className="z-20 relative rounded-sm bg-green-dark text-white collapsible border w-full h-12">Title   &loz;  Date   &loz;   Duration   &loz;   Location</button>
      <div className="hidden z-0 content">
        <div class=" border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="flex">
            <h4 className="mr-2">Title: </h4>
            <p> Backyard Hike</p>
          </div>
          <div className="flex">
            <h4 className="mr-2">Location: </h4>
            <p> Appalachian Trail</p>
          </div>
          <div className="flex">
            <h4 className="mr-2">Duration: </h4>
            <p> 2 Nights</p>
          </div>
          <div className="flex">
            <h4 className="mr-2">Type of Trip: </h4>
            <p> Back Packing</p>
          </div>
          <div className="flex">
            <h4 className="mr-2">Professional or Pleasure: </h4>
            <p> Pleasure</p>
          </div>

          <div className="flex">
            <h4 className="mr-2">Notes: <span className="font-normal">We didn't go far to experience the great outdoors. Walked 5 miles and camped three nights. Enjoyed meals of hotdogs and marshmellows. Encountered a coyote... how neat! </span></h4>
          </div>
        </div>
      </div>
    </div>
  )
}
