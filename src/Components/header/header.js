import React from 'react';
import './header.css'; 
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa"
import { Link } from "react-router-dom";


const header = () => {
    const fbookClick = () =>{
        window.open("#");
    };
    const instaClick = () =>{
        window.open("#");
    };
    const mapClick = () =>{
        window.open("https://goo.gl/maps/FSqTYpgAYW1RZ65x5");
    };

    return(
        <div className="header">
            <div>
            <Link className='nav' to={'/'}>
                 Home 
            </Link>

            <Link className='nav' to={'/info'}>
                Information
            </Link>
            
            <Link className='nav' to={'/OUR'}>
                O.U.R.
            </Link>
            </div>
            
            {/* <FaFacebookF onClick={fbookClick} className="icons"/>
            <FaInstagram onClick={instaClick} className="icons"/> */}
            {/* <FaMapMarkerAlt onClick={mapClick} className="icons"/> */}
            
    </div>
    )
}

export default header

//FaFacebookSquare
//FaInstagram

