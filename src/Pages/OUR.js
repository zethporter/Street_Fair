import React from 'react';
import './stylesheets/main.css'
import Header from '../Components/OURHeader/OURHeader';
import Footer from '../Components/footer/footer';
import Body from '../Components/OURBody/OURBody';
import Dono from '../Components/donoBtn/donoBtn';
import SiteHeader from '../Components/header/header';


const OUR = () => {
    return(
        <div className="home">
            <SiteHeader />
            <Header />
            <Body />
            <Dono />
            <Footer />
        </div>
    )
}

export default OUR