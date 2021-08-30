import React from 'react';
import './stylesheets/main.css'
import Footer from '../Components/footer/footer';
import Header from '../Components/infoHead/infoHead';
import Body from '../Components/infoBody/infoBody';
import SiteHeader from '../Components/header/header';

const Info = () => {
    return(
        <div className="info">
            <SiteHeader />
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Info