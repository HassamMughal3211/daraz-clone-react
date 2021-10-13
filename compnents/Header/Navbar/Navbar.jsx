import React,{useState} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import DropDown from './../../DropDown/DropDown';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const userDetails = useSelector((state) => state)
    
    return (
        <div className="Navbar">
            <div className="buttonWrapper">
            <button className="button">save more on app</button>
            <button className="button">Affilation</button>
            <button className="button">sell on daraz</button>
            <button className="button">customer care</button>
            <button className="button"><Link to="/">home</Link></button>
            <button className="button">
                {userDetails.auth ? <span></span> : <Link to="/signup">Sign Up</Link>}
                </button>
            <button className="button">
                 {userDetails.auth ? <span></span> : <Link to="/signin">Sign In</Link>}
                 </button>
            <div className="username">
                {userDetails.auth ? <span>{ <DropDown userDetails={userDetails}/>}</span> : ""}
            </div>
            </div>
            
        </div>
    )
}

export default Navbar ;
