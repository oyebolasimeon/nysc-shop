import React from 'react'
import './Banner.scss'
import BannerForm from './BannerForm'

const banner = () => {
    
    const bannerText = "Shop for your NYSC Kits"
    const bannerContent = "How prepared are you for NYSC.. We offer nice NYSC kits packages at affordable price and we deliver Nationwide"
    return (
        <section className="banner" id="home">

        <div className="opac-banner">

            <div className="banner-content">
                <h2>{bannerText}</h2>
                <p>{bannerContent}</p>

                <BannerForm title="We Deliver Nationwide and Provide Quality materials at Affordable Rate" />
            </div>
        </div>
        </section>
    )
}

export default banner
