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
        <nav className="w-full flex justify-end h-16 bg-green-darker items-center header-font">
          <Link className="no-underline mx-2 text-lg text-white hover:underline hover:text-grey-light" to={`/user/${props.user.id}`}>Profile</Link>
          <Link onClick={() => props.logout()} className="no-underline mx-4 text-lg text-red hover:text-red-dark hover:underline"  to={'/'}>Logout</Link>
        </nav>
        {/* TITLE */}
        <div className="flex items-center justify-center feed-bg h-half">
          <img src={Logo} alt="" />
        </div>
      </header>
      {/* FILTER BAR */}
      <div className="filter w-full flex justify-center h-16 border border-green-darker items-center">
        <h4 className="mr-4 text-xl header-font">Filter Trip Type:</h4>
        <div onClick={e=>props.changeSelected(e)} className={props.selected === 'All' ? 'tabs active mx-2 bg-green-dark text-white px-3 py-2 rounded tracking-wide hover:bg-green-darker text-font' : "text-font mx-2 bg-green-dark text-white px-3 py-2 rounded tracking-wide hover:bg-green-darker hover:cursor-pointer"}>All</div>
        <div onClick={e=>props.changeSelected(e)} className={props.selected === 'Hiking' ? 'active active mx-2 bg-green text-white px-3 py-2 rounded tracking-wide hover:bg-green-darker tabs text-font text-font' : "tabs text-font mx-2 bg-green text-white px-3 py-2 rounded tracking-wide hover:bg-green-darker tabs text-font"}>Hiking</div>
        <div onClick={e=>props.changeSelected(e)} className={props.selected === 'Back Packing' ? 'active active mx-2 bg-orange text-white px-3 py-2 rounded tracking-wide hover:bg-orange-dark tabs text-font' : " mx-2 bg-orange text-white px-3 py-2 rounded tracking-wide hover:bg-orange-dark tabs text-font"}>Back Packing</div>
        <div onClick={e=>props.changeSelected(e)} className={props.selected === 'Rock Climbing' ? 'active active mx-2 bg-grey-dark text-white px-3 py-2 rounded tracking-wide hover:bg-grey-darker tabs text-font' : " mx-2 bg-grey-dark text-white px-3 py-2 rounded tracking-wide hover:bg-grey-darker tabs text-font"}>Rock Climbing</div>
        <div onClick={e=>props.changeSelected(e)}  className={props.selected === 'Cycling' ? 'active active mx-2 bg-red text-white px-3 py-2 rounded tracking-wide hover:bg-red-dark tabs text-font' : " mx-2 bg-red text-white px-3 py-2 rounded tracking-wide hover:bg-red-dark tabs text-font"}>Cycling</div>
        <div onClick={e=>props.changeSelected(e)} className={props.selected === 'Scuba Diving' ? 'active active mx-2 bg-blue text-white px-3 py-2 rounded tracking-wide hover:bg-blue-dark tabs text-font' : " mx-2 bg-blue text-white px-3 py-2 rounded tracking-wide hover:bg-blue-dark tabs text-font"}>Scuba Diving</div>
      </div>
      {/* CARDS */}
      <section className="flex flex-wrap justify-around mt-8">
       {props.adventures.map(item => {return <TripCard key={item.id} user={props.users.find(user=> user.id === item.user_id )} adventure={item} />})}
        
      </section>
    </div>
  )
}
