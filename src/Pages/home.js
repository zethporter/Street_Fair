import React from 'react';
import './stylesheets/main.css'
import LandingBody from '../Components/landingBody/landingBody';
import Footer from '../Components/footer/footer';
import Header from '../Components/header/header';


const Home = () => {
    return(
        <div className="home">
            <Header />
            <LandingBody />
            <Footer />
        </div>
    )
}

export default Home