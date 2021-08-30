import React from 'react';
import './landingBody.css';
import Footer from '../footer/footer';

const header = () => {
    return(
        <div className="App">
      <header className="App-header">
        <img src='/images/logo.png' className="App-logo" alt="logo" />
        <p>Please join us for a community street fair.</p>
        <p>October 9th from 4-7PM</p>
        <p>2150 North Street</p>
        <p>in</p>
        <p>Centerville</p>
        <br></br>
        <p>All Proceeds will benefit operation underground Railroad</p>
        <br></br>
        <p>Admission: $10.00 per person</p> 
        <p className="landingSubText">
          If you would like to purchase admission in advance, please follow the link on the Operation Underground Railroad
        </p>
      </header>
    </div>
    )
}

export default header