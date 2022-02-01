import React from 'react'
import { Link } from 'react-router-dom'

const Premium = () => {
  
        const newStyle = {
            "display": "flex",
            "margin": "auto",
            "margin-top": "3vh",
            "margin-bottom": "3vh",
            "text-align": "center"
            
        }

        const linkStyle = { 
            textDecoration: "none", 
            flex: "1", 
            color: "black"
         }

        const checkOut = () => {
            window.location.href = "https://wa.link/bw5km3";
        }
    
        return (
            <section className="banners"  id="basic-package">
            <div className="basicList">
               <h3>Basic Package</h3>
               <ul className="listitem">
                   <li> Basic Packages</li>
                   <li> + </li>
                   <li> More Tees & Sneaker, etc.</li>

                   <Link style={linkStyle} onClick={checkOut}>
                  <li><button className="login-btn-2" style={newStyle} >
                        Check Out Premium Package
                    </button> </li>
            </Link>
                   
                   <Link style={linkStyle} to="/packages"> 
                <li><button className="login-btn-2" style={newStyle}>
                    Previous Page
                </button></li>
            </Link> 

           
    
                   
    
               </ul>
            </div>
    
            </section>
        )
    
}

export default Premium
