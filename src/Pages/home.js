import React from 'react';
import './stylesheets/main.css'
import LandingBody from '../Components/landingBody/landingBody';
import Footer from '../Components/footer/footer';


const Home = () => {
    return(
        <div className="home">
            <LandingBody />
            <Footer />
        </div>
    )
}

export default Home