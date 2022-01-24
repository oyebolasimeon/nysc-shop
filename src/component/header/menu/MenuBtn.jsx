import React from 'react'
import './MenuBtn.scss'
import '../Btn/Btn.scss'
// import react from 'react-dom'


const MenuBtn = () => {

    // const btnVisibility = document.getElementsByClassName("reg");
    let newStyle = {
        display: "none"
    };
    if (window.innerWidth < 800) {
        newStyle = {
            display: "flex"
        }
    } else {
        newStyle = {
            display: "none"
        }
    }

    const btnText = "Menu";
    return (
        <div className="reg">

        <button className="login-btn-2" style={newStyle}>{btnText}</button>

       </div>
         
    )
}

export default MenuBtn
