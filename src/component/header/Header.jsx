import React from 'react'
import './Header.scss'
import Nav from './nav/Nav'

const header = () => {
    return (
        <header>
            <div className="logo">
                <span className="logo-text-1">SHOP </span><span className="logo-text-2">NYSC</span>
            </div>

            <Nav />
        </header>
    )
}

export default header
