import React from 'react'
import { Link } from 'react-router-dom'
import TripCard from './TripCard'
import Logo from '../../imgs/adventure-title.png'

export default function NewsFeed(props) {
  console.log(props.selected)
  return (
    <div>
      <header className="w-full">
        {/* NAVIGATION */}
        <nav className="w-full flex justify-end h-12 border border-blue items-center">
          <Link className="no-underline mx-2 text-lg text-green-dark hover:text-green-darker" to={`/user/${props.user.id}`}>Profile</Link>
          <Link onClick={() => props.logout()}className="no-underline mx-4 text-lg text-red hover:text-red-darker" to={'/'}>Logout</Link>
        </nav>
        {/* TITLE */}
        <div className="flex items-center justify-center feed-bg h-half">
          <img src={Logo} alt="" />
        </div>
      </header>
      {/* FILTER BAR */}
      <div className="filter w-full flex justify-center h-12 border border-blue items-center">
        <h4 className="mr-4">Filter Trip Type:</h4>
        <div onClick={e=>props.changeSelected(e)} className={props.selected === 'All' ? 'tabs active mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker ' : " mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker hover:cursor-pointer"}>All</div>
        <div onClick={e=>props.changeSelected(e)} className={props.selected === 'Hiking' ? 'active active mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker tabs' : "tabs mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker tabs"}>Hiking</div>
        <div onClick={e=>props.changeSelected(e)} className={props.selected === 'Back Packing' ? 'active active mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker tabs' : " mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker tabs"}>Back Packing</div>
        <div onClick={e=>props.changeSelected(e)} className={props.selected === 'Rock Climbing' ? 'active active mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker tabs' : " mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker tabs"}>Rock Climbing</div>
        <div onClick={e=>props.changeSelected(e)}  className={props.selected === 'Cycling' ? 'active active mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker tabs' : " mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker tabs"}>Cycling</div>
        <div onClick={e=>props.changeSelected(e)} className={props.selected === 'Scuba Diving' ? 'active active mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker tabs' : " mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker tabs"}>Scuba Diving</div>
      </div>
      {/* CARDS */}
      <section className="flex flex-wrap justify-around mt-8">
       {props.adventures.map(item => {return <TripCard key={item.id} user={props.users.find(user=> user.id === item.user_id )} adventure={item} />})}
        
      </section>
    </div>
  )
}
