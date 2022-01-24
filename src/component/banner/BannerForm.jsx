import React from 'react'
import './BannerForm.scss'
const BannerForm = ({title}) => {
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
            <input className="form-input" placeholder={title} /> <button style = {btnStyle} >Send</button>
        </form>
    )

   
}

export default BannerForm
