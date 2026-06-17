import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";


function Navbar() {

  const [open, setOpen] = useState(false);


  return (

    <nav className="navbar">


      <div className="logo">

        <img src="/logo.png" alt="logo"/>

      </div>



      <ul className={open ? "nav-links active" : "nav-links"}>


        <li>
          <Link to="/" onClick={()=>setOpen(false)}>
            Home
          </Link>
        </li>


        <li>
          <Link to="/wish" onClick={()=>setOpen(false)}>
            Guest Wishes
          </Link>
        </li>


        <li>
          <Link to="/details" onClick={()=>setOpen(false)}>
            Event Details
          </Link>
        </li>




        <li>
          <Link to="/rsvp" onClick={()=>setOpen(false)}>
            RSVP
          </Link>
        </li>


      </ul>



      <div 
      className="menu-icon"
      onClick={()=>setOpen(!open)}
      >

      {
        open ? <FaTimes/> : <FaBars/>
      }

      </div>


    </nav>

  )
}


export default Navbar;