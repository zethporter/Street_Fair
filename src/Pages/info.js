import React from 'react';
import './stylesheets/main.css'
import Footer from '../Components/footer/footer';
import Header from '../Components/infoHead/infoHead';
import Body from '../Components/infoBody/infoBody';

const Info = () => {
    return(
        <div className="info">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Info