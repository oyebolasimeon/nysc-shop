import React from 'react'
import { Link } from 'react-router-dom'
import './Package.scss'

const Package = () => {

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

         const alertBtn = () => {
             alert("Service Unavailable at the Moment");
         }

    return (
        <section className="banners" id="package">

            <div className="card1">

                <div className="imgBox1"></div>
                <h3>Basic Package</h3>  

                <Link style={linkStyle} to="/basic-packages"> 
                <button className="login-btn-2" style={newStyle}>
                    Check Out
                </button> 
            </Link> 

            </div>
            
            <div className="card1">
                        
            <div className="imgBox2"></div>
            <h3>Nationide Delivery</h3> 

            <Link style={linkStyle} onClick={alertBtn}> 
                <button className="login-btn-2" style={newStyle}>
                    Learn More...
                </button> 
            </Link>   

            </div>

            <div className="card1">
                        
            <div className="imgBox"></div> 

            <h3>Premium Package</h3>

            <Link style={linkStyle} to="/premium-packages"> 
                <button className="login-btn-2" style={newStyle}>
                    Check Out
                </button> 
            </Link> 

            </div>

        </section>
    )
}

export default Package
