import React from 'react'
import './BasicPackage.scss'
import { Link } from 'react-router-dom'

const BasicPackage = () => {

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

    const pay = () =>{
        window.location.href = "https://paystack.com/pay/nyscshop-basic";
    }
    return (
        <section className="banners"  id="basic-package">
        <div className="basicList">
           <h3>Basic Package</h3>
           <ul className="listitem">
               <li> 3 White Plain Tees</li>
               <li> 1 Rubber Slippers</li>
               <li> 3 NYSC Socks</li>
               <li> 1 Water Bottle</li>
               <li> 1 Waist Bag</li>
               <li> 1 Clear Bag</li>
               <li> 1 Tennis</li>

               <ul>

                <Link style={linkStyle} to="/packages"> 
                <li><button className="login-btn-2" style={newStyle}>
                    Previous Page
                </button></li>
            </Link> 

                
                <Link style={linkStyle} onClick={pay}> 
                <li><button className="login-btn-2" style={newStyle}>
                    Check Out @ N10000.00K
                </button> </li>
            </Link> 

                

                
           </ul>
               
           </ul>

           

        </div>

        </section>
    )
}

export default BasicPackage
