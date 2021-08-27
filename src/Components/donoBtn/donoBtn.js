import React from 'react';
import './donoBtn.css';

const donoBtn = () => {

    const donoClick = () =>{
        window.open('https://account.venmo.com/u/ZethPorter')
    }

    return(
      <div className="btnHolder">
          <p className='donoText'>Help us meet our goal of raising $10,000</p>
          <button className="btn" onClick={donoClick}>
              Donate to Operation Underground Railroad 
          </button>
      </div>
    )
}

export default donoBtn