import React from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom'
import MenuBtn from '../menu/MenuBtn'

const Nav = () => {

    let newStyle = {
        display: "none"
    };
    if (window.innerWidth > 800) {
        newStyle = {
            
        }
    } else {
        newStyle = {
            display: "none"
        }
    }

    const linkStyle = { 
        textDecoration: "none", 
        flex: "1", 
        color: "black"
     }
    
    return (
        <>
        <div className="nav" style={newStyle}>
        <ul>
           <Link style={linkStyle} to="/home"> <li>Home</li> </Link> 
           <Link style={linkStyle} to="/packages"> <li>Packages</li> </Link> 
           <Link style={linkStyle} to="/purchase"> <li>Purchase</li> </Link> 
           <Link style={linkStyle} to="/contact"> <li>Contact</li> </Link>
            
        </ul>
        
        </div>

        <MenuBtn />

</> 
    )
}

export default Nav
