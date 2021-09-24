import React from 'react';
import './infoBody.css';
// import { Alert } from 'react-alert';

const infoBody = () => {

  const copyEmail = () =>{
    navigator.clipboard.writeText('swhitkimball@gmail.com');
    alert("'swhitkimball@gmail.com' was copied to your clipboard");
  }

    return(
        
      <div className="body_div">
        <p className='activiesTitle'>
          Street Fair items to be enjoyed include:
        </p>
        <p className='festivities'>
          Bake Sale, 
          Carnival Games, 
          Hay Ride,
          Pumpkin Patch,
          Raffle, 
          Spook Alley
        </p>
        {/* <p className='asterix'>* Please contact Whitney Page <a onClick={ copyEmail } className='email'>swhitkimball@gmail.com</a> by October 1st to reserve your spot.</p> */}
        <p className='asterix'>
          All activities are included in the price of admission except any items you wish to purchase at the bake sale, pumpkin patch, or raffle tickets. 
        </p>
      </div>
    
    )
}

export default infoBody


// const Mailto = ({ email, subject = '', body = '', children }) => {
//   let params = subject || body ? '?' : '';
//   if (subject) params += `subject=${encodeURIComponent(subject)}`;
//   if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

//   return <a href={`mailto:${email}${params}`}>{children}</a>;
// };
// ReactDOM.render(
//   <Mailto email="foo@bar.baz" subject="Hello & Welcome" body="Hello world!">
//     Mail me!
//   </Mailto>,
//   document.getElementById('root')
// );