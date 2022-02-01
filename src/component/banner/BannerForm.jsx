import React from 'react'
import { Link } from 'react-router-dom'
import './BannerForm.scss'


const BannerForm = ({title}) => {

    const linkStyle = { 
        textDecoration: "none", 
        flex: "1", 
        color: "black"
     }

     
const btnStyle = {
        background: "black",
        color: "#fff",
        padding: "auto",
        border: "2px solid #fff",
        width: "20vh",
        height: "5vh",
       borderRadius: "10px 7px"

    }
    return (
        <form>
            <input className="form-input" placeholder={title} readOnly/> 
            
            <Link style={linkStyle} to="/packages"> 
            <button style = {btnStyle} >Our Packages</button>
            </Link> 
            
        </form>
    )

   
}

export default BannerForm
