import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const footer = () => {
  const fbookClick = () => {
    window.open("#");
  };
  const instaClick = () => {
    window.open("#");
  };
  const mapClick = () => {
    window.open("https://goo.gl/maps/FSqTYpgAYW1RZ65x5");
  };
  const fbookClick = () => {
    window.open("#");
  };
  const instaClick = () => {
    window.open("#");
  };
  const mapClick = () => {
    window.open("https://goo.gl/maps/FSqTYpgAYW1RZ65x5");
  };

  return (
    <div className="footer">
      <div className="navDiv BruceClass">
        <Link className="nav" to={"/info"}>
          More info
        </Link>
        |
        <Link className="nav" to={"/OUR"}>
          Operation Undrground Railroad
        </Link>
        |
        <Link className="nav" to={"/"}>
          Home
        </Link>
        <Link className="nav" to={"/Bruce"}>
          Bruce
        </Link>
      </div>

      {/* <FaFacebookF onClick={fbookClick} className="icons"/>
            <FaInstagram onClick={instaClick} className="icons"/> */}
      {/* <FaMapMarkerAlt onClick={mapClick} className="icons"/> */}
    </div>
  );
};

export default footer;

//FaFacebookSquare
//FaInstagram
