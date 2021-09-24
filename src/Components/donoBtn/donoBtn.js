import React from 'react';
import './donoBtn.css';

const donoBtn = () => {

    const donoClick = () => {
        window.open('https://my.ourrescue.org/general-donate')
    };

    return(
      <div className="btnHolder">
          <p className='donoText'>
            Help us meet our goal of raising $10,000
          </p>
          <p className='donoSubText'>
            Present a screenshot of donation at the ticket booth for admission
          </p>
          <div onClick={donoClick} className='btn' >
            <img src='/images/Donate.png' className='donoImg' onClick={ donoClick }/>
          </div>
      </div>
    );
}

export default donoBtn